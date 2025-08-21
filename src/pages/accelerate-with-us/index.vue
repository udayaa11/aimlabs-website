<template>
  <div class="absolute left-0 top-[84px] w-screen bg-white shadow-md py-10 z-40 font-outfit">
    <div class="max-w-[1440px] mx-auto px-[120px]">

      <div class="flex items-center gap-x-2 mb-6">
        <div class="w-2 h-10 bg-red-600"></div>
        <div class="text-[28px] font-bold leading-[36px]">Accelerate With Us</div>
      </div>
      <ul class="flex justify-between w-full gap-x-8 text-base leading-5 cursor-pointer hover:[&>li>a]:text-red-600">
        <li><NuxtLink to="/accelerate-with-us/innovative-cutting-edge-tech" @click="props.closeDropdown?.()">Innovative / Cutting Edge Tech</NuxtLink></li>
        <li>
          <NuxtLink to="/accelerate-with-us/customer-centric-approach" @click="props.closeDropdown?.()">Customer Centric Approach</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/accelerate-with-us/adaptability-flexibility" @click="props.closeDropdown?.()">Adaptability & Flexibility</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/accelerate-with-us/fast-paced-development" @click="props.closeDropdown?.()">Fast Paced Development</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  closeDropdown: () => void
}>()
</script>
