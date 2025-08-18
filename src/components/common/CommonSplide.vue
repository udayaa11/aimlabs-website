<template>
  <div class="w-full">
    <Splide ref="splideRef" :options="splideOptions" class="w-full px-4 sm:px-6 md:px-10 lg:ml-[220px]">
      <SplideSlide v-for="(item, i) in items" :key="i">
        <slot :item="item" :index="i" />
      </SplideSlide>
    </Splide>

    <CommonSplideControls :splide-ref="splideRef" :progress-width="progressWidth" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { useSplideLogic } from '../../composables/useSplide'

const props = defineProps<{
  items: any[]
}>()

const splideRef = ref()
const { progressWidth, splideOptions } = useSplideLogic(splideRef)
</script>
