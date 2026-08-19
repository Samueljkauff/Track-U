<template>
  <nav class="w-full h-12 bg-(--surface) rounded-b-md">
    <ul class="w-full h-full flex text-[#f8f9fa] items-center">
      <li class="m-8 shrink-0">
        <component
          :is="NavItems[0].icon"
          class="h-12"
          :class="isActive ? 'animate-spin text-green-400' : 'text-gray-500'"
        />
      </li>

      <li
        v-for="(item, index) in NavItems.slice(1)"
        :key="item.route"
        class="flex flex-1 h-full"
        :class="{ 'rounded-br-md': index === NavItems.length - 2 }"
      >
        <Link
          :href="item.route"
          class="flex flex-1 justify-center items-center h-full hover:bg-linear-to-t from-gray-600 to-(--surface)"
        >
          {{ item.name }}
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Disc3, LucideIcon } from '@lucide/vue';
import { Link } from '@inertiajs/vue3';

interface NavItem {
  name: string,
  icon: LucideIcon,
  route: string,
}
export default {
  name: 'NavBar',
  data() {
    return {
      isActive: true,
      NavItems: [
          {
              name: 'NowPlaying',
              icon: Disc3,
              route: '',
          },
          {
              name: 'Home',
              icon: Disc3,
              route: '/',
          },
          {
              name: 'Top Songs',
              icon: Disc3,
              route: '/top-songs',
          },
          {
              name: 'Top Artists',
              icon: Disc3,
              route: '/top-artists',
          },
          {
              name: 'Shop',
              icon: Disc3,
              route: '/shop',
          },
          {
              name: 'Sign In',
              icon: Disc3,
              route: '/login',
          },
      ] as NavItem[],
    };
  },
  components: {
    Link
  }
};
</script>