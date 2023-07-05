<script setup lang="ts">
import {MENTOR_DATA} from "@/data/cardData"
</script>

<template>
    <div class="flex flex-col gap-6 w-full">
        <MentorCard v-for="item in MENTOR_DATA" :key="item" :item="item" />
    </div>
</template>