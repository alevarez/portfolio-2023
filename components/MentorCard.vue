<script setup lang="ts">
import {ThumbsUp} from "lucide-vue-next"
import {MentorCard} from "@/data/cardData"

const {item} = defineProps<{item: MentorCard}>()
const {title} = item

const showSoon = ref(false)

</script>

<template>
    <div @mouseover="showSoon = true" @mouseleave="showSoon = false" class="relative w-full p-4 md:p-5 flex items-center justify-between flex-wrap gap-3 bg-zinc-100 dark:bg-[#323232] rounded-lg border border-zinc-50 dark:border-[#3D3D3D] hover:border-zinc-200 dark:hover:border-[#474747] cursor-pointer hover:cursor-not-allowed transition">
        <Transition>
            <div v-if="showSoon" class="absolute inset-0 bg-zinc-100/95 dark:bg-zinc-800/95 rounded-md z-40 flex items-center justify-center text-[#4F5CD3] text-2xl font-bold">SOON</div>
        </Transition>
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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>