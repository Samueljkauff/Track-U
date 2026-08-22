/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  topSongs: typeof routes['TopSongs']
  topArtists: typeof routes['TopArtists']
  shop: typeof routes['Shop']
  newAccount: {
    store: typeof routes['new_account.store']
  }
  session: {
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
}
