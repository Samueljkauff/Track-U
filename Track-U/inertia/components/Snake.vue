<template>
    <p class="pt-2">Score: {{ score }}</p>
    <div class="relative h-full w-full grid grid-cols-10 pt-2 pb-8">
        <div v-for="i in boardSize" :class="
        i === appleCords
            ? 'bg-[#82302a]'
            : snakeLocation.includes(i)
                ? 'bg-[#212529] border-none'
                : ''
    " class="border border-[#212529]"></div>
        <div
            v-if="!alive"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border bg-(--surface-secondary) px-10 py-4 text-2xl whitespace-nowrap"
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
                snakeLocation: [0, 0, 0],
                direction: {
                    name: 'up',
                    math: -10,
                },
                score: 0,
                gameLoop: null as ReturnType<typeof setInterval> | null,
                alive: true,
            }
        },
        watch: {
            playing(newValue: boolean) {
                if(newValue === true) {
                    this.startGameLoop();
                }
            },
        },
        props: {
        playing: {
            type: Boolean,
            required: true,
        },
        },
        mounted() {
            window.addEventListener('keydown', this.handleMovement);
        },
        beforeUnmount() {
            window.removeEventListener('keydown', this.handleMovement);
        },
        methods: {
            getRandomInt(min: number, max: number): number {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
            },
            startGameLoop() {
                this.spawnGame();

                this.gameLoop = setInterval(()=> {
                    let nextLocation = this.snakeLocation[0] + this.direction.math;
                    let pushLocation = this.snakeLocation[0];
                    if(!this.isPositionValid()) {
                        clearInterval(this.gameLoop!);
                        this.alive = false;
                        this.direction = {
                            name: 'up',
                            math: -10,
                        };
                        this.$emit('update:playing', false);
                        return;
                    }

                    if(!this.handleSnakeCollision()) {
                        clearInterval(this.gameLoop!);
                        this.alive = false;
                        this.direction = {
                            name: 'up',
                            math: -10,
                        };
                        this.$emit('update:playing', false);
                        return;
                    }
                
                    for(let i = 0; i < this.snakeLocation.length; i++) {
                        if(i < this.snakeLocation.length){
                        pushLocation = this.snakeLocation[i];
                        this.snakeLocation[i] = nextLocation;
                        nextLocation = pushLocation;
                        this.handleAppleEat();
                        }
                    }
                }, 150)
            },
            spawnGame() {
                this.appleCords = this.getRandomInt(1, 170);
                this.score = 0;
                this.snakeLocation = [0, 0, 0];
                this.snakeLocation[0] = this.boardSize/2;
                this.snakeLocation[1] = (this.boardSize/2)-this.direction.math;
                this.snakeLocation[2] = this.snakeLocation[1]-this.direction.math;
                this.alive = true;
            },
            handleMovement(Event: KeyboardEvent) {
                if(this.alive) {
                    switch(Event.key) {
                        case 'ArrowUp':
                            if(this.direction.name === 'down') {
                                break;
                            }
                            this.direction = {
                                name: 'up',
                                math: -10,
                            };
                            break;
                        case 'ArrowDown':
                            if(this.direction.name === 'up') {
                                break;
                            }
                            this.direction = {
                                name: 'down',
                                math: 10,
                            };
                            break;
                        case 'ArrowLeft':
                            if(this.direction.name === 'right') {
                                break;
                            }
                            this.direction = {
                                name: 'left',
                                math: -1,
                            };
                            break;
                        case 'ArrowRight':
                            if(this.direction.name === 'left') {
                                break;
                            }
                            this.direction = {
                                name: 'right',
                                math: 1,
                            };
                            break;
                        default:
                            break;
                    }
                }
            },
            handleAppleEat() {
                if(this.snakeLocation.includes(this.appleCords)){
                    this.appleCords = this.getRandomInt(1, 170);
                    this.snakeLocation[this.snakeLocation.length] = this.snakeLocation[this.snakeLocation.length-1] + this.direction.math;
                    this.score++;
                }
            },
            handleSnakeCollision(): boolean {
                if(this.snakeLocation.slice(1).includes(this.snakeLocation[0])) {
                    return false;
                } else {
                    return true;
                }
            },
            isPositionValid(): boolean {
                let nextLocation = this.snakeLocation[0] + this.direction.math;
                let isValid = true;

                if(nextLocation > 170 || nextLocation < 1 || (this.snakeLocation[0]%10 === 0 && nextLocation%10 === 1) || (nextLocation%10 === 0 && this.snakeLocation[0]%10 === 1)) {
                    isValid = false;
                }

                return isValid;
            },
    },
    emits: ['update:playing'],
}
</script>