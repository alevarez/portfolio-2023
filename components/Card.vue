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
    <div class="w-full p-7 bg-[#323232] rounded-lg border border-[#3D3D3D] hover:border-[#474747] transition">
        <div class="w-full flex justify-between flex-wrap">
            <div>
                <Github v-if="iconMain === 'github'" color="#F2F2F2" :size="48" />
                <Twitter v-if="iconMain === 'twitter'" color="#F2F2F2" :size="48" />
                <Slack v-if="iconMain === 'discord'" color="#F2F2F2" :size="48" />
                <Linkedin v-if="iconMain === 'linked'" color="#F2F2F2" :size="48" />
                <NuxtLink :to="url" target="_blank" class="font-semibold text-xs text-[#898989] underline mt-2">{{ link }}</NuxtLink>
            </div>
            <div class="flex flex-col items-end">
                <span class="flex items-center gap-1 text-[#F2F2F2] font-semibold text-2xl">
                    {{ numberProy }} 
                    <Star v-if="iconSec === 'github'" color="#4F5CD3" :size="20" />
                    <Heart v-if="iconSec === 'twitter'" color="#4F5CD3" :size="20" />
                    <Users v-if="iconSec === 'discord'" color="#4F5CD3" :size="20" />
                    <Newspaper v-if="iconSec === 'linked'" color="#4F5CD3" :size="20" />
                </span>
                <h3 class="text-[#898989] text-xs underline">{{ nameProy }}</h3>
            </div>
        </div>
        <div class="w-full mt-8 flex flex-wrap gap-3">
            <Chip v-for="item in card.chip" :key="item.id" :item="item" />
        </div>
    </div>
</template>