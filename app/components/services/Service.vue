<template>
  <div class="font-outfit w-full bg-gray-50">
    <div class="max-w-[1440px] mx-auto px-10 py-5 md:px-6 lg:px-[120px]">
      <h2 class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
        Our Services
      </h2>
      <p class="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
        We offer end-to-end technology services to help businesses thrive—from AI and data analytics to
        cybersecurity and cloud solutions. Our consulting experts guide every step of your digital journey.
        With a focus on transformation, we help you innovate and stay ahead in a fast-changing world.
      </p>
    </div>

    <div class="relative pt-6">
      <CommonSplide :items="services" :align="'end'" :padding="'px-4 lg:px-[120px] md:px-60 xxs:px-20'">
        <template #default="{ item }">
          <div class="flex-shrink-0 w-[clamp(250px,70vw,330px)] cursor-pointer rounded-xl overflow-hidden h-full">
            <div class="group transition-transform duration-500 hover:scale-105 flex flex-col h-full">
              <div class="aspect-[16/9] overflow-hidden rounded-t-xl">
                <img :src="item.img" :alt="item.title"
                  class="w-full h-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div class="bg-white rounded-b-xl p-4 flex flex-col text-center flex-grow">
                <h3 class="text-base md:text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-sm md:text-base text-gray-500 flex-grow">
                  {{ item.description }}
                </p>

                <div class="self-stretch border-b border-gray-200 my-4"></div>
                <button class="flex items-center gap-2 text-sm md:text-base text-black justify-center">
                  <span>Read More</span>
                  <img src="/assets/svg/rightArrow.svg" alt="Right" class="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </template>
      </CommonSplide>
    </div>

  </div>
</template>

<script setup lang="ts">
import services from '../../../public/json/service.json'
import CommonSplide from '@/components/common/CommonSplide.vue'
</script>
