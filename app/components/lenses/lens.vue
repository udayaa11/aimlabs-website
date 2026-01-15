<template>
    <div class="font-outfit w-full">
        <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <h2 class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
                Through Our Lens latestsss
            </h2>
        </div>

        <div class="relative pt-6">
            <CommonSplide :items="lensImages" :align="'end'" :padding="'px-4 lg:px-[120px] md:px-60 xxs:px-20'">
                <template #default="{ item }">
                    <div class="flex-shrink-0
                   w-[10vw] sm:w-[10vw] md:w-[12vw] lg:w-[13vw] xl:w-[14vw] min-w-[170px] max-w-[420px] xxs:h-[244px] sm:h-[320px]">
                        <img :src="item" alt="Lens Image" class="w-full h-full object-cover rounded-lg" />
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
