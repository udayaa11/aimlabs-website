<template>
    <div class="font-outfit relative text-white">
        <div class="relative w-full h-[720px]">
            <img src="/webp/fastPacedDevelopment.webp" alt="Home Page Banner" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px]">
                    Fast Paced Development
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto px-[120px] py-12 space-y-12 text-[#030712]">
            <p class="text-gray-500 text-lg">
                In today’s digital age, speed is everything. Our fast-paced development approach helps you bring ideas
                to life quickly—without sacrificing quality. With agile workflows, skilled teams, and rapid iteration
                cycles, we turn your concepts into market-ready solutions at lightning speed.
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

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center gap-x-4">
                <div v-for="(item, index) in fastPaced" :key="index"
                    class="relative group cursor-pointer p-6 bg-white rounded-xl shadow-[20px_20px_50px_0_rgba(0,0,0,0.05)] transition-colors duration-300 w-full max-w-[588px] h-[220px] flex items-center">
                    <!-- Icon on Left -->
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
                    <!-- Text on Right -->
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
import fastPaced from '../../public/json/fastPaced.json'
const points = [
    { title: 'Agile Development Methodology :', desc: 'Quick sprints, continuous feedback, faster results.' },
    { title: 'Rapid Prototyping :', desc: 'Validate ideas early with working models.' },
    { title: 'MVP Launch Support :', desc: 'Get to market fast with minimum viable products.' },
    { title: 'Parallel Workflows :', desc: 'Design, development, and testing run simultaneously.' },
    { title: 'Automated Testing & CI/CD :', desc: 'Faster releases with fewer bugs.' },
    { title: 'Cross-Functional Teams :', desc: 'Streamlined collaboration from day one.' },]

const stands = [
    { number: '01', title: 'Speed Without Sacrificing Quality', desc: 'Fast delivery with consistent, reliable performance.' },
    { number: '02', title: 'Launch Sooner, Grow Faster', desc: 'Go to market quickly and scale with confidence.' },
    { number: '03', title: 'Iterate. Improve. Innovate. Quickly.', desc: 'Rapid feedback cycles for continuous improvement.' },
    { number: '04', title: ' From Idea to Execution—Fast.', desc: 'Turn concepts into live products in no time.' },
    { number: '05', title: 'Real-Time Progress, Real Business Impact', desc: 'Track progress and see measurable results, fast.' }
]
</script>
