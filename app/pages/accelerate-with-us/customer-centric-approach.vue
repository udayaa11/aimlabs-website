<template>
    <div class="font-outfit relative text-white">
        <div class="relative w-full h-[720px]">
            <img src="/assets/webp/customerCentricApproach.webp" alt="Home Page Banner" class="w-full h-full object-cover" />

            <div class="absolute inset-0 flex items-center justify-center text-center">
                <p
                    class="text-[32px] lg:text-[54px] sm:text-[36px] xxs:text-[20px] font-semibold leading-tight md:leading-[60px]">
                    Customer Centric Approach
                </p>
            </div>
        </div>

        <div class="max-w-[1440px] mx-auto lg:px-[120px] sm:px-6 px-4 py-12 space-y-12 text-[#030712]">
            <p class="text-gray-500 text-lg">
                Our customer-centric approach places your needs at the core of everything we do. From strategy to
                delivery, we listen, adapt, and evolve based on real customer feedback and expectations. We don’t just
                build products — we build relationships, ensuring long-term success through empathy, transparency, and
                collaboration.
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

        </div>

        <div class="bg-[#F9FAFB] w-full">
            <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-8 sm:py-12 space-y-12 text-[#030712]">
                <div class="text-black font-bold text-2xl xxs:text-[20px] leading-9">What You Get</div>

                <div class="grid gap-6 max-[768px]:grid-cols-2 lg:grid-cols-4 justify-center">
                    <div v-for="(item, index) in customer" :key="index" class="relative group text-center cursor-pointer
           bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg
           transition-all duration-300 w-full overflow-hidden
           flex flex-col items-center justify-center
           aspect-[3/4] sm:aspect-[4/3] md:aspect-[5/4] lg:aspect-[1/1]">
                        <!-- Hover background overlay -->
                        <div class="absolute inset-0 bg-red-600 transform translate-y-full 
             group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                        <!-- Card content -->
                        <div class="relative z-10 flex flex-col items-center space-y-2 sm:space-y-3 p-4 sm:p-6">
                            <div class="w-9 h-9 sm:w-16 sm:h-16 relative flex-shrink-0">
                                <img :src="item.red" :alt="item.title"
                                    class="absolute inset-0 w-full h-full object-contain group-hover:hidden" />
                                <img :src="item.white" :alt="item.title"
                                    class="absolute inset-0 w-full h-full object-contain hidden group-hover:block" />
                            </div>

                            <div
                                class="font-bold text-sm sm:text-base lg:text-lg text-gray-900 group-hover:text-white text-center leading-snug">
                                {{ item.title }}
                            </div>
                            <p
                                class="text-xs sm:text-sm text-[#6A7282] group-hover:text-white text-center leading-snug">
                                {{ item.desc }}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] py-12 space-y-16 text-[#030712]">
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
import customer from '../../../public/json/customer.json'
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
