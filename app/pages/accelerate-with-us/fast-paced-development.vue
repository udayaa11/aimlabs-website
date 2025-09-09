<template>
    <div class="font-outfit relative text-white">
        <!-- Hero Banner -->
        <div class="relative w-full h-[720px]">
            <img src="/assets/webp/fastPacedDevelopment.webp" alt="Home Page Banner" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p
                    class="text-[32px] lg:text-[54px] sm:text-[36px] xxs:text-[20px] font-semibold leading-tight md:leading-[60px]">
                    Fast Paced Development
                </p>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-[1440px] mx-auto lg:px-[120px] sm:px-6 px-4 py-12 space-y-12 text-[#030712]">
            <!-- Intro -->
            <p class="text-gray-500 text-lg">
                In today’s digital age, speed is everything. Our fast-paced development approach helps you bring ideas
                to life quickly—without sacrificing quality. With agile workflows, skilled teams, and rapid iteration
                cycles, we turn your concepts into market-ready solutions at lightning speed.
            </p>

            <!-- Key Points -->
            <div class="space-y-4">
                <div v-for="(item, i) in points" :key="i" class="flex items-start gap-3">
                    <img src="/assets/svg/diamond.svg" alt="Diamond" class="shrink-0 mt-2 w-5 h-5" />
                    <div class="text-lg font-semibold">
                        {{ item.title }}
                        <span class="text-lg font-normal leading-[24px] text-gray-500">{{ item.desc }}</span>
                    </div>
                </div>
            </div>

            <!-- What You Get -->
            <div class="text-black font-bold text-2xl leading-9 mb-6">What You Get</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                <div v-for="(item, index) in fastPaced" :key="index"
                    class="group relative flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]
                 w-full max-w-[396px] sm:max-w-[348px] lg:max-w-[384px] min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                    <!-- Icon -->
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

                    <!-- Text -->
                    <div class="flex flex-col">
                        <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-1">{{ item.title }}</h3>
                        <p class="text-sm sm:text-base text-[#6A7282] leading-snug">{{ item.desc }}</p>
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
import fastPaced from '../../../public/json/fastPaced.json'

const points = [
    { title: 'Agile Development Methodology :', desc: 'Quick sprints, continuous feedback, faster results.' },
    { title: 'Rapid Prototyping :', desc: 'Validate ideas early with working models.' },
    { title: 'MVP Launch Support :', desc: 'Get to market fast with minimum viable products.' },
    { title: 'Parallel Workflows :', desc: 'Design, development, and testing run simultaneously.' },
    { title: 'Automated Testing & CI/CD :', desc: 'Faster releases with fewer bugs.' },
    { title: 'Cross-Functional Teams :', desc: 'Streamlined collaboration from day one.' }
]

const stands = [
    { number: '01', title: 'Speed Without Sacrificing Quality', desc: 'Fast delivery with consistent, reliable performance.' },
    { number: '02', title: 'Launch Sooner, Grow Faster', desc: 'Go to market quickly and scale with confidence.' },
    { number: '03', title: 'Iterate. Improve. Innovate. Quickly.', desc: 'Rapid feedback cycles for continuous improvement.' },
    { number: '04', title: 'From Idea to Execution—Fast.', desc: 'Turn concepts into live products in no time.' },
    { number: '05', title: 'Real-Time Progress, Real Business Impact', desc: 'Track progress and see measurable results, fast.' }
]
</script>
