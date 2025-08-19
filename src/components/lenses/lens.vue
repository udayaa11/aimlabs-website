<template>
    <div class="font-outfit w-full">
        <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div class="text-black font-bold text-[28px] leading-[36px] mb-6">
                Through Our Lens
            </div>
        </div>
        <Splide ref="splideRef" :options="splideOptions" class="w-full px-4 sm:px-6 md:px-10 lg:ml-[220px]">
            <SplideSlide v-for="(img, idx) in lensImages" :key="idx">
                <img :src="img" class="w-full max-w-[240px] h-[320px] object-cover rounded-lg" />
            </SplideSlide>
        </Splide>
        <common-splide-controls :splide-ref="splideRef" :progress-width="progressWidth" :align="'end'" class="px-4 lg:px-[120px]" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { useSplideLogic } from '@/composables/useSplide'
import lensImages from '~/public/json/lens.json'

const splideRef = ref<any>(null)
const { progressWidth, splideOptions } = useSplideLogic(splideRef)
</script>
