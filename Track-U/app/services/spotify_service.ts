import SpotifyAccount from '#models/spotify_account'
import env from '#start/env'
import { DateTime } from 'luxon'

type Token = {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
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
      })

    const tokens = await tokenResponse.json() as Token

    const userResponse = await fetch(
      'https://api.spotify.com/v1/me',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      })

    const spotifyUser = await userResponse.json() as SpotifyUser

    await SpotifyAccount.create({
      userId,
        spotifyId: spotifyUser.id,
        userName: spotifyUser.display_name ?? 'Spotify User',
        userLink: spotifyUser.external_urls.spotify,
        userPfp: spotifyUser.images[0]?.url ?? null,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
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
}