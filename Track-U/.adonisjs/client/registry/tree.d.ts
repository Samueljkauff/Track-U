/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  newAccount: {
    store: typeof routes['new_account.store']
  }
  login: typeof routes['login']
  session: {
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  home: typeof routes['home']
  topSongs: typeof routes['TopSongs']
  topArtists: typeof routes['TopArtists']
  shop: typeof routes['Shop']
  profile: typeof routes['Profile']
}
