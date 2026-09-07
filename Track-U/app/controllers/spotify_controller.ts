import type { HttpContext } from '@adonisjs/core/http';
import env from '#start/env';

export default class SpotifyController {
    async connect({ response }: HttpContext) {
        const params = new URLSearchParams({
            client_id: env.get('SPOTIFY_CLIENT_ID')!,
            response_type: 'code',
            redirect_uri: env.get('SPOTIFY_REDIRECT_URI')!,
            scope: 'user-top-read',
        })

        return response.redirect(
            `https://accounts.spotify.com/authorize?${params.toString()}`
        )
    }
}