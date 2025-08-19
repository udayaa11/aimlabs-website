<template>
  <div class="font-outfit w-full">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
      <div class="text-black font-bold text-[28px] leading-[36px] mb-6">
        Voices of Trust
      </div>
    </div>

    <CommonSplide :items="voices" :align="'end'" :padding="'px-4 lg:px-[120px]'">
      <template #default="{ item }">
        <div class="max-w-[480px] mx-2 relative group">
          <div
            class="h-[224px] pb-16 p-6 rounded-xl bg-gray-100 flex flex-col justify-between transition-colors duration-300 group-hover:bg-red-600">
            <div class="flex flex-col items-center space-y-3 text-center">
              <img :src="item.icon" alt="icon" class="w-[60px] h-[49px]" />
              <p
                class="text-gray-700 w-full md:w-4/5 text-lg leading-[24px] transition-colors duration-300 group-hover:text-white">
                "{{ item.quote }}"
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center relative -mt-16">
            <div class="text-center z-10">
              <img :src="item.avatar" alt="avatar" class="w-20 h-20 rounded-full" />
              <p class="mt-2 text-gray-900">{{ item.name }}</p>
              <p class="text-xs text-gray-500">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </template>
    </CommonSplide>
  </div>
</template>

<script setup lang="ts">
import voices from '~/public/json/voive.json'
import CommonSplide from '@/components/common/CommonSplide.vue'
</script>
