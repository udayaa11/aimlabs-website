<!-- <template>
    <div class="relative group h-11 overflow-hidden bg-red-600 rounded-[32px] px-4 cursor-pointer">
        <div class="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
            <span class="text-white font-semibold text-base leading-[44px]">Contact Us</span>
            <span class="text-white font-semibold text-base leading-[44px]">Contact Us</span>
        </div>
    </div>
</template>

<script setup lang="ts">
</script> -->


<template>
    <div class="relative group overflow-hidden rounded-[32px] px-4 cursor-pointer w-full max-w-[112px] h-11" :class="bgColor">
        <div class="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
            <span :class="[textColor, 'font-semibold text-base leading-[44px]']">Contact Us</span>
            <span :class="[textColor, 'font-semibold text-base leading-[44px]']">Contact Us</span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    bgColor?: string
    textColor?: string
}>()
</script>
