<template>
    <nav class="w-full h-12 bg-(--surface) rounded-b-md cursor-pointer">
        <ul class="w-full h-full flex text-[#f8f9fa] items-center">
            <img
                class="h-12 animate-spin"
                v-if="isActive"
                :src="NavItems[0]"
            >
            <img
                class="h-12"
                v-else
                :src="NavItems[1]"
            >

            <li
                v-for="(item, index) in NavItems.slice(2)"
                :key="index"
                class="flex flex-1 justify-center items-center h-full hover:bg-linear-to-t from-gray-600 to-(--surface)"
                :class="{ 'rounded-br-md': index === NavItems.slice(2).length - 1 }"
            >
                {{ item }}
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
  data() {
    return {
      isActive: true,
      NavItems: [
        "../../images/Active.png",
        "../../images/InActive.png",
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