<template>

    <div class="font-outfit w-full bg-[#1C202A] text-white">
        <div
            class="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-[60px] flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">

            <div class="flex-1 space-y-6">
                <h2 class="font-bold text-[28px] leading-[36px]">
                    Let’s Build Something Great
                </h2>
                <p class="w-full md:w-11/12 text-lg text-gray-300 leading-[28px]">
                    Whether you're growing your business or starting something new, we're here to support your journey.
                    With trusted expertise and personalized solutions, your next move is in good hands.
                </p>
                <ContactUsButton bg-color="bg-white" text-color="text-red-600" />
            </div>

            <div class="flex-1 flex justify-center lg:justify-end">
                <img src="/webp/letsBuildGreatImage.webp" alt="Let's Build Something Great"
                    class="w-full max-w-[500px] object-contain">
            </div>

        </div>
    </div>

    <!-- Footer -->
    <div class="flex z-10 justify-center items-center min-w-full text-white bg-black font-mulish">
        <div class="relative px-4 max-w-[1440px] w-full max-h-auto">
            <div class="px-2 py-6 w-full border-b border-gray-900 md:px-28">
                <div class="flex flex-col gap-10 justify-between mt-6 md:flex-row">
                    <!-- Logo & Info -->
                    <div class="space-y-6 w-full md:w-1/4">
                        <NuxtLink to="/" class="flex gap-4 items-center no-underline">
                            <div class="flex flex-col space-y-2">
                                <img src="/svg/aimlabsLogo.svg" class="w-full md:w-[120px] h-11"
                                    @click.native="scrollToTop" />
                                <div class="flex gap-3">
                                    <img src="/svg/footer/instaIcon.svg" />
                                    <img src="/svg/footer/fbIcon.svg" />
                                    <img src="/svg/footer/twitterIcon.svg" />
                                    <img src="/svg/footer/musicIcon.svg" />
                                </div>
                            </div>
                        </NuxtLink>
                    </div>

                    <!-- Link Columns -->
                    <div class="flex flex-col md:flex-row justify-around w-full gap-6">
                        <div v-for="(column, colIndex) in footerItems" :key="colIndex" class="space-y-2">
                            <div class="font-medium text-[20px] leading-[24px] py-1">{{ column.heading }}</div>
                            <p v-for="(item, itemIndex) in column.items" :key="itemIndex"
                                class="cursor-pointer hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4 text-sm leading-[16px] text-gray-300"> 
                                {{  item.label }}</p>
                        </div>
                    </div>

                </div>

                <!-- Bottom Row -->
                <div
                    class="flex flex-wrap gap-4 justify-between items-center pt-4 mt-6 text-sm text-white border-t border-gray-500">
                    <div class="text-center md:text-left">
                        <span class="text-sm font-semibold text-[#D1D5DC] leading-[16px]">© 2025 Underscore Aimlabs Pvt
                            Ltd</span>
                    </div>

                    <div class="flex items-center gap-x-2">
                        <NuxtLink to="/terms-and-conditions" class="hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4">Terms & Conditions</NuxtLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                        </svg>
                        <NuxtLink to="/privacy" class="hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4">Privacy Policy</NuxtLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                        </svg>
                        <a href="/" class="hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4">Cookie Policy</a>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
// import { useAfStore } from '~/store/store';
// import { useDeeplink } from '../../composables/use-deeplink';
import ContactUsButton from '../../components/common/ContactUSButton.vue'


// const { handleDeeplink } = useDeeplink();

const footerItems = [
    {
        heading: 'Services',
        items: [
            { label: 'AI', anchorId: 'about-us', behavior: ['scroll'], path: '#ai' },
            { label: 'Data & Analytics', anchorId: 'brand', behavior: ['scroll'], path: '#brand' },
            { label: 'Cyber Security', anchorId: 'why-choose-us', behavior: ['scroll'], path: '#why-choose-us' },
            { label: 'Cloud Services', anchorId: 'commissions', behavior: ['scroll'], path: '#commissions' },
            { label: 'Consulting', path: '/testimonials', behavior: ['redirect'] },
            { label: 'Digital Transformation', path: '/news', behavior: ['redirect'] },
        ]
    },
    {
        heading: 'Products & Platforms',
        items: [
            { label: 'E-Commerce', path: '/e-commerce', behavior: ['redirect'] },
            { label: 'Sports Book', path: '/sports-book', behavior: ['redirect'] },
            { label: 'Trade Exchange', path: '/trade-exchange', behavior: ['redirect'] },
            { label: 'Mobile Apps', path: '/mobile-apps', behavior: ['redirect'] },
            { label: 'Game Servers', path: '/game-servers', behavior: ['redirect'] },
        ]
    },
    {
        heading: 'Solutions',
        items: [
            { label: 'AI Platforms', path: '/ai-platforms', behavior: ['redirect'] },
            { label: 'ML Model Builder', path: '/ml-model-builder', behavior: ['redirect'] },
            { label: 'Low Code Development', path: '/low-code-development', behavior: ['redirect'] },
            { label: 'Data Annotation', path: '/data-annotation', behavior: ['redirect'] },
            { label: 'API & SDK Access', path: '/api-sdk-access', behavior: ['redirect'] },
        ]
    },
    {
        heading: 'About Us',
        items: [
            { label: 'Mission & Vision', path: '/mission-vision', behavior: ['redirect'] },
            { label: 'Our Team', path: '/our-team', behavior: ['redirect'] },
            { label: 'Careers', path: '/careers', behavior: ['redirect'] },
        ]
    }
]


const scrollToTop = (event: MouseEvent) => {
    if (window.location.pathname === '/') {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

</script>
