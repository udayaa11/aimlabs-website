<template>
  <div @mouseleave="activeDropdown = null" class="relative">
    <div class="fixed top-0 left-0 w-full h-[84px] bg-white z-50 shadow-md border-b-2">
      <div class="h-full max-w-[1440px] mx-auto px-[120px] flex items-center justify-between">
        <div>
          <NuxtLink to="/" @click="closeDropdown">
            <img src="/svg/aimlabsLogo.svg" alt="Aimlabs Logo" class="cursor-pointer" />
          </NuxtLink>
        </div>

        <div class="flex gap-10 text-gray-800 text-sm font-medium">
          <div class="relative cursor-pointer" @mouseenter="activeDropdown = 'what'">
            <div class="flex gap-2 items-center">
              <span class="font-outfit text-base font-semibold leading-5">What We Do</span>
              <img src="/svg/dropdownIcon.svg"
                :style="{ transform: activeDropdown === 'what' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
            </div>
          </div>
          <transition name="slide-fade">
            <WhatwedoDropdownPanel v-if="activeDropdown === 'what'"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>

          <div class="flex gap-2 items-center cursor-pointer" @mouseenter="activeDropdown = 'accelerate'">
            <span class="font-outfit text-base font-semibold leading-5">Accelerate With Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'accelerate' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <AccelerateWithUs v-if="activeDropdown === 'accelerate'" :close-dropdown="closeDropdown"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>

          <div class="flex gap-2 items-center cursor-pointer" @mouseenter="activeDropdown = 'about'">
            <span class="font-outfit text-base font-semibold leading-5">About us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <AboutUs v-if="activeDropdown === 'about'" :close-dropdown="closeDropdown"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>

          <NuxtLink to="/careers" class="cursor-pointer flex flex-col items-center gap-2">
            <span class="font-outfit text-base font-semibold leading-5">
              Careers
            </span>
          </NuxtLink>

        </div>
        <div class="p-10">
          <ContactUsButton bg-color="bg-red-600" text-color="text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WhatwedoDropdownPanel from './WhatwedoDropdownPanel.vue'
import AccelerateWithUs from '../../pages/accelerate-with-us/index.vue'
import AboutUs from '../../pages/about-us/index.vue'
import ContactUsButton from '../../components/common/ContactUSButton.vue'

const activeDropdown = ref<string | null>(null)

function closeDropdown() {
  activeDropdown.value = null;
}
</script>


<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
