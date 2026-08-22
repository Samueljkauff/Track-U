import '@adonisjs/inertia/types'

import type { VNodeProps, AllowedComponentProps, ComponentInstance } from 'vue'

type ExtractProps<T> = Omit<
  ComponentInstance<T>['$props'],
  keyof VNodeProps | keyof AllowedComponentProps
>

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'admin/AdminDashboard': ExtractProps<(typeof import('../../inertia/pages/admin/AdminDashboard.vue'))['default']>
    'auth/AuthPage': ExtractProps<(typeof import('../../inertia/pages/auth/AuthPage.vue'))['default']>
    'auth/login': ExtractProps<(typeof import('../../inertia/pages/auth/login.vue'))['default']>
    'auth/QuickView': ExtractProps<(typeof import('../../inertia/pages/auth/QuickView.vue'))['default']>
    'auth/signup': ExtractProps<(typeof import('../../inertia/pages/auth/signup.vue'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.vue'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.vue'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.vue'))['default']>
    'TopSongs': ExtractProps<(typeof import('../../inertia/pages/TopSongs.vue'))['default']>
    'TopArtists': ExtractProps<(typeof import('../../inertia/pages/TopArtists.vue'))['default']>
    'Shop': ExtractProps<(typeof import('../../inertia/pages/Shop.vue'))['default']>
  }
}
