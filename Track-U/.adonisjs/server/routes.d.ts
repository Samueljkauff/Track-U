import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'quick_view.store': { paramsTuple?: []; params?: {} }
    'spotify.connect': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'quick_view.store': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'spotify.connect': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'spotify.connect': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}