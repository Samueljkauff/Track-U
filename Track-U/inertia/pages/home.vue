<template>
  <Head title="Homepage" />
  <div class="grid grid-cols-3 gap-4 w-auto h-full m-10">
    <div class="segment col-span-2">
      <NowListening />
    </div>
    <div class="segment">
      Hey
    </div>
  </div>
</template>

<script lang="ts">
import { Head } from '@inertiajs/vue3';
import NowListening from '~/components/NowListening.vue';

export default {
  name: 'Home',
  components: {
    Head,
    NowListening,
  }
};
</script>