<template>
  <div class="font-outfit w-full">
    <div class="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[120px]">
      <h2 class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
        Voices of Trust
      </h2>
    </div>

    <div class="relative pt-6">
      <CommonSplide :items="voices" :align="'end'" :padding="'px-4 lg:px-[120px]'">
        <template #default="{ item }">
          <div
            class="w-full xxs:w-[250px] xs:w-[300px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto flex-shrink-0 cursor-pointer rounded-xl overflow-hidden">
            <div
              class="relative h-auto min-h-[200px] p-6 rounded-xl bg-gray-100 flex flex-col justify-between transition-colors duration-300 group hover:bg-red-600">
              <div class="flex flex-col items-center space-y-3 text-center">
                <img :src="item.icon" alt="icon" class="w-10 h-8 sm:w-12 sm:h-10 md:w-[60px] md:h-[49px]" />
                <p
                  class="text-gray-700 w-full md:w-4/5 text-sm md:text-lg leading-[22px] md:leading-[24px] transition-colors duration-300 group-hover:text-white">
                  "{{ item.quote }}"
                </p>
              </div>
              <div class="absolute left-1/2 -bottom-7 transform -translate-x-1/2">
                <img :src="item.avatar" alt="avatar"
                  class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white shadow-md" />
              </div>
            </div>
            <div class="mt-9 text-center">
              <p class="text-gray-900 text-sm md:text-base font-medium">{{ item.name }}</p>
              <p class="text-xs md:text-sm text-gray-500">{{ item.role }}</p>
            </div>
          </div>
        </template>
      </CommonSplide>
    </div>

  </div>
</template>

<script setup lang="ts">
import voices from '~/public/json/voive.json'
import CommonSplide from '@/components/common/CommonSplide.vue'
</script>
