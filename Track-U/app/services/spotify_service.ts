import SpotifyAccount from '#models/spotify_account'
import env from '#start/env'
import { DateTime } from 'luxon'

type Token = {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token?: string
  scope?: string
}

type SpotifyUser = {
  id: string
  display_name: string | null
  external_urls: {
    spotify: string
  }
  images: {
    url: string
  }[]
}

export default class SpotifyService {
  async connectAccount(code: string, userId: number) {
    const tokenResponse = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              `${env.get('SPOTIFY_CLIENT_ID')}:${env.get('SPOTIFY_CLIENT_SECRET')}`
            ).toString('base64'),
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: env.get('SPOTIFY_REDIRECT_URI')!,
        }),
      }
    )

    const tokens = await tokenResponse.json() as Token

    const userResponse = await fetch(
      'https://api.spotify.com/v1/me',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    )

    const spotifyUser = await userResponse.json() as SpotifyUser

    await SpotifyAccount.create({
      userId,
      spotifyId: spotifyUser.id,
      userName: spotifyUser.display_name ?? 'Spotify User',
      userLink: spotifyUser.external_urls.spotify,
      userPfp: spotifyUser.images[0]?.url ?? null,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token!,
      expiresAt: DateTime.now().plus({
        seconds: tokens.expires_in,
      }),
    })
  }

  async disconnectAccount(userId: number) {
    const spotifyAccount = await SpotifyAccount
      .query()
      .where('userId', userId)
      .first()

    if (!spotifyAccount) {
      return
    }

    await spotifyAccount.delete()
  }

  async getCurrentlyPlaying(userId: number) {
    const account = await SpotifyAccount
      .query()
      .where('userId', userId)
      .first()

    if (!account) {
      return null
    }

    let response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${account.accessToken}`,
        },
      }
    )

    if (response.status === 401) {
      const accessToken = await this.refreshAccessToken(account)

      response = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    }

    if (response.status === 204) {
      return null
    }

    if (!response.ok) {
      throw new Error(
        `Spotify API error: ${response.status} ${response.statusText}`
      )
    }

    return await response.json()
  }

  async getTopTracks(userId: number) {
    // Spotify /me/top/tracks
  }

  async getTopArtists(userId: number) {
    // Spotify /me/top/artists
  }

  async getRecentlyPlayed(userId: number) {
    // Spotify /me/player/recently-played
  }

  async refreshAccessToken(account: SpotifyAccount) {
    const response = await fetch(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              `${env.get('SPOTIFY_CLIENT_ID')}:${env.get('SPOTIFY_CLIENT_SECRET')}`
            ).toString('base64'),
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: account.refreshToken,
        }),
      }
    )

    if (!response.ok) {
      throw new Error(
        `Spotify token refresh failed: ${response.status} ${response.statusText}`
      )
    }

    const tokens = await response.json() as Token

    account.accessToken = tokens.access_token

    if (tokens.refresh_token) {
      account.refreshToken = tokens.refresh_token
    }

    account.expiresAt = DateTime.now().plus({
      seconds: tokens.expires_in,
    })

    await account.save()

    return account.accessToken
  }
}