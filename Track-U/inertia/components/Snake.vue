<template>
    <div class="h-full w-full grid grid-cols-10 pt-8 pb-8">
        <div v-for="i in boardSize" :class="
        i === appleCords
            ? 'bg-[#82302a]'
            : i === snakeLocation
                ? 'bg-black'
                : ''
    " class="border"></div>
        <div
            v-if="!alive"
            class="absolute z-10 bg-white px-4 py-2"
        >
            Game Over
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                boardSize: 170,
                appleCords: 0,
                snakeLocation: 0,
                direction: -10,
                gameLoop: null as ReturnType<typeof setInterval> | null,
                alive: true,
            }
        },
        mounted() {
            window.addEventListener('keydown', this.handleMovement);
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
                this.snakeLocation = this.boardSize/2; 
                this.alive = true;

                this.gameLoop = setInterval(()=> {
                    let nextLocation = this.snakeLocation + this.direction;
                    if(!this.isPositionValid()) {
                        this.alive = false;
                    } else {
                        this.snakeLocation = nextLocation;
                    }
                }, 180)

                if(!this.alive) {
                    clearInterval(this.gameLoop);
                }
            },
            handleMovement(Event: KeyboardEvent) {
                switch(Event.key) {
                    case 'ArrowUp':
                        this.direction = -10;
                        break;
                    case 'ArrowDown':
                        this.direction = 10;
                        break;
                    case 'ArrowLeft':
                        this.direction = -1;
                        break;
                    case 'ArrowRight':
                        this.direction = 1;
                        break;
                    default:
                        break;
                }
            },
            isPositionValid(): boolean {
                let nextLocation = this.snakeLocation + this.direction;
                let isValid = true;

                if(nextLocation > 170 || nextLocation < 1 || (this.snakeLocation%10 === 0 && nextLocation%10 === 1) || (nextLocation%10 === 0 && this.snakeLocation%10 === 1)) {
                    isValid = false;
                }

                return isValid;
            },
    },
}
</script>