<template>
    <div class="flex justify-center pr-3">
        <div
            v-for="i in tabs"
            :key="i"
            class="w-2 h-2 rounded-md m-1 hover:cursor-pointer transition-colors duration-300"
            :class="selected === i ? 'bg-[#212529]' : 'bg-[#454d51]'"
            @click="$emit('update:modelValue', selected = i, console.log(selected))"
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
    tabs: {
        type: Number,
        required: true,
    },
    modelValue: {
        type: Number,
        required: true,
    },
    },
    emits: ['update:modelValue'],
}
</script>