<template>
    <div class="absolute left-0 top-[84px] w-screen bg-white shadow-md py-10 z-40 font-outfit">
        <div class="max-w-[1440px] mx-auto px-[120px]">

            <!-- Heading -->
            <div class="flex items-center gap-x-2 mb-6">
                <div class="w-2 h-10 bg-red-600"></div>
                <div class="text-[28px] font-bold leading-[36px]">About Us</div>
            </div>

            <!-- Menu -->
            <ul
                class="flex justify-between w-full text-lg font-medium mb-4 leading-6 cursor-pointer hover:[&>li>a]:text-red-600">
                <li v-for="item in menu" :key="item.to">
                    <NuxtLink :to="item.to" @click="afStore.setLastAbout(item.to); props.closeDropdown?.()"
                        :class="{ 'text-red-600 font-bold': afStore.lastAbout === item.to }">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useAfStore } from '~/stores/store'
const afStore = useAfStore()

const props = defineProps<{ closeDropdown: () => void }>()

const menu = [
    { label: 'Who We Are', to: '/about-us/who-we-are' },
    { label: 'Mission & Vision', to: '/about-us/mission-and-vision' },
    { label: 'Our Team', to: '/about-us/our-team' }
]
</script>
