<template>
    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
        <div>
            <p class="text-5xl font-bold z-10">Now Listening to</p>
            <img class="h-125 active" :src="currentSong.albumCover" alt="album cover">
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

<style>
.active {
    box-shadow: 0px 0px 105px 45px rgba(45,255,196,0.9);
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0px 0px 105px 45px rgba(45,255,196,0.9);
    }
    50% {
        box-shadow: 0px 0px 60px 20px rgba(45,255,196,0.5);
    }
}
</style>