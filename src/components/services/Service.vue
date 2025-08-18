<!-- <template>
  <div class="font-outfit w-full bg-gray-50">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
      <div class="text-black font-bold text-[28px] leading-[36px] mb-6">Services</div>
      <div class="text-gray-500 text-lg leading-[24px] mb-10">
        We offer end-to-end technology services to help businesses thrive—from AI and data analytics to cybersecurity
        and cloud solutions. Our consulting experts guide every step of your digital journey. With a focus on
        transformation, we help you innovate and stay ahead in a fast-changing world.
      </div>
    </div>

    <div class="w-full overflow-hidden">
      <Splide ref="splideRef" :options="splideOptions" class="w-full px-4 sm:px-6 md:px-10 lg:ml-[220px]">
        <SplideSlide v-for="(s, i) in services" :key="i">
          <div class="w-[348px] flex-shrink-0">
            <div class="h-[256px] rounded-t-xl overflow-hidden group cursor-pointer">
              <img :src="s.img" :alt="s.title"
                class="w-full h-full object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-125" />
            </div>

            <div class="bg-white rounded-b-xl p-4 flex flex-col items-center justify-center">
              <h1 class="text-lg font-semibold mb-2">{{ s.title }}</h1>
              <p class="h-[120px] mb-4 w-full md:w-4/5">{{ s.description }}</p>
              <div class="self-stretch -mx-4 border-b border-gray-200 mb-4"></div>
              <div class="flex gap-2 items-center justify-center text-black cursor-pointer group">
                <span class="transition-transform duration-300 group-hover:translate-x-1">
                  Read More
                </span>
                <img src="/svg/rightArrow.svg" alt="Right"
                  class="transition-transform duration-300 group-hover:translate-x-2" />
              </div>

            </div>
          </div>

        </SplideSlide>
      </Splide>
    </div>

    
    <CommonSplide :items="services">
      <template #default="{ item }">
        <div class="max-w-[480px] mx-2 relative group">
          <div class="h-[224px] pb-16 p-6 rounded-xl bg-gray-100 flex flex-col justify-between transition-colors duration-300 group-hover:bg-red-600">
            <div class="flex flex-col items-center space-y-3 text-center">
              <img :src="item.icon" alt="icon" class="w-[60px] h-[49px]" />
              <p class="text-gray-700 w-full md:w-4/5 text-lg leading-[24px] transition-colors duration-300 group-hover:text-white">
                "{{ item.quote }}"
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center relative -mt-16">
            <div class="text-center z-10">
              <img :src="item.avatar" alt="avatar" class="w-20 h-20 rounded-full" />
              <p class="mt-2 text-gray-900">{{ item.name }}</p>
              <p class="text-xs text-gray-500">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </template>
    </CommonSplide>

  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import services from '~/public/json/service.json'

const splideRef: any = ref(null);
const isLeftHover = ref(false)
const isRightHover = ref(false)

const isActive = ref(0);
const serviceLength = ref(2)

const progressWidth = ref(0);

const updateProgress = () => {
  const totalSlides = splideRef.value?.splide.length || 1
  const visibleSlides = splideRef.value?.splide.options.perPage || 1
  const maxIndex = totalSlides - visibleSlides
  const percentage = (isActive.value / maxIndex) * 100
  progressWidth.value = Math.min(100, Math.max(0, percentage))
}

const splideOptions = ref({
  type: 'slide',
  autoWidth: true,
  drag: 'free',
  focus: 'left',
  pagination: false,
  arrows: false,
  gap: 24,
  padding: {
    left: '0px',
    right: '220px',
  },
})

const updateSplideOptions = () => {
  const width = window.innerWidth

  if (width >= 1024) {
    serviceLength.value = 2;
  } else if (width >= 768) {
    serviceLength.value = 1;
  } else {
    serviceLength.value = 0;
  }

  if (splideRef.value) {
    splideRef.value.splide.options = { perPage: serviceLength.value + 1 };
    splideRef.value.splide.refresh();
  }

  if (splideRef.value?.splide) {
    splideRef.value.splide.options = splideOptions.value
    splideRef.value.splide.refresh()
  }
}

onMounted(() => {
  splideRef.value?.splide.event.on("moved", (newIndex: number) => {
    isActive.value = newIndex;
    updateProgress();
  });
  updateSplideOptions();
  window.addEventListener("resize", updateSplideOptions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSplideOptions);
});
</script> -->




<template>
  <div class="font-outfit w-full bg-gray-50">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
      <div class="text-black font-bold text-[28px] leading-[36px] mb-6">Services</div>
      <div class="text-gray-500 text-lg leading-[24px] mb-10">
        We offer end-to-end technology services to help businesses thrive—from AI and data analytics to cybersecurity
        and cloud solutions. Our consulting experts guide every step of your digital journey. With a focus on
        transformation, we help you innovate and stay ahead in a fast-changing world.
      </div>
    </div>

    <CommonSplide :items="services" :align="'end'">
      <template #default="{ item }">
        <div class="w-[348px] flex-shrink-0">
          <div class="h-[256px] rounded-t-xl overflow-hidden group cursor-pointer">
            <img :src="item.img" :alt="item.title"
              class="w-full h-full object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-125" />
          </div>

          <div class="bg-white rounded-b-xl p-4 flex flex-col items-center justify-center">
            <div class="text-lg font-semibold mb-2">{{ item.title }}</div>
            <p class="h-[120px] mb-4 w-full md:w-4/5">{{ item.description }}</p>
            <div class="self-stretch -mx-4 border-b border-gray-200 mb-4"></div>
            <div class="flex gap-2 items-center justify-center text-black cursor-pointer group">
              <span class="transition-transform duration-300 group-hover:translate-x-1">Read More</span>
              <img src="/svg/rightArrow.svg" alt="Right"
                class="transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </template>
    </CommonSplide>
  </div>
</template>

<script setup lang="ts">
import services from '~/public/json/service.json'
import CommonSplide from '@/components/common/CommonSplide.vue'
</script>
