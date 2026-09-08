import type { HttpContext } from '@adonisjs/core/http';
import env from '#start/env';
import { randomBytes } from 'node:crypto'

export default class SpotifyController {
    async connect({ response, session }: HttpContext) {
        const state = randomBytes(32).toString('hex')

        session.put('spotifyState', state)

        const params = new URLSearchParams({
            client_id: env.get('SPOTIFY_CLIENT_ID')!,
            response_type: 'code',
            redirect_uri: env.get('SPOTIFY_REDIRECT_URI')!,
            scope: 'user-top-read',
            state,
        })

        return response.redirect(
            `https://accounts.spotify.com/authorize?${params.toString()}`
        )
    }

    async callback({ request, response, session }: HttpContext) {
        const code = request.input('code');
        const returnedState = request.input('state');
        const savedState = session.get('spotifyState');

        if (!code || returnedState !== savedState) {
            return response.badRequest('Invalid Spotify authorization request')
        }

          session.forget('spotifyState')

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

        const tokens = await tokenResponse.json()

        return response.redirect('/profile')
    }
}