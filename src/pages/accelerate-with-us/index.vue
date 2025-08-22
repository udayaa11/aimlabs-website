<template>
  <div class="absolute left-0 top-[84px] w-screen bg-white shadow-md py-10 z-40 font-outfit">
    <div class="max-w-[1440px] mx-auto px-[120px]">

      <div class="flex items-center gap-x-2 mb-6">
        <div class="w-2 h-10 bg-red-600"></div>
        <div class="text-[28px] font-bold leading-[36px]">Accelerate With Us</div>
      </div>

      <ul class="flex justify-between w-full gap-x-8 text-base leading-5 cursor-pointer hover:[&>li>a]:text-red-600">
        <li v-for="item in menu" :key="item.key">
          <NuxtLink :to="item.to" @click="select(item.key)"
            :class="{ 'text-red-600 font-bold': afStore.lastAccelerate === item.key }">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useAfStore } from '../../stores/store'

const afStore = useAfStore()
const props = defineProps<{ closeDropdown: () => void }>()

const menu = [
  { key: 'innovative-cutting-edge-tech', label: 'Innovative / Cutting Edge Tech', to: '/accelerate-with-us/innovative-cutting-edge-tech' },
  { key: 'customer-centric-approach', label: 'Customer Centric Approach', to: '/accelerate-with-us/customer-centric-approach' },
  { key: 'adaptability-flexibility', label: 'Adaptability & Flexibility', to: '/accelerate-with-us/adaptability-flexibility' },
  { key: 'fast-paced-development', label: 'Fast Paced Development', to: '/accelerate-with-us/fast-paced-development' }
]

const select = (key: string) => {
  afStore.setLastAccelerate(key)
  props.closeDropdown?.()
}
</script>
