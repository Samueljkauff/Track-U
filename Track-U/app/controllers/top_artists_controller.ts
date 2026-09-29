import SpotifyService from "#services/spotify_service";
import { HttpContext } from "@adonisjs/core/http";

export default class TopArtistsController {

    async show({ auth, inertia }: HttpContext) {
        
        const spotifyService = new SpotifyService();
    
        const longTermArtists =
        await spotifyService.getTopArtists(auth.user!.id, 'long_term', 50);

        const mediumTermArtists =
        await spotifyService.getTopArtists(auth.user!.id, 'medium_term', 50);

        const shortTermArtists =
        await spotifyService.getTopArtists(auth.user!.id, 'short_term', 50);

        return inertia.render('TopArtists', {
            topArtists: {
                longTerm: longTermArtists,
                mediumTerm: mediumTermArtists,
                shortTerm: shortTermArtists,
            },
        })
    }

}