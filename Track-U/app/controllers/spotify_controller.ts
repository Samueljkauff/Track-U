import { type HttpContext } from '@adonisjs/core/http';
import env from '#start/env';
import { randomBytes } from 'node:crypto'
import SpotifyService from '#services/spotify_service';

export default class SpotifyController {
    async connect({ response, session }: HttpContext) {
        const state = randomBytes(32).toString('hex')

        session.put('spotifyState', state)


        const params = new URLSearchParams({
        client_id: env.get('SPOTIFY_CLIENT_ID')!,
        response_type: 'code',
        redirect_uri: env.get('SPOTIFY_REDIRECT_URI')!,
        scope: [
        'user-top-read',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-read-recently-played',
        ].join(' '),
        state,
        })

        return response.redirect(
            `https://accounts.spotify.com/authorize?${params.toString()}`
        )
    }

    async disconnect({ response, auth}: HttpContext) {

        const spotifyService = new SpotifyService();

        await spotifyService.disconnectAccount(auth.user!.id);

        return response.redirect('/profile');
    }

    async callback({ request, response, session, auth }: HttpContext) {
        const code = request.input('code');
        const returnedState = request.input('state');
        const savedState = session.get('spotifyState');

        if (!code || returnedState !== savedState) {
            return response.badRequest('Invalid Spotify authorization request')
        }

        session.forget('spotifyState')

        const spotifyService = new SpotifyService();

        await spotifyService.connectAccount(code, auth.user!.id)

        return response
        .redirect()
        .withQs(false)
        .toRoute('Profile')
    }
}