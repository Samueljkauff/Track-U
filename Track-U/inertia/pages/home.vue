<template>
  <Head title="Homepage" />
  <div class="grid grid-cols-3 gap-4 w-auto h-full m-1">
    <div class="segment col-span-2 h-full grid grid-cols-3 gap-3 min-h-0">
      <NowListening :now-listening="nowListening" class="min-h-0 col-span-2" />
      <EntertainmentZone></EntertainmentZone>
      <Topsters class="w-auto grid grid-cols-2 gap-3 flex-1 min-h-0" />
    </div>
    <div class="segment"> 
      <Recents />
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
    console.log(this.nowListening)
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
          } as PlayingNow;
          return currentPlay
        }
        return null
      },
      topTracks() {
        return this.$page.props.topTracks
      },
      topArtists() {
        return this.$page.props.topArtists
      },
      recentlyPlayed() {
        return this.$page.props.recentlyPlayed
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