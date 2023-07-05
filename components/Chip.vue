<script setup lang="ts">
import {ChipI} from "@/data/cardData"

const {item} = defineProps<{item: ChipI}>()
const {title, num} = item

</script>

<template>
    <div class="bg-[#2A2A2A] px-2 py-1 flex items-center max-w-min rounded-lg">
        <p class="text-[#898989] text-sm mr-1">{{ title }}</p>
        <span class="text-[#F2F2F2] text-sm font-medium">{{ num }}</span>
    </div>
</template>