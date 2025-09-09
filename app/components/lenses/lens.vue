<!-- <template>
    <div class="font-outfit w-full">
        <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <h2 class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
                Through Our Lens
            </h2>
        </div>
        <div class="relative pt-6">
            <Splide ref="splideRef" :options="splideOptions" class="w-full flex justify-start max-w-[1440px] ml-auto md:pl-0 pl-0">
                <SplideSlide v-for="(img, idx) in lensImages" :key="idx">
                    <div class="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
                        <img :src="img" alt="Lens Image"
                            class="w-full aspect-[4/3] sm:aspect-[17/9] md:aspect-[16/9] object-cover rounded-lg" />
                    </div>
                </SplideSlide>
            </Splide>
            <common-splide-controls :splide-ref="splideRef" :progress-width="progressWidth" :align="'end'"
                class="px-4 lg:px-[120px]" />
        </div>
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
</script> -->



<template>
    <div class="font-outfit w-full">
        <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <h2 class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
                Through Our Lens
            </h2>
        </div>

        <div class="relative pt-6">
            <CommonSplide :items="lensImages" :align="'end'" :padding="'px-4 lg:px-[120px]'">
                <template #default="{ item }">
                    <div class="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
                        <img :src="item" alt="Lens Image"
                            class="w-full aspect-[4/3] sm:aspect-[17/9] md:aspect-[16/9] object-cover rounded-lg" />
                    </div>
                </template>
            </CommonSplide>
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonSplide from '@/components/common/CommonSplide.vue'
import lensImages from '../../../public/json/lens.json'
</script>
