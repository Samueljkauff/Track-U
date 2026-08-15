<template>
    <div class="h-full w-full grid grid-cols-10 pt-8 pb-8">
        <div v-for="i in boardSize" :class="
        i === appleCords
            ? 'bg-[#82302a]'
            : i === snakeSpawn
                ? 'bg-black'
                : ''
    " class="border"></div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                boardSize: 170,
                appleCords: 0,
                snakeSpawn: 0,
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
                this.snakeSpawn = this.boardSize/2;
            }
        }
    }
</script>