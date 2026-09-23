<template>
  <div
    class="h-auto col-span-3 grid grid-cols-2 items-center gap-3 mr-3 ml-3 mb-3 text-[#f8f9fa] min-h-0"
  >
    <div
      v-for="topster in categories"
      :key="topster.name"
      class="flex flex-col items-center font-semibold p-3 text-lg h-full container-shadow bg-(--surface) rounded-xs min-h-0"
    >
      <p>
        {{ topster.name }}
      </p>
      <div
        v-for="(item, index) in topster.topThree"
        :key="item.name"
        class="w-[75%] flex-1 grid grid-cols-[auto_1fr] items-center gap-3 min-h-0"
      >
        <hr class="col-span-2 w-full my-2">
        <p class="text-lg">
          {{ index + 1 }}
        </p>
        <div class="flex items-center gap-3 min-w-0">
          <img
            :src="item.image"
            :alt="`${item.name} image`"
            class="w-12 h-12 object-cover rounded-xs shrink-0"
          >
          <p class="text-lg font-light truncate">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

interface TopEntry {
  name: string;
  plays: number;
}

interface Category {
  name: string;
  topThree: [TopEntry, TopEntry, TopEntry];
}

export default {
  props: {
    categories: {
      type: Array as PropType<Category[]>,
      required: true,
    }
  }
};
</script>