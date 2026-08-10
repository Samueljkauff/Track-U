<template>
    <nav class="w-full h-12 bg-(--surface) rounded-b-md cursor-pointer">
        <ul class="w-full h-full flex text-[#f8f9fa] items-center">
            <div class="m-8">
            <component
                class="h-12"
                :class="isActive ? 'animate-spin text-green-400' : 'text-gray-500'"
                :is="NavItems[0]"
            />
            </div>

            <li
                v-for="(item, index) in NavItems.slice(1)"
                :key="index"
                class="flex flex-1 justify-center items-center h-full hover:bg-linear-to-t from-gray-600 to-(--surface)"
                :class="{ 'rounded-br-md': index === NavItems.slice(1).length - 1 }"
            >
                {{ item }}
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Disc3 } from '@lucide/vue';


export default {
  name: 'NavBar',
  data() {
    return {
      isActive: true,
      NavItems: [
        Disc3,
        "Home",
        "Top Song",
        "Top Albums",
        "Top Artists",
        "My Music",
      ],
    };
  },
};
</script>