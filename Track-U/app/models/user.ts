import { UserSchema } from '#database/schema'

import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

import { hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'

import SpotifyAccount from '#models/spotify_account'

export default class User extends compose(
  UserSchema,
  withAuthFinder(hash)
) {
  @hasOne(() => SpotifyAccount)
  declare spotifyAccount: HasOne<typeof SpotifyAccount>

  get initials() {
    const [first, last] = this.fullName
      ? this.fullName.split(' ')
      : this.email.split('@')

    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }

    return `${first?.slice(0, 2)}`.toUpperCase()
  }
}