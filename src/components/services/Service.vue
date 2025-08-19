<template>
  <div class="font-outfit w-full bg-gray-50">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
      <div class="text-black font-bold text-[28px] leading-[36px] mb-6">Services</div>
      <div class="text-gray-500 text-lg leading-[24px] mb-10">
        We offer end-to-end technology services to help businesses thrive—from AI and data analytics to cybersecurity
        and cloud solutions. Our consulting experts guide every step of your digital journey. With a focus on
        transformation, we help you innovate and stay ahead in a fast-changing world.
      </div>
    </div>

    <CommonSplide :items="services" :align="'end'" :padding="'px-4 lg:px-[120px]'">
      <template #default="{ item }">
        <div class="w-[348px] flex-shrink-0">
          <div class="h-[256px] rounded-t-xl overflow-hidden group cursor-pointer">
            <img :src="item.img" :alt="item.title"
              class="w-full h-full object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-125" />
          </div>

          <div class="bg-white rounded-b-xl p-4 flex flex-col items-center justify-center">
            <div class="text-lg font-semibold mb-2">{{ item.title }}</div>
            <p class="h-[120px] mb-4 w-full md:w-4/5">{{ item.description }}</p>
            <div class="self-stretch -mx-4 border-b border-gray-200 mb-4"></div>
            <div class="flex gap-2 items-center justify-center text-black cursor-pointer group">
              <span class="transition-transform duration-300 group-hover:translate-x-1">Read More</span>
              <img src="/svg/rightArrow.svg" alt="Right"
                class="transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </template>
    </CommonSplide>
  </div>
</template>

<script setup lang="ts">
import services from '~/public/json/service.json'
import CommonSplide from '@/components/common/CommonSplide.vue'
</script>
