/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'TopSongs': {
    methods: ["GET","HEAD"],
    pattern: '/top-songs',
    tokens: [{"old":"/top-songs","type":0,"val":"top-songs","end":""}],
    types: placeholder as Registry['TopSongs']['types'],
  },
  'TopArtists': {
    methods: ["GET","HEAD"],
    pattern: '/top-artists',
    tokens: [{"old":"/top-artists","type":0,"val":"top-artists","end":""}],
    types: placeholder as Registry['TopArtists']['types'],
  },
  'Shop': {
    methods: ["GET","HEAD"],
    pattern: '/shop',
    tokens: [{"old":"/shop","type":0,"val":"shop","end":""}],
    types: placeholder as Registry['Shop']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
