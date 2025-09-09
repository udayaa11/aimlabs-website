<template>
  <div class="w-full">
    <Splide ref="splideRef" :options="splideOptions" class="w-full pl-4 lg:pl-[240px] md:pl-4 sm:pl-6 xs:ml-2 xxs:ml-2">
      <SplideSlide v-for="(item, i) in items" :key="i">
        <slot :item="item" :index="i" />
      </SplideSlide>
    </Splide>

    <CommonSplideControls :splide-ref="splideRef" :progress-width="progressWidth" :align="align" :padding="padding" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { useSplideLogic } from '../../composables/useSplide'

const props = defineProps<{
  items: any[]
  align: 'start' | 'end'
  padding: 'px-4 sm:px-[120px]'
}>()

const splideRef = ref()
const { progressWidth, splideOptions } = useSplideLogic(splideRef)
</script>
