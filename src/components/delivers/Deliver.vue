<template>
    <div class="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] font-outfit text-white overflow-hidden">
        <div class="flex h-full transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(src, i) in images" :key="i" class="w-full flex-shrink-0 h-full">
                <img :src="src" alt="banner" class="w-full h-full object-cover" />
            </div>
        </div>
        <div
            class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-6 pointer-events-none">
            <p class="text-[5vw] sm:text-4xl lg:text-[54px] font-semibold leading-tight">Delivers Next-Gen Experiences
            </p>
            <p class="text-[3vw] sm:text-base md:text-lg leading-snug">We build smart, modern solutions that make
                technology faster, easier, and more powerful.</p>
            <button
                class="pointer-events-auto px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-200 transition">Learn
                More</button>
        </div>
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-auto">
            <div v-for="(val, i) in progressBars" :key="i" class="w-20 h-1 bg-gray-400 rounded overflow-hidden">
                <div class="h-1 bg-red-600 transition-all duration-150 ease-linear"
                    :style="{ width: progressBars[i] + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
    '/webp/homepageBanner.webp',
    '/webp/homepageBanner1.webp',
    '/webp/homepageBanner2.webp',
    '/webp/homepageBanner3.webp',
];

const currentIndex = ref(0);
const progressBars = ref<number[]>(Array(images.length).fill(0));

let intervalId: number | undefined;
const slideMs = 2000; 
const tickMs = 50;
const step = (tickMs / slideMs) * 100; 

onMounted(() => {
    intervalId = window.setInterval(() => {
        const i = currentIndex.value;
        progressBars.value[i] += step;
        if (progressBars.value[i] >= 100) {
            progressBars.value[i] = 100;             
            const next = (i + 1) % images.length;
            if (next === 0) {
                progressBars.value = Array(images.length).fill(0);
                currentIndex.value = 0;
            } else {
                currentIndex.value = next;
                progressBars.value[next] = 0;
            }
        }
    }, tickMs);
});

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
});
</script>
