<template>
        <div class="h-auto col-span-3 flex flex-col items-center gap-3 mr-3 ml-3 mb-3 text-[#f8f9fa]">
            <div v-for="cats in Categories" class="flex justify-center font-semibold p-3 text-lg h-full container-shadow bg-(--surface) rounded-xs">
                {{ cats.name }}
                <hr>
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
            { name: '', plays: 0 },
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