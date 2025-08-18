<template>
    <div class="font-outfit relative text-white">
        <div class="relative w-full h-[720px]">
            <img src="/webp/adaptabilityAndFlexibility.webp" alt="Home Page Banner"
                class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px]">
                    Adaptability & Flexibility
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto px-[120px] py-12 space-y-12 text-[#030712]">
            <p class="text-gray-500 text-lg">
                In a fast-changing world, adaptability and flexibility are key to success. We embrace change, pivot
                quickly, and customize our solutions to meet evolving business needs. Whether it’s shifting priorities,
                scaling fast, or responding to market trends, we stay agile so you stay ahead.
            </p>

            <div class="space-y-4">
                <div v-for="(item, i) in points" :key="i" class="flex gap-3">
                    <img src="/svg/diamond.svg" alt="Diamond" class="shrink-0" />
                    <div class="text-lg font-semibold">
                        {{ item.title }} :
                        <span class="text-lg font-normal leading-[24px] text-gray-500">{{ item.desc }}</span>
                    </div>
                </div>
            </div>

            <div class="text-black font-bold text-2xl leading-9 mb-6">What You Get</div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center gap-x-4">
                <div v-for="(item, index) in adaptability" :key="index"
                    class="relative group cursor-pointer p-6 bg-white rounded-xl shadow-[20px_20px_50px_0_rgba(0,0,0,0.05)] transition-colors duration-300 w-full max-w-[588px] h-[220px] flex items-center">

                    <div
                        class="relative overflow-hidden rounded-full w-[100px] h-[100px] flex items-center justify-center shrink-0 mr-6">
                        <div
                            class="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-full">
                        </div>
                        <img :src="item.red" :alt="item.title"
                            class="relative w-[50px] h-[50px] object-contain group-hover:hidden z-10" />
                        <img :src="item.white" :alt="item.title"
                            class="relative w-[50px] h-[50px] object-contain hidden group-hover:block z-10" />
                    </div>

                    <div class="flex flex-col">
                        <div class="font-bold text-lg text-gray-900 mb-1">
                            {{ item.title }}
                        </div>
                        <p class="text-sm text-[#6A7282] leading-snug">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="text-black font-bold text-2xl leading-9 mb-6">What Stands Out</div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-[48px]">
                <div v-for="(item, i) in stands" :key="i" class="flex items-start space-x-4">
                    <div class="flex flex-col justify-center">
                        <p
                            class="text-[120px] font-bold leading-[100px] bg-gradient-to-b from-[#E5E7EB] to-[#E5E7EB00]  bg-clip-text text-transparent">
                            {{ item.number }}</p>
                        <p class="text-lg font-medium text-[#030712] leading-[24px]">{{ item.title }}</p>
                        <p class="text-sm text-[#6A7282] leading-[16px] py-3">{{ item.desc }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import adaptability from '../../public/json/adaptability.json'
const points = [
    { title: 'Customizable Solutions :', desc: 'Tailored services that align with your unique business goals.' },
    { title: 'Agile Methodologies :', desc: ' Fast, iterative delivery with continuous feedback loops.' },
    { title: 'Cross-Functional Teams :', desc: 'Versatile teams that shift focus as needed.' },
    { title: 'Scalable Architecture :', desc: 'Systems that grow with your business.' },
    { title: 'On-Demand Resource Allocation :', desc: 'Scale teams and support as needed.' },
    { title: 'Rapid Response to Change :', desc: 'Quick decision-making and implementation.' },]

const stands = [
    { number: '01', title: ' Always Ready to Pivot', desc: 'Change is not a challenge—it’s part of our process.' },
    { number: '02', title: 'Built for Customization', desc: 'One size doesn’t fit all, and it shouldn’t.' },
    { number: '03', title: 'Grows with You', desc: 'From startup to scale-up, we flex with your needs.' },
    { number: '04', title: ' Fast, Focused, Flexible', desc: 'Delivering quality under shifting timelines.' },
    { number: '05', title: 'We Fit Your Flow', desc: 'Tools, teams, and timelines shaped around your business.' }
]
</script>
