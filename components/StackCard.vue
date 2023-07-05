<script setup lang="ts">
import {GitBranch} from "lucide-vue-next"
</script>

<template>
    <div class="w-full py-6 md:py-8 px-6 md:px-11 bg-zinc-200 dark:bg-[#323232] rounded-lg border border-[#4F5CD3] hover:border-[#6370e2] transition">
        <div class="flex items-start justify-between">
            <GitBranch :size="110" class="scale-75 md:scale-100 text-zinc-800 dark:text-[#F2F2F2]" />
            <div class="flex flex-col items-center">
                <QwirkIcon />
                <h3 class="text-zinc-500 dark:text-[#898989] text-sm font-semibold">learning</h3>
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-zinc-800 dark:text-[#F2F2F2] text-xl font-semibold">Stack</h2>
            <p class="text-zinc-600 dark:text-[#898989]">The stack currentply use the most</p>
            <div class="flex items-center gap-1 lg:gap-3 flex-wrap">
                <NuxtIcon />
                <VueIcon />
                <TypescriptIcon />
                <NestIcon />
                <SupabaseIcon />
                <MongoIcon />
            </div>
        </div>
    </div>
</template>