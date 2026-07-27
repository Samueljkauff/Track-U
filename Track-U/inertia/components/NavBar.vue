<template>
    <nav class="w-full h-12 bg-(--surface) rounded-b-md">
        <ul class="w-full h-full flex text-[#f8f9fa] items-center">
            <img
                class="h-12"
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
                class="flex-1 text-center"
            >
                {{ item }}
            </li>
        </ul>
    </nav>
</template>

<script>
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