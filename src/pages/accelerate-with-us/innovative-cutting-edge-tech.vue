<template>
    <div class="font-outfit relative text-white">
        <div class="relative w-full h-[720px]">
            <img src="/webp/homepageBanner.webp" alt="Home Page Banner" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p
                    class="text-[32px] lg:text-[54px] sm:text-[36px] xxs:text-[20px] font-semibold leading-tight md:leading-[60px]">
                    Innovative / Cutting Edge Tech
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto lg:px-[120px] sm:px-6 px-4 py-12 space-y-12 text-[#030712]">
            <p class="text-gray-500 text-lg">
                At the heart of everything we build is innovation. Our cutting-edge technologies are designed to solve
                real-world problems, empower digital transformation, and future-proof your business. We embrace emerging
                tech like AI, blockchain, IoT, and AR/VR to create solutions that aren’t just smart—they’re
                game-changing.
            </p>

            <div class="space-y-4">
                <div v-for="(item, i) in points" :key="i" class="flex items-start gap-3">
                    <img src="/svg/diamond.svg" alt="Diamond" class="shrink-0 mt-2 w-5 h-5" />
                    <div class="text-lg font-semibold">
                        {{ item.title }} :
                        <span class="text-lg font-normal leading-[24px] text-gray-500">
                            {{ item.desc }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="text-black font-bold text-2xl xxs:text-[20px] leading-9 mb-6">What You Get</div>

            <div class="grid max-[800px]:grid-cols-2 lg:grid-cols-3">
                <div v-for="(item, index) in benefits" :key="index" class="group text-center space-y-3 cursor-pointer p-6
                                        border-gray-300 hover:bg-red-500 transition-colors duration-200
                                        max-[800px]:border-r max-[800px]:[&:nth-child(2n)]:border-r-0
                                        max-[800px]:border-b max-[800px]:[&:nth-last-child(-n+2)]:border-b-0
                                        lg:border-r lg:[&:nth-child(3n)]:border-r-0
                                        lg:border-b lg:[&:nth-last-child(-n+3)]:border-b-0">
                    <div class="w-16 h-16 mx-auto relative">
                        <img :src="item.red" :alt="item.title"
                            class="absolute inset-0 w-full h-full object-contain group-hover:hidden" />
                        <img :src="item.white" :alt="item.title"
                            class="absolute inset-0 w-full h-full object-contain hidden group-hover:block" />
                    </div>
                    <div class="font-bold text-lg xxs:text-base group-hover:text-white">
                        {{ item.title }}
                    </div>
                    <p class="text-sm text-[#6A7282] group-hover:text-white">
                        {{ item.desc }}
                    </p>
                </div>
            </div>


            <div class="text-black font-bold text-2xl xxs:text-[20px] leading-9 mb-6">What Stands Out</div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[48px]">
                <div v-for="(item, i) in stands" :key="i" class="flex items-start space-x-4">
                    <div
                        class="bg-[#F3F4F6] p-1 rounded-full text-lg font-semibold flex-shrink-0 w-12 h-12 flex items-center justify-center">
                        {{ item.number }}
                    </div>
                    <div>
                        <div class="text-lg xxs:text-base font-semibold">{{ item.title }}</div>
                        <div class="text-sm text-gray-500 leading-[20px] mt-1">{{ item.desc }}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import benefits from '../../public/json/innovation.json'
const points = [
    { title: 'AI & Machine Learning Integration', desc: 'Make smarter, data-driven decisions in real time.' },
    { title: 'Blockchain-Based Solutions', desc: 'Ensure transparency, security, and trust in every transaction.' },
    { title: 'IoT Connectivity', desc: 'Link devices, gather insights, and automate with intelligence.' },
    { title: 'AR/VR Experiences', desc: 'Enhance user engagement with immersive digital environments.' },
    { title: 'Cloud-Native Architecture', desc: 'Build scalable, secure apps with modern infrastructure.' },
    { title: 'API-First Approach', desc: 'Ensure flexibility and integration across platforms.' },
    { title: 'Automation Tools', desc: 'Streamline workflows and increase productivity with minimal effort.' }
]

const stands = [
    { number: '01', title: ' Next-Gen Technologies', desc: 'Leveraging AI, Blockchain, IoT, and AR/VR.' },
    { number: '02', title: 'Future-Ready Solutions', desc: 'Built to scale, evolve, and adapt with your business.' },
    { number: '03', title: 'Smart Automation', desc: ' Streamline operations with intelligent, rule-based systems' },
    { number: '04', title: 'Seamless Integrations', desc: 'API-first design for smooth connectivity across platforms.' },
    { number: '05', title: 'Security by Design', desc: ' Innovation that doesn’t compromise on data protection.tructure.' },
    { number: '06', title: 'Faster Time-to-Market', desc: 'Launch bold ideas with speed and precision.' },
    { number: '07', title: 'Custombun installizable Architecture', desc: 'Flexible solutions tailored to your needs.' },
    { number: '08', title: 'Impact-Driven Innovation', desc: 'Tech that solves problems and creates real-world value.' }
]
</script>
