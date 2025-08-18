<template>
    <div class="font-outfit relative text-white">
        <div class="relative w-full h-[720px]">
            <img src="/webp/customerCentricApproach.webp" alt="Home Page Banner" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px]">
                    Customer Centric Approach
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto px-[120px] py-12 space-y-12 text-[#030712]">
            <p class="text-gray-500 text-lg">
                Our customer-centric approach places your needs at the core of everything we do. From strategy to
                delivery, we listen, adapt, and evolve based on real customer feedback and expectations. We don’t just
                build products — we build relationships, ensuring long-term success through empathy, transparency, and
                collaboration.
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
        </div>

        <div class="bg-[#F9FAFB] w-full">
            <div class="max-w-[1440px] mx-auto px-[120px] py-12 space-y-12 text-[#030712]">
                <div class="text-black font-bold text-2xl leading-9 mb-6">What You Get</div>

                <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 justify-center">
                    <div v-for="(item, index) in customer" :key="index" class="
                            relative group text-center space-y-3 cursor-pointer p-6
                            bg-white rounded-xl shadow-[20px_20px_50px_0_rgba(0,0,0,0.05)] 
                             transition-colors duration-300 
                             w-full max-w-[282px] h-[304px]
                            overflow-hidden flex flex-col items-center justify-center">

                        <div class="absolute inset-0 bg-red-600 transform translate-y-full 
                            group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        </div>

                        <div class="relative z-10 flex flex-col items-center space-y-3">
                            <div class="w-16 h-16 relative">
                                <img :src="item.red" :alt="item.title"
                                    class="absolute inset-0 w-full h-full object-contain group-hover:hidden" />
                                <img :src="item.white" :alt="item.title"
                                    class="absolute inset-0 w-full h-full object-contain hidden group-hover:block" />
                            </div>
                            <div class="font-bold text-lg text-gray-900 group-hover:text-white">
                                {{ item.title }}
                            </div>
                            <p class="text-sm text-[#6A7282] group-hover:text-white">
                                {{ item.desc }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="max-w-[1440px] mx-auto px-[120px] py-12 space-y-12 text-[#030712]">
            <div class="text-black font-bold text-2xl leading-9 mb-6">What Stands Out</div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-[48px]">
                <div v-for="(item, i) in stands" :key="i" class="flex items-start space-x-4">
                    <div class="flex flex-col justify-center items-center">
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
import customer from '../../public/json/customer.json'
const points = [
    { title: 'Personalized Solutions :', desc: 'Tailored services that align with your unique business goals.' },
    { title: 'Proactive Communication :', desc: 'Regular updates, check-ins, and responsive support at every stage.' },
    { title: 'Feedback-Driven Development :', desc: 'Products shaped and refined by your feedback.' },
    { title: 'Dedicated Account Managers :', desc: 'A single point of contact who understands your journey.' },
    { title: 'Collaborative Planning :', desc: 'We co-create strategies, roadmaps, and features with you.' },
    { title: 'Scalable Support Systems :', desc: 'We grow with you, offering flexible service tiers.' },
]

const stands = [
    { number: '01', title: ' You First, Always', desc: 'We design with empathy and purpose.' },
    { number: '02', title: 'Feedback is Our Fuel', desc: 'Constant improvement, guided by your voice.' },
    { number: '03', title: 'Tailored to Fit You', desc: ' Every solution is built around your goals.' },
    { number: '04', title: 'Accessible, Responsive Team', desc: 'No guesswork. Just real conversations.' },
    { number: '05', title: 'Data-Backed Decisions', desc: 'We listen and learn from what the numbers say too.' }
]
</script>
