<template>
    <div class="container-shadow m-3 bg-(--surface) flex flex-col items-center text-3xl py-5 text-[#f8f9fa] font-bold">
        Your Top 50 {{  listType }}
    </div>
    <div class="grid grid-cols-3 h-full mr-3 ml-3 mb-3 gap-3">
            <div v-for="items in terms" class="flex flex-col h-full container-shadow bg-(--surface) text-lg p-3 items-center text-[#f8f9fa] font-bold">
                {{ items }}
                <hr class="w-[95%]">
            </div>
        </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                terms: ['Past 1 Month', 'Past 6 Month', 'Past 1 Year']
            }
        },
        props: {
            listType: {
                type: String,
                required: true,
            }
        }
        
    }
</script>