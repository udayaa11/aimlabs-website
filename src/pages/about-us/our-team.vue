<template>
    <div class="font-outfit text-[#030712]">
        <!-- Banner -->
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

        <div class="w-full max-w-[1440px] mx-auto px-6 lg:px-[80px] py-16 space-y-16">
            <div class="space-y-6">
                <h2 class="text-black font-bold text-[28px] leading-[36px]">
                    The Workspace We Love
                </h2>
                <p class="text-gray-500 text-lg leading-[24px]">
                    The Workspace We Love is more than just an office—it's a vibrant, inspiring environment where
                    creativity flourishes and ideas come to life. Designed to foster collaboration, innovation, and a
                    strong sense of community, it's the place where our team comes together to build, grow, and make
                    meaningful impact every single day.
                </p>
                <img src="/png/ourWorkspace.png" alt="Our Workspace" class="w-full h-auto" />
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="w-full md:w-2/3">
                    <h2 class="text-black font-bold text-[28px] leading-[36px] mb-2">
                        We are hiring!
                    </h2>
                    <p class="text-gray-500 text-lg leading-[24px]">
                        We're hiring passionate minds to shape the future of tech. Join us
                        and grow with a team that values innovation, learning, and impact.
                    </p>
                </div>
                <img src="/png/mic.png" alt="Mic Icon" class="w-[280px] h-auto shrink-0" />
            </div>



        </div>
    </div>
</template>

<script setup>
import team from '~/public/json/ourTeam.json'
</script>
