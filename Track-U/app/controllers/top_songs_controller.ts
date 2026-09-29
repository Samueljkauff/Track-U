// import type { HttpContext } from '@adonisjs/core/http'

import SpotifyService from "#services/spotify_service";
import { HttpContext } from "@adonisjs/core/http";

export default class TopSongsController {

        async show({ auth, inertia }: HttpContext) {
            
            const spotifyService = new SpotifyService();
        
            const longTermSongs =
            await spotifyService.getTopTracks(auth.user!.id, 'long_term', 50);
    
            const mediumTermSongs =
            await spotifyService.getTopTracks(auth.user!.id, 'medium_term', 50);
    
            const shortTermSongs =
            await spotifyService.getTopTracks(auth.user!.id, 'short_term', 50);
    
            return inertia.render('TopArtists', {
                topArtists: {
                    longTerm: longTermSongs,
                    mediumTerm: mediumTermSongs,
                    shortTerm: shortTermSongs,
                },
                })
        }
}