import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'login': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'quick_view.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
    'spotify.connect': { paramsTuple?: []; params?: {} }
    'spotify.callback': { paramsTuple?: []; params?: {} }
    'spotify.disconnect': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'quick_view.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'login': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
    'spotify.connect': { paramsTuple?: []; params?: {} }
    'spotify.callback': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'login': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
    'spotify.connect': { paramsTuple?: []; params?: {} }
    'spotify.callback': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'spotify.disconnect': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}