<template>
    <div class="flex justify-center pr-3">
        <div
            v-for="i in tabNum"
            :key="i"
            class="w-2 h-2 rounded-md m-1 hover:cursor-pointer"
            :class="selected === i ? 'bg-[#212529]' : 'bg-[#454d51]'"
            @click="selected = i"
        ></div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            selected: 1,
        }
    },
    props: {
        tabNum: Number
    }
}
</script>