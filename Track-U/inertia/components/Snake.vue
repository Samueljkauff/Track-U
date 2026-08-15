<template>
    <div class="h-full w-full grid grid-cols-10 pt-8 pb-8">
        <div v-for="i in 170" :class="i === appleCords ? 'bg-[#82302a]' : ''" class="border">{{ appleCords }}</div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                appleCords: 0,
            }
        },
        mounted() {
            this.startGameLoop();
        },
        methods: {
            getRandomInt(min: number, max: number): number {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
            },
            startGameLoop() {
                this.appleCords = this.getRandomInt(1, 170);
            }
        }
    }
</script>