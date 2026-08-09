<template>
    <div class="flex justify-center pr-3">
        <div
            v-for="i in tabNum"
            :key="i"
            class="w-2 h-2 flex bg-[#212529] rounded-md m-1 hover:cursor-pointer"
        ></div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        tabNum: Number
    }
}
</script>