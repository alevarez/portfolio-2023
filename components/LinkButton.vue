<script setup lang="ts">
import {Send} from "lucide-vue-next"
</script>

<template>
    <NuxtLink 
        to="mailto:ale.alvarez.email@gmail.com" target="_blank" 
        class="bg-zinc-200 dark:bg-[#333333] border border-zinc-100 dark:border-[#353535] p-2 rounded-lg hover:border-zinc-300 dark:hover:border-[#464646] transition">
        <Send :size="20" class="text-zinc-600 dark:text-[#898989]" />
    </NuxtLink>
</template>