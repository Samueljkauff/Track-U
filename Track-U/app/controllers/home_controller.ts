import SpotifyService from "#services/spotify_service"
import { HttpContext } from "@adonisjs/core/http"

export default class HomeController {

  async show({ auth, inertia }: HttpContext) {

    const spotifyService = new SpotifyService();

    const nowListening =
      await spotifyService.getCurrentlyPlaying(auth.user!.id);

    const topTracks =
      await spotifyService.getTopTracks(auth.user!.id, 'long_term', 3);

    const topArtists =
    await spotifyService.getTopArtists(auth.user!.id, 'long_term', 3);
    console.log(topArtists)

    const recentlyPlayed =
      await spotifyService.getRecentlyPlayed(auth.user!.id);

    return inertia.render('home', {
      nowListening,
      topTracks,
      topArtists,
      recentlyPlayed,
    })
  }
}