<script setup lang="ts">
import {Send} from "lucide-vue-next"
</script>

<template>
    <NuxtLink 
        to="mailto:ale.alvarez.email@gmail.com" target="_blank" 
        class="bg-[#333333] border border-[#353535] p-2 rounded-lg hover:border-[#464646] transition">
        <Send color="#898989" :size="20" />
    </NuxtLink>
</template>