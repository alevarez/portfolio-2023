<script setup lang="ts">
import {ThumbsUp} from "lucide-vue-next"
import {MentorCard} from "@/data/cardData"

const {item} = defineProps<{item: MentorCard}>()
const {title} = item

</script>

<template>
    <div class="w-full p-4 md:p-5 flex items-center justify-between flex-wrap gap-3 bg-zinc-200 dark:bg-[#323232] rounded-lg border border-zinc-100 dark:border-[#3D3D3D] hover:border-zinc-300 dark:hover:border-[#474747] cursor-pointer transition">
        <div class="flex items-center gap-4">
            <div class="bg-[#4F5CD3] p-1 md:p-3 rounded-md">
                <ThumbsUp color="#F2F2F2" :size="26" class="scale-75 md:scale-100" />
            </div>
            <h2 class="text-zinc-800 dark:text-[#F2F2F2] font-semibold text-base md:text-lg">{{ title }}</h2>
        </div>
        <div class="flex flex-col items-end flex-wrap">
            <h3 class="text-zinc-500 dark:text-[#898989] text-sm">PROMO <span class="line-through italic text-xs">$100</span> <span class="text-zinc-900 dark:text-[#F2F2F2] text-base">$50</span></h3>
            <p class="text-zinc-500 dark:text-[#898989] text-xs">1 hour time</p>
        </div>
    </div>
</template>