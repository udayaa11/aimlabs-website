<template>
    <div class="font-outfit text-[#030712] space-y-12">
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
        <!-- Careers -->
        <div class="w-full max-w-[1440px] mx-auto px-[120px] py-10 space-y-6">
            <h1 class="text-black font-bold text-[28px] leading-[36px]">
                We’ve got plenty of positions—find one that fits you.
            </h1>
            <p class="text-gray-500">
                We’re looking for passionate people to join us on our mission. We value flat
                hierarchies, clear communication and full ownership and responsibility.
            </p>
            
            <div v-for="category in categories" :key="category.title" class="grid grid-cols-[420px_1fr] items-start">
                <p class="text-[28px] self-center">{{ category.title }}</p>
                <div class="flex gap-x-12">
                    <NuxtLink v-for="role in category.roles" :key="role" :to="`/careers/${getSlugForRole(role)}`"
                        class="flex flex-col gap-y-2 items-center"
                        :class="{ 'text-red-600 font-bold': isActiveRole(role) }">
                        <img :src="getIconForRole(role)" alt="" />
                        <p class="capitalize">{{ role }}</p>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between py-20">
                <div class="w-full md:w-2/3 space-y-8">
                    <h2 class="text-black font-bold text-[28px] leading-[36px]">
                        Everyone requires a new perspective, occasionally.
                    </h2>
                    <p class="text-gray-500 text-lg leading-[24px]">
                        We're an intern-friendly team that values learning, growth, and fresh ideas.
                    </p>
                    <div class="group cursor-pointer rounded-[32px] bg-red-600 hover:bg-red-500 px-5 py-3 w-full md:w-1/4 flex justify-center 
                      items-center transition-colors duration-100 text-black hover:text-white gap-x-3 text-nowrap">
                        <span class="font-medium">Apply for Internship</span>
                        <img src="/svg/rightArrow.svg" alt="" class="w-5 h-5 block group-hover:hidden" />
                        <img src="/svg/rightArrowWhite.svg" alt="" class="w-5 h-5 hidden group-hover:block" />
                    </div>

                </div>
                <img src="/png/internship.png" alt="Mic Icon" class="w-[200px] md:w-[280px] h-auto shrink-0" />
            </div>
            <!-- Identity sections -->
            <div class="space-y-6">
                <div v-for="section in team.identitySections" :key="section.title" class="space-y-6">
                    <h2 class="text-black font-bold text-[28px] leading-[36px]">
                        {{ section.title }}
                    </h2>
                    <p v-for="(para, idx) in section.paragraphs" :key="idx"
                        class="text-gray-500 text-lg leading-[24px]">
                        {{ para }}
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray-200 py-10">
            <div class="w-full max-w-[1440px] mx-auto px-[120px]">
                <h2 class="text-black font-bold text-[28px] leading-[36px] mb-10">
                    {{ team.recruitment.title }} <br />
                    <span class="text-black font-bold text-[28px] leading-[36px]">{{ team.recruitment.subtitle }}</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="(step, i) in recruitment.steps" :key="i"
                        class="space-y-4 bg-white rounded-lg p-6 shadow">
                        <div class="flex gap-x-2 items-center">
                            <p class="bg-red-600 text-white rounded px-2 py-1 font-semibold">
                                {{ step.step }}
                            </p>
                            <p class="text-[28px] leading-[36px]">{{ step.title }}</p>
                        </div>
                        <p class="text-gray-700 leading-relaxed">
                            {{ step.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import careers from '../../public/json/carrers.json'
import careerData from '~/public/json/careerData.json'
import { useRoute } from 'vue-router'

const route = useRoute()

const team = careers[0]
const recruitment = team.recruitment

const norm = (s) => s?.toLowerCase().replace(/[^a-z0-9]/g, '')

const getSlugForRole = (label) => {
    const exact = careerData.find(j => norm(j.jobTitle) === norm(label))
    if (exact) return exact.slug
    return label.toLowerCase().replace(/\s+/g, '-')
}

const getIconForRole = (label) => {
    const hit = careerData.find(j => norm(j.jobTitle) === norm(label))
    return hit?.icon || '/svg/Careers/frontendDeveloper.svg'
}

const slugifyRole = (role) => role.toLowerCase().replace(/\s+/g, '-')
const isActiveRole = (role) => route.path.includes(slugifyRole(role))


const categories = [
    {
        title: "Development",
        roles: ["Front End Developer", "Back End Developer", "Fullstack Developer", "Mobile App Developer"]
    },
    {
        title: "Graphic Design",
        roles: ["3D Artist", "Graphic Designer"]
    }
]
</script>
