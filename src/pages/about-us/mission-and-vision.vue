<template>
    <div class="font-outfit text-[#030712]">
        <div class="relative w-full h-[720px]">
            <img :src="content.banner.image" :alt="content.banner.alt" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
                <div class="flex items-center gap-x-4 text-lg leading-[24px] text-white">
                    <img :src="content.banner.overlay.icon" :alt="content.banner.overlay.iconAlt" class="w-10 h-10" />
                    <span>{{ content.banner.overlay.tagline }}</span>
                </div>
                <p class="text-[32px] md:text-[54px] font-semibold leading-tight md:leading-[60px] text-white">
                    {{ content.banner.overlay.heading }}
                </p>
            </div>
        </div>

        <div class="w-full max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-12">
            <Splide :options="splideOptions" ref="splideRef">
                <SplideSlide v-for="(card, index) in content.section.cards" :key="index" class="w-full h-auto">
                    <div class="flex flex-col lg:flex-row items-center gap-12">
                        <div class="basis-1/2 flex flex-col space-y-6">
                            <h2 class="text-black font-bold text-2xl leading-9">{{ content.section.heading }}</h2>
                            <p class="text-gray-500 max-w-md">{{ content.section.description }}</p>
                        </div>
                        <div class="basis-1/2 flex justify-center">
                            <img :src="card.image.src" :alt="card.image.alt"
                                class="w-[368px] h-[273px] object-contain" />
                        </div>
                    </div>
                </SplideSlide>
            </Splide>

            <div class="flex items-center gap-x-2 py-5 justify-start">
                <img :src="isLeftHover ? '/svg/leftHoverRed.svg' : '/svg/leftArrowHover.svg'" alt="Left"
                    class="cursor-pointer" @mouseenter="isLeftHover = true" @mouseleave="isLeftHover = false"
                    @click="goPrev" />

                <div class="relative w-40 h-1 bg-gray-300 overflow-hidden rounded">
                    <div class="absolute top-0 left-0 h-full bg-red-600 transition-all duration-300 ease-in-out"
                        :style="{ width: progressWidth + '%' }"></div>
                </div>

                <img :src="isRightHover ? '/svg/rightHoverRed.svg' : '/svg/rightArrowHovered.svg'" alt="Right"
                    class="cursor-pointer" @mouseenter="isRightHover = true" @mouseleave="isRightHover = false"
                    @click="goNext" />
            </div>
        </div>
        <BoardsBoard />
        <Fundamental />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import missionVisionContent from '../../public/json/missionVisionContent.json'
import Fundamental from '~/components/ourFundamentals/fundamental.vue'

const content = missionVisionContent[0]
const splideRef = ref(null)
const isLeftHover = ref(false)
const isRightHover = ref(false)
const progressWidth = ref(0)
const activeIndex = ref(0)

const splideOptions = {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
    rewind: true,
    gap: '1rem',
    drag: true,
    speed: 600
}

const updateProgress = () => {
    if (!splideRef.value?.splide) return
    const splide = splideRef.value.splide
    const totalSlides = splide.length
    const perPage = splide.options.perPage || 1
    const maxIndex = totalSlides - perPage
    const currentIndex = splide.index || 0
    progressWidth.value = maxIndex ? (currentIndex / maxIndex) * 100 : 0
    activeIndex.value = currentIndex
}

const goPrev = () => splideRef.value?.splide.go('<')
const goNext = () => splideRef.value?.splide.go('>')

onMounted(() => {
    if (splideRef.value?.splide) {
        splideRef.value.splide.on('moved', updateProgress)
        updateProgress()
    }
})
</script>
