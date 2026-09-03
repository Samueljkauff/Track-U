<template>
  <Head title="TopArtists" />
  <div class="grid grid-cols-2 grid-rows-2 gap-4 w-auto h-full m-1 text-[#f8f9fa]">
      <div class="segment col-span-1 row-span-2 h-full w-full min-h-0 p-3 flex flex-col gap-3">
  <div class="flex flex-col shrink-0 h-3/4 container-shadow bg-(--surface) items-center">
    <p class="text-6xl mt-6 font-bold">Account Information</p>
    <hr class="w-[90%] text-gray-400!">
    <img class="size-6xl mt-6" src="" alt="pfp">
    <p class="text-3xl">{{ accountLabel }}</p>
    <p>Email</p>
    <p>Created at</p>
  </div>
  <div class="grid grid-cols-2 flex-1 min-h-0 container-shadow bg-(--surface)">
    <div class="w-full h-full p-3">
        PFP, username, etc
    </div>
    <div class="flex justify-center w-full h-full p-3 items-center">
        <button class="size-xl">
            Connect Spotify
        </button>
    </div>
  </div>
    </div>
    <div class="segment col-span-1 row-span-1 h-full w-full gap-3 min-h-0 p-3">
      <div class="flex flex-col w-full h-full container-shadow bg-(--surface) items-center">
        <p class="text-5xl mt-6 font-bold">Items</p>
        <hr class="w-[90%] text-gray-400!">
      </div>
    </div>
    <div class="segment col-span-1 row-span-1 h-full w-full gap-3 min-h-0 p-3">
        <div class="grid grid-rows-2 w-full h-full container-shadow bg-(--surface)">
            <div class="flex flex-col h-full items-center justify-center">
                <p class="text-2xl">Sign Out</p>
                <hr class="w-[90%] text-gray-400! my-2">
                <p class="text-gray-300 text-center px-6">
                    Sign out of your account on this device. You can sign back in at any time.
                </p>
                <button class="mt-4" @click="signOut">Sign Out</button>
            </div>
            <div class="flex flex-col h-full items-center justify-center">
                <p class="text-xl">Delete Account</p>
                <hr class="w-[90%] text-gray-400! my-2">
                <p class="text-gray-300 text-sm text-center px-6">
                    Permanently delete your account and associated data. This action cannot be undone.
                </p>
                <button class="bg-red-500! mt-4">Delete Account</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '~/stores/appStore';
import { mapStores } from 'pinia';
import User from '#models/user';
import { router } from '@inertiajs/vue3'

    export default {
        methods: {
            signOut() {
            router.post('/logout');
            }
        },
        computed: {
            ...mapStores(useAppStore),

            accountLabel() {
                if(this.appStore.isQuickView) {
                    return 'Quick View';
                } else {
                const user = this.$page.props.user as User | undefined
                return user?.fullName ?? 'Sign In'
                }
            }
        }
    }
</script>