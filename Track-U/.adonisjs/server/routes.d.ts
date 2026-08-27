import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'TopSongs': { paramsTuple?: []; params?: {} }
    'TopArtists': { paramsTuple?: []; params?: {} }
    'Shop': { paramsTuple?: []; params?: {} }
    'Profile': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
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