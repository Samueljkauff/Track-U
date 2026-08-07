<template>
  <Head title="Homepage" />
  <div class="grid grid-cols-3 gap-4 w-auto h-full m-1">
    <div class="segment col-span-2 h-full flex flex-col gap-3">
      <NowListening class="flex-1" />
      <Topsters class="w-auto grid grid-cols-3 gap-3 flex-1" />
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

export default {
  name: 'Home',
  components: {
    Head,
    NowListening,
    Topsters,
    Recents
  }
};
</script>