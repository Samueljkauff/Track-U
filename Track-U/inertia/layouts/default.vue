<script setup lang="ts">

import { computed, watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { toast, Toaster } from 'vue-sonner'
import type { Data } from '@generated/data'
import NavBar from '~/components/NavBar.vue'
import { useAppStore } from '~/stores/appStore'

const page = usePage<Data.SharedProps>()

const appStore = useAppStore()

const showNavBar = computed(() => {
  return appStore.isQuickView || !!page.props.user
})

watch(
  () => page.url,
  () => toast.dismiss()
)

watch(
  () => page.props.flash,
  (flashMessages) => {
    if (flashMessages.error) {
      toast.error(flashMessages.error)
    }
    if (flashMessages.success) {
      toast.success(flashMessages.success)
    }
  },
  { immediate: true }
)
</script>

<template>
  <header>
    <NavBar v-if="showNavBar" />
  </header>
  <main>
    <slot />
  </main>
  <Toaster position="top-center" theme="dark" />
</template>