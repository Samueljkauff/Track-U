<template>
    <div class="relative h-full w-full flex flex-col mt-8 mb-8 border-x" ref="board">
        <div class="absolute w-[20%] h-2 bg-black top-0 left-1/2 -translate-x-1/2"></div>
        <div class="absolute w-2 h-2 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute w-[20%] h-2 bg-black bottom-0" ref="paddle" :style="{ left: `${paddleX}px` }"></div>
    </div>
</template>

<script lang="ts">

    export default {
        data() {
            return {
                boardsize: 0 as number,
                paddleX: 0 as number,
                paddleWidth: 0 as number,
            }
        },
        mounted() {
            this.boardsize = (this.$refs.board as HTMLElement).clientWidth
            this.paddleX = (this.$refs.board as HTMLElement).clientWidth/2-(this.$refs.paddle as HTMLElement).clientWidth/2;
            this.paddleWidth = (this.$refs.paddle as HTMLElement).clientWidth;
            console.log(this.boardsize)
    
            window.addEventListener('keydown', this.handleMovement);
        },

        computed: {
            maxPaddleX() {
                return this.boardsize - this.paddleWidth;
            },

            paddleStep() {
                return this.boardsize / 20;
            },
        },
        methods: {
            handleMovement(Event: KeyboardEvent) {
                switch(Event.key) {
                    case 'ArrowRight':
                        if(this.paddleX > this.maxPaddleX-1) {
                            break;
                        }
                        this.paddleX+=this.paddleStep;
                        break;
                    case 'ArrowLeft':
                        if(this.paddleX < 1) {
                            break;
                        }
                        this.paddleX-=this.boardsize/20;
                        break;
                }
            }
        }
    }
</script>
