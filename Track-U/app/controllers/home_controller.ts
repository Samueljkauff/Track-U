import SpotifyService from "#services/spotify_service"
import { HttpContext } from "@adonisjs/core/http"

export default class HomeController {

  async show({ auth, inertia }: HttpContext) {

    const spotifyService = new SpotifyService()

    const nowListening =
      await spotifyService.getCurrentlyPlaying(auth.user!.id)

      console.log('NOW LISTENING:', nowListening)
    const topTracks =
      await spotifyService.getTopTracks(auth.user!.id)

    const topArtists =
      await spotifyService.getTopArtists(auth.user!.id)

    const recentlyPlayed =
      await spotifyService.getRecentlyPlayed(auth.user!.id)

    return inertia.render('home', {
      nowListening,
      topTracks,
      topArtists,
      recentlyPlayed,
    })
  }
}