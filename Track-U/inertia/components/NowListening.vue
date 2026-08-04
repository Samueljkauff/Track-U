<template>
    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
        <div class="flex flex-col items-center gap-3 bg-(--surface) rounded-sm p-8 text-[#f8f9fa] border border-[#6C757D]">
            <p class="text-5xl font-bold z-10">Now Listening to</p>
            <img class="h-80 active" :src="currentSong.albumCover" alt="album cover">
            <p class="text-4xl font-semibold">{{ currentSong.songName }}</p>
            <p class="text-2xl">By: <span class="font-semibold">{{ currentSong.artistName }}</span></p>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "NowListening",
    data() {
        return {
            currentSong: {
                songName: "SongName",
                albumCover: "../../images/Album.jpg",
                album: "AlbumName",
                artistName: "Singer Mann",
            }
        }
    }
}
</script>

<style scoped>
.active {
    box-shadow: 0px 0px 105px 45px rgba(54, 155, 89, 0.9);
    animation: pulse 5s ease-in-out infinite;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(var(--spacing) * 3)

}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0px 0px 105px 45px rgba(54, 155, 89, 0.9);
    }
    50% {
        box-shadow: 0px 0px 60px 20px rgba(54, 155, 89, 0.5);
    }
}
</style>