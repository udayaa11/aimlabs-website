import { ref, onMounted, onUnmounted } from 'vue'

export function useSplideLogic(splideRef: any) {
    const isLeftHover = ref(false)
    const isRightHover = ref(false)
    const progressWidth = ref(0)
    const isActive = ref(0)
    const serviceLength = ref(2)

    const splideOptions = ref({
        type: 'slide',
        autoWidth: true,
        drag: 'free',
        focus: 'left',
        pagination: false,
        arrows: false,
        gap: 20,
        padding: { left: '0px', right: '220px' },
    })

    const updateProgress = () => {
        const totalSlides = splideRef.value?.splide.length || 1
        const visibleSlides = splideRef.value?.splide.options.perPage || 1
        const maxIndex = totalSlides - visibleSlides
        const percentage = (isActive.value / maxIndex) * 100
        progressWidth.value = Math.min(100, Math.max(0, percentage))
    }

    const updateSplideOptions = () => {
        const width = window.innerWidth
        if (width >= 1024) serviceLength.value = 2
        else if (width >= 768) serviceLength.value = 1
        else serviceLength.value = 0

        if (splideRef.value) {
            splideRef.value.splide.options = { perPage: serviceLength.value + 1 }
            splideRef.value.splide.refresh()
        }

        if (splideRef.value?.splide) {
            splideRef.value.splide.options = splideOptions.value
            splideRef.value.splide.refresh()
        }
    }

    onMounted(() => {
        splideRef.value?.splide.on('moved', (newIndex: number) => {
            isActive.value = newIndex
            updateProgress()
        })
        updateSplideOptions()
        window.addEventListener('resize', updateSplideOptions)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', updateSplideOptions)
    })

    return {
        isLeftHover,
        isRightHover,
        progressWidth,
        splideOptions
    }
}
