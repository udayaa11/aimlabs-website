<template>
    <div class="font-outfit text-[#030712] space-y-12">
        <!-- Banner -->
        <div class="relative w-full h-[720px]">
            <img :src="team.bannerImage" alt="Banner" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
                <div class="flex items-center gap-4 text-lg text-white">
                    <img :src="team.icon" alt="Icon" class="w-10 h-10" />
                    <span>{{ team.tagline }}</span>
                </div>
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px] text-white">
                    {{ team.heading }}
                </p>
            </div>
        </div>

        <!-- Careers -->
        <div class="w-full max-w-[1440px] mx-auto px-[120px] py-10 space-y-6">
            <h1 class="text-black font-bold text-[28px]">We’ve got plenty of positions—find one that fits you.</h1>
            <p class="text-gray-500">
                We’re looking for passionate people to join us. We value flat hierarchies, clear communication,
                and full ownership.
            </p>

            <div v-for="category in categories" :key="category.title" class="grid grid-cols-[420px_1fr] items-start">
                <p class="text-[28px] self-center">{{ category.title }}</p>
                <div class="flex gap-12">
                    <NuxtLink v-for="role in category.roles" :key="role" :to="`/careers/${getSlugForRole(role)}`"
                        class="flex flex-col items-center gap-2"
                        :class="{ 'text-red-600 font-bold': afStore.lastRole === role }"
                        @click="afStore.setLastRole(role)">
                        <div class="p-2 rounded-full transition" :class="{ 'bg-red-600': afStore.lastRole === role }">
                            <img :src="getIconForRole(role)" alt="Role Icon" />
                        </div>
                        <p class="capitalize">{{ role }}</p>
                    </NuxtLink>
                </div>
            </div>

            <!-- Internship -->
            <div class="flex flex-col md:flex-row items-center justify-between py-20">
                <div class="w-full md:w-2/3 space-y-8 text-nowrap">
                    <h2 class="text-black font-bold text-[28px]">Everyone requires a new perspective, occasionally.</h2>
                    <p class="text-gray-500 text-lg">We're an intern-friendly team that values learning and fresh ideas.
                    </p>
                    <div
                        class="group cursor-pointer rounded-[32px] bg-red-600 hover:bg-red-500 px-5 py-3 w-full md:w-1/4 flex justify-center items-center gap-3 text-black hover:text-white transition">
                        <span class="font-medium">Apply for Internship</span>
                        <img src="/svg/rightArrow.svg" alt="" class="w-5 h-5 block group-hover:hidden" />
                        <img src="/svg/rightArrowWhite.svg" alt="" class="w-5 h-5 hidden group-hover:block" />
                    </div>
                </div>
                <img src="/png/internship.png" alt="Internship" class="w-[200px] md:w-[280px] shrink-0" />
            </div>

            <!-- Identity -->
            <div v-for="section in team.identitySections" :key="section.title" class="space-y-6">
                <h2 class="text-black font-bold text-[28px]">{{ section.title }}</h2>
                <p v-for="(para, i) in section.paragraphs" :key="i" class="text-gray-500 text-lg">{{ para }}</p>
            </div>
        </div>

        <!-- Recruitment -->
        <div class="bg-gray-200 py-10">
            <div class="w-full max-w-[1440px] mx-auto px-[120px]">
                <h2 class="text-black font-bold text-[28px] mb-10">
                    {{ team.recruitment.title }} <br />
                    <span>{{ team.recruitment.subtitle }}</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="(step, i) in recruitment.steps" :key="i"
                        class="space-y-4 bg-white rounded-lg p-6 shadow">
                        <div class="flex gap-2 items-center">
                            <p class="bg-red-600 text-white rounded px-2 py-1 font-semibold">{{ step.step }}</p>
                            <p class="text-[28px]">{{ step.title }}</p>
                        </div>
                        <p class="text-gray-700">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import careers from '~/public/json/carrers.json'
import careerData from '~/public/json/careerData.json'
import { useAfStore } from '~/stores/store'

const route = useRoute()
const team = careers[0]
const recruitment = team.recruitment
const afStore = useAfStore()

const norm = (s: string) => s?.toLowerCase().replace(/[^a-z0-9]/g, '')

const getSlugForRole = (label: string) => {
    const exact = careerData.find(j => norm(j.jobTitle) === norm(label))
    return exact ? exact.slug : label.toLowerCase().replace(/\s+/g, '-')
}

const getIconForRole = (label: string) => {
    const hit = careerData.find(j => norm(j.jobTitle) === norm(label))
    return hit?.icon || '/svg/Careers/frontendDeveloper.svg'
}

const categories = [
    { title: "Development", roles: ["Front End Developer", "Back End Developer", "Fullstack Developer", "Mobile App Developer"] },
    { title: "Graphic Design", roles: ["3D Artist", "Graphic Designer"] }
]
</script>
