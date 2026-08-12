<template>
    <div class="flex justify-center pr-3">
        <div
            v-for="i in tabs"
            :key="i"
            class="w-2 h-2 rounded-md m-1 hover:cursor-pointer transition-colors duration-300"
            :class="modelValue === i - 1 ? 'bg-[#212529]' : 'bg-[#454d51]'"
            @click="$emit('update:modelValue', i - 1)"
        ></div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            selected: 0,
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