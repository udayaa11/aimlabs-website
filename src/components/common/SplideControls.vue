<template>
    <div class="flex items-center gap-x-2 py-5" :class="[align === 'end' ? 'justify-end' : 'justify-start', padding]">
        <img :src="isLeftHover ? '/svg/leftHoverRed.svg' : '/svg/leftArrowHover.svg'" alt="Left" class="cursor-pointer"
            @mouseenter="isLeftHover = true" @mouseleave="isLeftHover = false" @click="splideRef.go('<')" />

        <div class="relative w-40 h-1 bg-gray-300 overflow-hidden rounded">
            <div class="absolute top-0 left-0 h-full bg-red-600 transition-all duration-300 ease-in-out"
                :style="{ width: progressWidth + '%' }"></div>
        </div>

        <img :src="isRightHover ? '/svg/rightHoverRed.svg' : '/svg/rightArrowHovered.svg'" alt="Right"
            class="cursor-pointer" @mouseenter="isRightHover = true" @mouseleave="isRightHover = false"
            @click="splideRef.go('>')" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps < {
    splideRef: any
    progressWidth: number
    align?: 'start' | 'end'
    padding?: string
} > ()

const isLeftHover = ref(false)
const isRightHover = ref(false)
</script>
