<template>
<div class="flex flex-col h-full min-h-0 p-3 gap-3">
  <div
    class="bg-(--surface) flex flex-col rounded-xs text-[#f8f9fa] container-shadow h-full min-h-0"
  >
    <p class="m-3 font-semibold text-xl shrink-0 text-center">
      Listening History
    </p>
    <hr class="shrink-0">
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
          {{ formatPlayedAt(song.playedAt) }}
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
  methods: {
    formatPlayedAt(date: string) {
      const played = new Date(date)
      const now = new Date()

      const isToday =
        played.toDateString() === now.toDateString()

      const yesterday = new Date()
      yesterday.setDate(now.getDate() - 1)

      const isYesterday =
        played.toDateString() === yesterday.toDateString()

      const time = played.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
      })

      if (isToday) {
        return `Today, ${time}`
      }

      if (isYesterday) {
        return `Yesterday, ${time}`
      }

      return played.toLocaleDateString([], {
        month: 'short',
        day: 'numeric',
      }) + `, ${time}`
    }
  },
  props: {
    recentlyPlayed: {
      type: Array as PropType<RecentlyPlayed[]>,
      required: true,
    }
  }
}
</script>