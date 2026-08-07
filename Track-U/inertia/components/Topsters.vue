<template>
        <div class="h-auto col-span-3 flex flex-col items-center gap-3 mr-3 ml-3 mb-3 text-[#f8f9fa]">
            <div v-for="topster, i in Categories" class="flex flex-col items-center font-semibold p-3 text-lg h-full container-shadow bg-(--surface) rounded-xs">
                {{ topster.name }}
                <div v-for="(item, index) in topster.topThree" :key="index" class="w-[75%] h-full grid grid-cols-3">
                    <hr class="col-span-3 m-2">
                    <p>{{ index + 1 }}</p>
                    <img alt="img" src="">
                    <div class="flex flex-col">
                        <p>{{ item.name }}</p>
                        <p>{{ item.plays }} plays</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
interface TopEntry {
  name: string;
  plays: number;
}

interface Category {
  name: string;
  topThree: [TopEntry, TopEntry, TopEntry];
}

export default {
  data() {
    return {
      Categories: [
        {
          name: "Top Artists",
          topThree: [
            { name: 'name', plays: 0 },
            { name: '', plays: 0 },
            { name: '', plays: 0 },
          ],
        },
        {
          name: "Top Albums",
          topThree: [
            { name: '', plays: 0 },
            { name: '', plays: 0 },
            { name: '', plays: 0 },
          ],
        },
        {
          name: "Top Tracks",
          topThree: [
            { name: '', plays: 0 },
            { name: '', plays: 0 },
            { name: '', plays: 0 },
          ],
        },
      ] as Category[],
    };
  },
};
</script>