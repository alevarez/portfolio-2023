<script setup lang="ts">
import {Moon, Sun} from "lucide-vue-next"

type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}

</script>

<template>
    <button 
        @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')" 
        class="bg-[#333333] border border-[#353535] p-2 rounded-lg hover:border-[#464646]">
        <Moon v-if="$colorMode.preference === 'light'" color="#898989" :size="20" />
        <Sun v-if="$colorMode.preference === 'dark'" color="#898989" :size="20" />
    </button>
</template>