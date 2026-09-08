import type { HttpContext } from '@adonisjs/core/http'
import SpotifyAccount from '#models/spotify_account'

export default class ProfileController {
  async show({ auth, inertia }: HttpContext) {
    const spotifyAccount = await SpotifyAccount
      .query()
      .where('userId', auth.user!.id)
      .first()

    return inertia.render('Profile', {
    spotifyAccount: spotifyAccount
        ? {
            userName: spotifyAccount.userName,
            userLink: spotifyAccount.userLink,
            userPfp: spotifyAccount.userPfp,
        }
        : null,
    })
  }
}