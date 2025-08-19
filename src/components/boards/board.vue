<template>
    <div class="w-full max-w-[1440px] mx-auto px-6 lg:px-[120px] py-20">
        <div class="text-black font-bold text-[28px] leading-[36px] mb-6">
            Services
        </div>
        <p class="text-gray-500 text-lg leading-[24px] mb-10">
            Together with the founders, Krishna Chaitanya, Suresh Reddy, Venkat Reddy and
            Santosh Reddy, we are pleased to introduce our members of the board.
        </p>

        <div class="flex gap-x-4 flex-wrap">
            <div v-for="(leader, i) in leaders" :key="i"
                class="group relative w-full max-w-[282px] h-[348px] rounded-xl bg-gray-100 overflow-hidden shadow-md text-center">
                <div>
                    <img :src="leader.img" :alt="leader.name" class="w-full h-full rounded-t-xl object-contain" />
                </div>
                 <div class="absolute bottom-0 left-0 w-full bg-white px-4 py-4 h-20 transition-all 
                        duration-500 ease-in-out 
                        group-hover:h-2/5">
                    <p class="text-black font-bold text-xl leading-tight">
                        {{ leader.name }}
                    </p>
                    <p class="text-gray-500 text-base mt-1">{{ leader.role }}</p>

                    <div class="flex gap-2 mt-2 justify-center">
                        <div v-for="(icon, key) in icons" :key="key"
                            class="relative w-9 h-9 flex items-center justify-center cursor-pointer"
                            @mouseenter="hovered = key" @mouseleave="hovered = null">
                            <img :src="hovered === key ? icon.red : icon.black" class="w-7 h-7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import board from '~/public/json/board.json'
import { ref } from 'vue'

const leaders = board.leaders
const icons = board.icons
const hovered = ref(null)
</script>
