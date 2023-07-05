<script setup lang="ts">
import {Send} from "lucide-vue-next"
</script>

<template>
    <NuxtLink 
        to="mailto:ale.alvarez.email@gmail.com" target="_blank" 
        class="bg-slate-200 dark:bg-[#333333] border border-slate-100 dark:border-[#353535] p-2 rounded-lg hover:border-slate-200 dark:hover:border-[#464646] transition">
        <Send :size="20" class="text-[#64748b] dark:text-[#898989]" />
    </NuxtLink>
</template>