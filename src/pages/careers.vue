<template>
    <div class="font-outfit text-[#030712]">
        <div class="relative w-full h-[720px]">
            <img :src="team.bannerImage" alt="Our Team Banner" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
                <div class="flex items-center gap-x-4 text-lg leading-[24px] text-white">
                    <img :src="team.icon" alt="Team Icon" class="w-10 h-10" />
                    <span>{{ team.tagline }}</span>
                </div>
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px] text-white">
                    {{ team.heading }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import careers from '../public/json/carrers.json'

const team = careers[0]
</script>
