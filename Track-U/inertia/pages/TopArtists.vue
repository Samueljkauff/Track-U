<template>
<Head title="TopArtists" />
  <div class="grid gap-4 w-auto h-full m-1">
    <div class="segment col-span-2 h-full flex flex-col gap-3 min-h-0">
        <TopList :list-type="listType"></TopList>
    </div>
  </div>
</template>

<script lang="ts">
import TopList from '~/components/TopList.vue';

export default {
  data() {
    return {
      listType: 'Artists',
    }
  },
  components: {
    TopList
  }
}
</script>