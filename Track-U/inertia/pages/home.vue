<template>
  <Head title="Homepage" />
  <div class="grid grid-cols-3 gap-4 w-auto h-full m-1">
    <div class="segment col-span-2 h-full grid grid-col-3 gap-3 min-h-0">
      <NowListening class="min-h-0 col-span-2" />
      <div class="h-full flex flex-col">
        <component :is="entertainmentZone[selectedZone-1]" />
        <DotNav :tabs="entertainmentZone.length" v-model="selectedZone" class="mt-auto" />
      </div>
      <Topsters class="w-auto grid grid-cols-2 gap-3 flex-1 min-h-0" />
    </div>
    <div class="segment">
      <Recents />
    </div>
  </div>
</template>

<script lang="ts">
import { Head } from '@inertiajs/vue3';
import AlbumShowcase from '~/components/AlbumShowcase.vue';
import DotNav from '~/components/DotNav.vue';
import NowListening from '~/components/NowListening.vue';
import Recents from '~/components/Recents.vue';
import Topsters from '~/components/Topsters.vue';
import Pong from '~/components/Pong.vue';
import Snake from '~/components/Snake.vue';

export default {
  name: 'Home',
  data() {
    return {
      entertainmentZone: [AlbumShowcase, Pong, Snake],
      selectedZone: 1,
    }
  },
  components: {
    Head,
    NowListening,
    Topsters,
    Recents,
    AlbumShowcase,
    DotNav,
    Pong
  }
};
</script>