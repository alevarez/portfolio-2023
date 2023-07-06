<script setup lang="ts">
import {Github, Twitter, Slack, Linkedin, Star, Heart, Users, Newspaper} from "lucide-vue-next"
import {Card} from "@/data/cardData"


const {card} = defineProps<{card: Card}>()
const {
    link,
    url,
    iconMain,
    iconSec,
    numberProy,
    nameProy
} = card

</script>
<template>
    <div class="w-full p-4 sm:p-7 bg-zinc-100 dark:bg-[#323232] rounded-lg border border-zinc-50 dark:border-[#3D3D3D] hover:border-zinc-200 dark:hover:border-[#474747] transition">
        <div class="w-full flex justify-between flex-wrap">
            <div>
                <Github v-if="iconMain === 'github'" class="text-zinc-800 dark:text-[#F2F2F2] scale-75 md:scale-100" :size="48" />
                <Twitter v-if="iconMain === 'twitter'" class="text-zinc-800 dark:text-[#F2F2F2] scale-75 md:scale-100" :size="48" />
                <Slack v-if="iconMain === 'discord'" class="text-zinc-800 dark:text-[#F2F2F2] scale-75 md:scale-100" :size="48" />
                <Linkedin v-if="iconMain === 'linked'" class="text-zinc-800 dark:text-[#F2F2F2] scale-75 md:scale-100" :size="48" />
                <NuxtLink :to="url" target="_blank" class="font-semibold text-xs text-zinc-600 dark:text-[#898989] underline mt-2">{{ link }}</NuxtLink>
            </div>
            <div class="flex flex-col items-end">
                <span class="flex items-center gap-1 text-zinc-600 dark:text-[#F2F2F2] font-semibold text-xl sm:text-2xl">
                    {{ numberProy }} 
                    <Star v-if="iconSec === 'github'" color="#4F5CD3" :size="20" />
                    <Heart v-if="iconSec === 'twitter'" color="#4F5CD3" :size="20" />
                    <Users v-if="iconSec === 'discord'" color="#4F5CD3" :size="20" />
                    <Newspaper v-if="iconSec === 'linked'" color="#4F5CD3" :size="20" />
                </span>
                <h3 class="text-zinc-600 dark:text-[#898989] text-xs underline">{{ nameProy }}</h3>
            </div>
        </div>
        <div class="w-full mt-8 flex flex-wrap gap-3">
            <Chip v-for="item in card.chip" :key="item.id" :item="item" />
        </div>
    </div>
</template>