<template>
  <Head title="Profile" />
  <div class="grid grid-cols-2 grid-rows-2 gap-4 w-auto h-full m-1 text-[#f8f9fa]">
      <div class="segment col-span-1 row-span-2 h-full w-full min-h-0 p-3 flex flex-col gap-3">
  <div class="flex flex-col shrink-0 h-3/4 container-shadow bg-(--surface) items-center">
    <p class="text-6xl mt-6 font-bold">Account Information</p>
    <hr class="w-[90%] text-gray-400!">
    <img class="size-6xl mt-6" src="" alt="pfp">
    <p class="text-3xl">{{ accountLabel }}</p>
    <p>{{ user?.email }}</p>
    <p>Joined: {{ createdAt }}</p>
  </div>
  <div class="grid grid-cols-2 flex-1 min-h-0 container-shadow bg-(--surface)">
    <div class="grid grid-cols-2 w-full h-full p-3">
        <div>
            <img
            :src="spotifyProfile.userPfp"
            :alt="spotifyProfile.userName"
        >
        </div>
        <div>
            <p>{{ spotifyProfile.userName }}</p>
        <a
            :href="spotifyProfile.userLink"
            target="_blank"
            rel="noopener noreferrer">
            View Spotify Profile
        </a>
        </div>
    </div>
    <div class="flex justify-center w-full h-full p-3 items-center">
        <button class="size-xl disabled:opacity-50 disabled:cursor-not-allowed bg-[#1BD760]!" :disabled="!!$page.props.isQuickView" @click="connectSpotify">
        {{ spotifyProfile
            ? 'Disconnect Spotify'
            : 'Connect Spotify' }}
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
                <button class="bg-red-500! mt-4 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="!!$page.props.isQuickView">Delete Account</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '~/stores/appStore';
import { mapStores } from 'pinia';
import { router } from '@inertiajs/vue3'

type PageUser = {
    id: number
    fullName: string | null
    email: string
    createdAt: string
    initials: string
}

type spotifyProfile = {
    userName: string,
    userPfp: string | undefined,
    userLink: string,
}

    export default {
        data() {
            return { 
                user: this.$page.props.user as PageUser,
                spotifyProfile: this.$page.props.spotifyAccount as spotifyProfile
            }
        },
        methods: {
            signOut() {
            router.post('/logout');
            },
            connectSpotify() {
                if(!this.spotifyProfile) {
                    window.location.href = '/spotify/connect'
                } else {
                    router.delete('/spotify/disconnect')
                }
            }
        },
        computed: {
            ...mapStores(useAppStore),

            accountLabel() {
                if(this.$page.props.isQuickView) {
                    return 'Quick View';
                } else {
                return this.user?.fullName ?? 'Sign In'
                }
            },

            createdAt() {
                if (!this.user?.createdAt) {
                    return ''
                }

                return new Date(this.user?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })
            }
        }
    }
</script>