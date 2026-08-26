import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        isQuickView: false,
        username: null  as string | null,
    }),
    actions: {
        enableQuickView() {
            this.isQuickView = true;
        },
        disableQuickView() {
            this.isQuickView = false;
        }
    }
})