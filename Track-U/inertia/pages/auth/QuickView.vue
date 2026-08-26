<template>
    <div class="form-container bg-(--surface) rounded-xs p-8 text-[#f8f9fa] container-shadow w-[75%]">
        <p class="text-2xl font-semibold">Quick View</p>
        <hr class="text-gray-400">
        <p class="text-gray-300">Quick view is for users who want a demonstration of the scope of the app before or instead of creating an account. The data displayed belongs to <a class="text-[#04DF72]" href="https://github.com/Samueljkauff">my</a> Spotify account.</p>
        <button class="mt-10" @click="onClick">Quick View</button>
    </div>
</template>

<script lang="ts">
import { useAppStore } from '~/stores/appStore';
import { router } from '@inertiajs/vue3';

export default {

    data() {
        return {
            appStore: useAppStore()

        }
    },
    methods: {
        onClick() {
            this.appStore.enableQuickView();
            router.visit('/');
        }
    }
}
</script>