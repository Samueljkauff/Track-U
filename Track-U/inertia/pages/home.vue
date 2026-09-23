<template>

  <Head title="Homepage" />

  <div class="grid grid-cols-3 gap-4 w-auto h-full min-h-0 m-1">

    <div class="segment col-span-2 h-full min-h-0 grid grid-cols-3 gap-3">

      <NowListening
        :now-listening="nowListening"
        class="min-h-0 col-span-2"
      />

      <EntertainmentZone />

      <Topsters
      :categories="categories"
        class="w-auto grid grid-cols-2 gap-3 flex-1 min-h-0"
      />

    </div>

    <div class="segment h-full min-h-0 overflow-hidden">

      <Recents
        :recently-played="recentlyPlayed"
        class="h-full"
      />

    </div>

  </div>

</template>

<script lang="ts">
import { Head } from '@inertiajs/vue3';
import NowListening from '~/components/NowListening.vue';
import Recents from '~/components/Recents.vue';
import Topsters from '~/components/Topsters.vue';
import EntertainmentZone from '~/components/EntertainmentZone.vue';
import { PlayingNow } from '~/types/playingNow';



export default {
  name: 'Home',
  mounted() {
    // console.log(this.recentlyPlayed.items)
  },
    computed: {
      nowListening() {
        if(this.$page.props.nowListening) {
          const spotify = this.$page.props.nowListening

          const currentPlay = {
            songName: spotify.item.name,
            album: spotify.item.album.name,
            artist: spotify.item.artists[0].name,
            albumCover: spotify.item.album.images[0].url,
            isPlaying: spotify.is_playing,
          } as PlayingNow;
          return currentPlay
        }
        return null
      },
      topTracks() {
        return this.$page.props.topTracks;
      },
      topArtists() {
        return this.$page.props.topArtists;
      },
       categories() {
        return [
          {
            name: 'Top Artists of All Time',
            topThree: this.$page.props.topArtists.items.map((artist) => ({
              name: artist.name,
              image: artist.images[0]?.url ?? '',
            })),
          },
          {
            name: 'Top Tracks of All Time',
            topThree: this.$page.props.topTracks.items.map((track) => ({
              name: track.name,
              image: track.album.images[0]?.url ?? '',
            })),
          },
        ]
      },
      recentlyPlayed() {
        const spotify = this.$page.props.recentlyPlayed

        if (!spotify) {
          return []
        }

        const recents = spotify.items
        const recentlyPlayed = []

        for (let i = 0; i < recents.length; i++) {
          recentlyPlayed.push({
            songName: recents[i].track.name,
            album: recents[i].track.album.name,
            artist: recents[i].track.artists[0].name,
            albumCover: recents[i].track.album.images[0].url,
            playedAt: recents[i].played_at,
          })
        }
        return recentlyPlayed
      }
    },
  components: {
    Head,
    NowListening,
    Topsters,
    Recents,
    EntertainmentZone
  }
};
</script>