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
        <div class="w-full max-w-[1440px] mx-auto px-6 lg:px-[80px]">
            <div class="space-y-6 py-10">
                <h2 class="text-black font-bold text-[28px] leading-[36px]">
                    The Workspace We Love
                </h2>
                <p class="text-gray-500 text-lg leading-[24px]">
                    The Workspace We Love is more than just an office—it's a vibrant, inspiring environment
                    where creativity flourishes and ideas come to life.
                </p>
                <!-- Workspace Grid -->
                <div
                    class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 [grid-auto-flow:dense] [grid-auto-rows:180px] md:[grid-auto-rows:280px] max-w-7xl mx-auto px-4">
                    <div v-for="(card, idx) in team.workspace" :key="idx"
                        class="relative flex flex-col items-center text-center overflow-visible rounded-lg" :class="[
                            idx % 6 === 0 ? 'col-span-1 row-span-1' :
                                idx % 6 === 1 ? 'col-span-2' :
                                    idx % 6 === 2 ? 'row-span-2 col-span-1' : ''
                        ]">
                        <img :src="card.image" :alt="card.title" class="w-full h-full object-cover rounded-lg" />
                        <div class="absolute text-white bg-black/70 px-3 py-1 rounded shadow-lg transition" :class="[
                            idx % 4 === 0 ? '-top-10 left-10' :
                                idx % 4 === 1 ? '-top-10 -right-5 -translate-y-5/6' :
                                    idx % 4 === 2 ? '-bottom-10 left-1/2 -translate-x-1/2' :
                                        '-left-5 top-60 -translate-y-1/2'
                        ]">
                            <img v-if="card.directionIcon" :src="card.directionIcon" alt="Direction Icon"
                                class="w-5 h-5 inline-block mr-1" />
                            <span class="font-semibold text-sm">{{ card.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Careers -->
            <div class="flex flex-col md:flex-row items-center justify-between ">
                <div class="w-full md:w-2/3 space-y-4">
                    <h2 class="text-black font-bold text-[28px] leading-[36px]">
                        We are hiring!
                    </h2>
                    <p class="text-gray-500 text-lg leading-[24px]">
                        We're hiring passionate minds to shape the future of tech. Join us
                        and grow with a team that values innovation, learning, and impact.
                    </p>
                    <NuxtLink to="/careers"
                        class="group cursor-pointer rounded-[32px] bg-red-600 hover:bg-red-500 px-5 py-3 flex justify-center 
                         items-center transition-colors duration-100 w-full max-w-[169px] text-black hover:text-white gap-x-3">
                        <span class="font-medium">See openings</span>
                        <img src="/svg/rightArrow.svg" alt="" class="w-5 h-5 block group-hover:hidden" />
                        <img src="/svg/rightArrowWhite.svg" alt="" class="w-5 h-5 hidden group-hover:block" />
                    </NuxtLink>
                </div>
                <img src="/png/mic.png" alt="Mic Icon" class="w-[200px] md:w-[280px] h-auto shrink-0" />
            </div>

        </div>
    </div>
</template>

<script setup>
import team from '~/public/json/ourTeam.json'
</script>
