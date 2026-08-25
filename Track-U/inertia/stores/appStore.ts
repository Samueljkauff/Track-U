import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        isQuickView: false,
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