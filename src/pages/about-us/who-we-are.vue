<template>
    <div class="font-outfit relative text-white">
        <!-- Banner -->
        <div class="relative w-full h-[720px]">
            <img :src="data.banner.image" alt="Banner" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
                <div class="flex items-center gap-x-4 text-lg leading-[24px]">
                    <img :src="data.banner.icon" alt="Icon" class="w-10 h-10" />
                    <span>{{ data.banner.tagline }}</span>
                </div>
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px]">
                    {{ data.banner.title }}
                </p>
            </div>
        </div>
        <!-- About -->
        <div class="max-w-[1440px] mx-auto px-[120px] py-12 text-[#030712] space-y-6">
            <h2 class="text-black font-bold text-2xl">{{ data.about.title }}</h2>
            <p v-for="(p, i) in data.about.paragraphs" :key="i" class="text-gray-500 text-lg">{{ p }}</p>
        </div>
        <!-- Solutions -->
        <div class="bg-[#F3F4F6]">
            <div class="max-w-[1440px] mx-auto px-[120px] py-12 flex justify-between text-[#030712]">
                <!-- Left section -->
                <div class="max-w-lg space-y-6">
                    <h2 class="text-black font-bold text-2xl">{{ data.solutions.title }}</h2>
                    <p class="text-gray-600 text-lg">{{ data.solutions.desc }}</p>
                    <div class="space-y-4">
                        <div v-for="(p, i) in data.solutions.points" :key="i" class="flex gap-4 items-start">
                            <img :src="p.icon" class="w-6 h-6" />
                            <div>
                                <h3 class="text-black font-bold text-xl">{{ p.title }}</h3>
                                <p class="text-gray-500 text-lg">{{ p.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right section (plus-shaped layout with 4 cards) -->
                <div class="relative w-[420px] h-[420px] rounded-xl overflow-hidden shadow-md bg-white">
                    <div class="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2"></div>
                    <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 -translate-y-1/2"></div>
                    <!-- Quadrant grid -->
                    <div class="grid grid-cols-2 grid-rows-2 w-full h-full">
                        <div v-for="(c, i) in data.solutions.cards" :key="i"
                            class="flex flex-col items-center justify-center p-6">
                            <img :src="c.icon" class="w-[60px] h-[60px]" />
                            <span class="mt-2 text-sm font-semibold text-center">{{ c.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Results -->
        <div class="max-w-[1440px] mx-auto px-[120px] py-12 text-[#030712] space-y-6">
            <h2 class="text-black font-bold text-2xl">{{ data.results.title }}</h2>
            <p class="text-gray-500 text-lg">{{ data.results.desc }}</p>
            <div class="flex space-x-4">
                <div v-for="(s, i) in data.results.stats" :key="i"
                    class="group w-[240px] h-[256px] bg-white rounded-xl p-6 flex flex-col justify-between text-center transform transition duration-200 hover:scale-105 hover:bg-red-600 hover:text-white">
                    <span class="font-medium text-lg">{{ s.title }}</span>
                    <p class="text-sm text-gray-500 group-hover:text-white">{{ s.desc }}</p>
                    <div class="border-b border-gray-300"></div>
                    <p class="text-5xl font-bold">{{ s.value }}</p>
                </div>
            </div>
        </div>

        <!-- Process -->
        <div class="max-w-[1440px] mx-auto px-[120px] py-16 text-[#030712]">
            <div class="flex items-start justify-between gap-16">

                <div class="w-1/2 pr-6 flex flex-col space-y-10">
                    <h2 class="text-3xl font-bold text-gray-900 text-nowrap">
                        {{ data.process.title }}
                    </h2>

                    <div v-for="(step, i) in data.process.steps" :key="i" class="flex items-start gap-6 relative">

                        <div class="flex flex-col items-center relative">
                            <div
                                class="w-12 h-12 flex items-center justify-center bg-red-600 text-white font-bold rounded-full shadow-md z-10">
                                {{ step.number }}
                            </div>
                            <div v-if="i < data.process.steps.length - 1"
                                class="absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>
                        </div>


                        <div class="flex-1">
                            <p class="text-xl font-semibold text-gray-900">{{ step.title }}</p>
                            <p class="text-gray-600 mt-2 leading-relaxed">{{ step.desc }}</p>
                        </div>
                    </div>
                </div>

                <div class="w-1/2 flex justify-center">
                    <img src="/webp/bulb.webp" alt="Bulb"
                        class="w-[400px] h-auto rounded-2xl shadow-lg object-contain" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import data from '../../public/json/whoWeAre.json'
</script>
