<template>
<div class="flex flex-col h-full min-h-0 p-3 gap-3">

  <div
    class="bg-(--surface) flex flex-col rounded-xs text-[#f8f9fa] container-shadow h-full min-h-0"
  >

    <p class="m-3 font-semibold text-xl shrink-0">
      Listening History
    </p>

    <hr class="w-[90%] shrink-0">

    <div class="flex-1 min-h-0 overflow-y-auto">

      <div
        v-for="(song, index) in recentlyPlayed"
        :key="`${song.playedAt}-${index}`"
        class="w-full grid grid-cols-5 items-center gap-3 px-5 py-3"
      >

        <img
          class="w-14 h-14 object-cover rounded-xs"
          :src="song.albumCover"
          alt="Album cover"
        >

        <div class="col-span-2 min-w-0">
          <p class="font-semibold truncate">
            {{ song.songName }}
          </p>

          <p class="text-sm opacity-70 truncate">
            {{ song.artist }}
          </p>
        </div>

        <p class="text-sm opacity-70 truncate">
          {{ song.album }}
        </p>

        <p class="text-sm opacity-70 text-right">
          {{ song.playedAt }}
        </p>

      </div>

    </div>

  </div>

</div>
</template>

<script lang="ts">
import { PropType } from 'vue'

interface RecentlyPlayed {
  songName: string
  album: string
  artist: string
  albumCover: string
  playedAt: string
}

export default {
  props: {
    recentlyPlayed: {
      type: Array as PropType<RecentlyPlayed[]>,
      required: true,
    }
  }
}
</script>