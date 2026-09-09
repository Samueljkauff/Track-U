/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('signup', [controllers.NewAccount, 'store'])
    router.on('/login').renderInertia('auth/AuthPage', {}).as('login')
    router.post('login', [controllers.Session, 'store'])
    router.post('/quick-view', [controllers.QuickView, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
    router.on('/').renderInertia('home', {}).as('home')
    router.on('/top-songs').renderInertia('TopSongs', {}).as('TopSongs')
    router.on('/top-artists').renderInertia('TopArtists', {}).as('TopArtists')
    router.on('/shop').renderInertia('Shop', {}).as('Shop')
    router.get('/profile', [controllers.Profile, 'show']).as('Profile')
  })
  .use(middleware.authOrQuickView())

  router
  .group(() => {
    router.get('/spotify/connect', [controllers.Spotify, 'connect'])
    router.get('/spotify/callback', [controllers.Spotify, 'callback'])
    router.delete('/spotify/disconnect', [controllers.Spotify, 'disconnect'])
  })
  .use(middleware.auth())
