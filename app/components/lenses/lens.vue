<template>
    <div class="font-outfit w-full">
        <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <h2 class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
                Through Our Lens
            </h2>
        </div>

        <div class="relative pt-6">
            <CommonSplide :items="lensImages" :align="'end'" :padding="'px-4 lg:px-[120px] md:px-60 xxs:px-20'">
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
