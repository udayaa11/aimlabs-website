<template>

    <div class="font-outfit w-full bg-[#1C202A] text-white">
        <div
            class="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-[60px] flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">

            <div class="flex-1 space-y-6">
                <h2 class="font-bold sm:text-[28px] xxs:text-[20px] leading-[36px]">
                    Let’s Build Something Great
                </h2>
                <p class="w-full md:w-11/12 sm:text-lg xxs:text-base text-gray-300 leading-[28px]">
                    Whether you're growing your business or starting something new, we're here to support your journey.
                    With trusted expertise and personalized solutions, your next move is in good hands.
                </p>
                <ContactUsButton bg-color="bg-white" text-color="text-red-600" />
            </div>

            <div class="flex-1 flex justify-center lg:justify-end">
                <img src="/assets/webp/letsBuildGreatImage.webp" alt="Let's Build Something Great"
                    class="w-full max-w-[500px] object-contain">
            </div>

        </div>
    </div>

    <!-- Footer Wrapper -->
    <div class="flex z-10 justify-center items-center min-w-full text-white bg-black font-mulish py-5 relative">
        <div class="relative px-4 max-w-[1440px] lg:px-[120px] w-full">
            <div class="px-2 sm:py-6 w-full md:px-4">
                <div class="flex flex-col sm:gap-10 gap-5 justify-between mt-6 lg:flex-row">
                    <div class="sm:space-y-6 w-full md:w-1/4">
                        <NuxtLink to="/" class="flex items-center no-underline">
                            <div class="flex flex-col sm:space-y-2 xxs:space-y-3">
                                <img src="/assets/svg/aimlabsLogo.svg"
                                    class="w-full sm:w-[120px] xxs:w-[100px] sm:h-11 xxs:h-5"
                                    @click.native="scrollToTop" />
                                <div class="flex gap-3">
                                    <a v-for="(icon, name) in icons" :key="name" :href="icon.url" target="_blank"
                                        rel="noopener noreferrer" class="group">
                                        <img :src="icon.black" :alt="name"
                                            class="w-6 h-6 transition duration-300 group-hover:hidden" />
                                        <img :src="icon.red" :alt="name"
                                            class="w-6 h-6 transition duration-300 hidden group-hover:block" />
                                    </a>
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
                                {{ item.label }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Bottom Row -->
                <div
                    class="flex flex-col sm:flex-row justify-between pt-4 mt-6 text-sm text-white border-t border-gray-500 relative">
                    <div class="text-center max-[500px]:text-start sm:text-left mb-4 sm:mb-0">
                        <span class="text-sm font-semibold text-[#D1D5DC] leading-[16px]">
                            © 2025 Underscore Aimlabs Pvt Ltd
                        </span>
                    </div>

                    <div class="flex w-full sm:w-auto justify-between sm:justify-end items-center">
                        <div class="flex flex-wrap items-center gap-x-2 xxs:text-xs max-[500px]:justify-start">
                            <NuxtLink to="/terms-and-conditions"
                                class="hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4">
                                Terms of Use
                            </NuxtLink>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4">
                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                            </svg>
                            <NuxtLink to="/privacy"
                                class="hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4">
                                Privacy Policy
                            </NuxtLink>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4">
                                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                            </svg>
                            <a href="/"
                                class="hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4">
                                Cookie Policy
                            </a>
                        </div>
                        <div @click="scrollToTop"
                            class="ml-4 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center cursor-pointer">
                            <img src="/assets/svg/arrowUp.svg" alt="Go Up" class="sm:w-10 sm:h-10 w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



</template>

<script setup lang="ts">
import ContactUsButton from '../../components/common/ContactUSButton.vue'

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

const icons = {
    facebook: {
        black: "/svg/footer/fbIcon.svg",
        red: "/svg/socialMediaIcons/facebookRed.svg",
        url: "https://facebook.com"
    },
    instagram: {
        black: "/svg/footer/instaIcon.svg",
        red: "/svg/socialMediaIcons/instagramRed.svg",
        url: "https://instagram.com"
    },
    linkedin: {
        black: "/svg/footer/linkedin.svg",
        red: "/svg/socialMediaIcons/linkedinRed.svg",
        url: "https://linkedin.com"
    },
    twitter: {
        black: "/svg/footer/twitterIcon.svg",
        red: "/svg/socialMediaIcons/twitterRed.svg",
        url: "https://twitter.com"
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}


</script>
