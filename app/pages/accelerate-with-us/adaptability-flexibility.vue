<template>
    <div class="font-outfit relative text-white">
        <div class="relative w-full h-[720px]">
            <img src="/assets/webp/adaptabilityAndFlexibility.webp" alt="Home Page Banner"
                class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p
                    class="text-[32px] lg:text-[54px] sm:text-[36px] xxs:text-[20px] font-semibold leading-tight md:leading-[60px]">
                    Adaptability & Flexibility
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto lg:px-[120px] sm:px-6 px-4 py-12 space-y-12 text-[#030712]">
            <p class="text-gray-500 text-lg">
                In a fast-changing world, adaptability and flexibility are key to success. We embrace change, pivot
                quickly, and customize our solutions to meet evolving business needs. Whether it’s shifting priorities,
                scaling fast, or responding to market trends, we stay agile so you stay ahead.
            </p>

            <div class="space-y-4">
                <div v-for="(item, i) in points" :key="i" class="flex items-start gap-3">
                    <img src="/assets/svg/diamond.svg" alt="Diamond" class="shrink-0 mt-2 w-5 h-5" />
                    <div class="text-lg font-semibold">
                        {{ item.title }}
                        <span class="text-lg font-normal leading-[24px] text-gray-500">
                            {{ item.desc }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="text-black font-bold text-2xl leading-9 mb-6">What You Get</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                <div v-for="(item, index) in adaptability" :key="index" class="group relative flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]
           w-full max-w-[396px] sm:max-w-[348px] lg:max-w-[384px] min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                    <!-- Icon Wrapper -->
                    <div
                        class="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0">
                        <div
                            class="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full">
                        </div>
                        <img :src="item.red" :alt="item.title"
                            class="relative w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:hidden z-10" />
                        <img :src="item.white" :alt="item.title"
                            class="relative w-8 h-8 sm:w-10 sm:h-10 object-contain hidden group-hover:block z-10" />
                    </div>

                    <!-- Text Content -->
                    <div class="flex flex-col">
                        <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-1">
                            {{ item.title }}
                        </h3>
                        <p class="text-sm sm:text-base text-[#6A7282] leading-snug">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- What Stands Out -->
            <div class="text-black font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-8 lg:mb-12">
                What Stands Out
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <div v-for="(item, i) in stands" :key="i" class="relative flex flex-col items-start">
                        <p class="absolute -top-4 sm:-top-6 lg:-top-8 text-[48px] sm:text-[80px] lg:text-[120px] 
                        font-bold leading-none bg-gradient-to-b from-[#E5E7EB] to-transparent 
                        bg-clip-text text-transparent select-none">
                        {{ item.number }}
                    </p>
                    <p
                        class="mt-14 sm:mt-20 lg:mt-24 text-base sm:text-lg lg:text-xl font-semibold text-[#030712] leading-snug">
                        {{ item.title }}
                    </p>
                    <p class="mt-3 text-sm sm:text-base text-[#6A7282] leading-relaxed max-w-[320px]">
                        {{ item.desc }}
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import adaptability from '../../../public/json/adaptability.json'
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
