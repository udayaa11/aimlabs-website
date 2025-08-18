<template>
    <div class="absolute left-0 top-[84px] w-screen bg-white shadow-md py-10 z-40 font-outfit">
        <div class="max-w-[1440px] mx-auto px-[120px]">

            <div class="flex items-center gap-x-2 mb-6">
                <div class="w-2 h-10 bg-red-600"></div>
                <div class="text-[28px] font-bold leading-[36px]">About US</div>
            </div>

            <ul
                class="flex justify-between w-full text-lg font-medium mb-4 leading-6 cursor-pointer hover:[&>li]:text-red-600">
                <li>
                    <NuxtLink to="/about-us/who-we-are" @click=props.closeDropdown> Who We Are</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about-us/mission-and-vision" @click=props.closeDropdown>Mission & Vision</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about-us/our-team" @click=props.closeDropdown>Our Team</NuxtLink>
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