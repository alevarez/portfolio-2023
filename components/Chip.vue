<script setup lang="ts">
import {ChipI} from "@/data/cardData"

const {item} = defineProps<{item: ChipI}>()
const {title, num} = item

</script>

<template>
    <div class="bg-zinc-200 dark:bg-[#2A2A2A] px-2 py-1 flex items-center max-w-min rounded-lg">
        <p class="text-zinc-500 dark:text-[#898989] text-xs sm:text-sm mr-1">{{ title }}</p>
        <span class="text-zinc-800 dark:text-[#F2F2F2] text-xs sm:text-sm font-medium">{{ num }}</span>
    </div>
</template>