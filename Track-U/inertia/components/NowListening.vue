<template>
    <div class="w-full h-full pt-3 pl-3 pr-3 min-h-0">
        <div class="w-full h-full flex flex-col items-center justify-center gap-3 bg-(--surface) rounded-xs p-8 text-[#f8f9fa] container-shadow min-h-0">
            <p class="text-5xl font-bold z-10">Now Listening to</p>
            <img class="max-h-60 active" :src="currentSong.albumCover" alt="album cover">
            <p class="text-4xl font-semibold">{{ currentSong.songName }}</p>
            <p class="text-2xl">
                By: <span class="font-semibold">{{ currentSong.artistName }}</span>
            </p>
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
            },
        };
    },
};
</script>

<style scoped>
.active {
    box-shadow: 0px 0px 105px 45px rgba(54, 155, 89, 0.9);
    animation: pulse 5s ease-in-out infinite;
}

@keyframes pulse {
    0%,
    100% {
        box-shadow: 0px 0px 105px 45px rgba(54, 155, 89, 0.9);
    }

    50% {
        box-shadow: 0px 0px 60px 20px rgba(54, 155, 89, 0.5);
    }
}
</style>