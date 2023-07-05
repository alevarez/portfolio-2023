<script setup lang="ts">
import {cardData} from "@/data/cardData"
</script>

<template>
    <div class="mt-16">
        <h1 class="text-[#898989] font-semibold text-2xl">Stats</h1>
        <div class="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card v-for="item in cardData" :key="item.id" :card="item" />
        </div>
    </div>
</template>