<template>
    <div class="font-outfit text-[#030712]">

        <div class="relative w-full h-[720px]">
            <img src="/webp/fastPacedDevelopment.webp" alt="Home Page Banner" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
                <div class="flex items-center gap-x-4 text-lg leading-[24px] text-white">
                    <img src="/svg/missionGoalSuccess.svg" alt="Icon" class="w-10 h-10" />
                    <span>Creating value through cutting-edge solutions.</span>
                </div>
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px] text-white">
                    Mission & Vision
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto px-[120px] pt-12 flex flex-col space-y-4">
            <h2 class="text-black font-bold text-2xl leading-9">What You Get</h2>
            <p class="text-gray-500 max-w-md">
                We are driven by integrity, innovation, and excellence. Our team thrives on collaboration,
                customer-centric thinking, and a passion for solving real-world challenges with smart technology. We
                believe in continuous learning, transparency, and delivering consistent value to our clients and
                communities.
            </p>
        </div>
        <div class="max-w-[1440px] mx-auto py-2">
            <div class="w-full flex justify-start">
                <CommonSplide :splide-ref="splideRef" :progress-width="progress" :align="'start'" />
            </div>
        </div>


    </div>
</template>

<script setup>
import CommonSplide from '@/components/common/CommonSplide.vue'
import { ref } from 'vue'

const splideRef = ref(null)
const progress = ref(0)
</script>
