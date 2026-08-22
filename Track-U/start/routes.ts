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

router.on('/').renderInertia('home', {}).as('home')

router.on('/top-songs').renderInertia('TopSongs', {}).as('TopSongs')
router.on('/top-artists').renderInertia('TopArtists', {}).as('TopArtists')
router.on('/shop').renderInertia('Shop', {}).as('Shop')
router
  .group(() => {
    // router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    // router.get('login', [controllers.Session, 'create'])
    router.on('/login').renderInertia('auth/AuthPage', {})
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
