
<template>
    <nav class="w-full h-12 bg-(--surface) rounded-b-md">
        <ul class="w-full h-full flex justify-around text-[#f8f9fa] items-center hover:cursor-pointer">
            <img class="h-12" v-if="isActive" src="../../images/Active.png">
            <img v-else class="h-12" src="../../images/InActive.png">
            <li>Home</li>
            <li>About</li>
            <li>Listens</li>
            <li>My Music</li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      isActive: true,
    };
  },
};
</script>