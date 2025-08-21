<template>
  <header @mouseleave="activeDropdown = null" class="fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b">
    <div class="mx-auto max-w-[1440px] h-[84px] flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-[120px]">
      <!-- Logo -->
      <NuxtLink to="/" @click="closeDropdown">
        <img src="/svg/aimlabsLogo.svg" alt="Aimlabs Logo" class="h-8 sm:h-10 cursor-pointer" />
      </NuxtLink>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8 lg:gap-10 text-gray-800 text-sm font-medium">
        <!-- What We Do -->
        <div class="relative cursor-pointer" @mouseenter="activeDropdown = 'what'">
          <div class="flex gap-2 items-center">
            <span class="font-outfit text-base font-semibold">What We Do</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'what' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <WhatwedoDropdownPanel v-if="activeDropdown === 'what'"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>
        </div>
        <!-- Accelerate With Us -->
        <div class="relative cursor-pointer" @mouseenter="activeDropdown = 'accelerate'">
          <div class="flex gap-2 items-center">
            <span class="font-outfit text-base font-semibold">Accelerate With Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'accelerate' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <AccelerateWithUs v-if="activeDropdown === 'accelerate'" :close-dropdown="closeDropdown"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>
        </div>
        <!-- About Us -->
        <div class="relative cursor-pointer" @mouseenter="activeDropdown = 'about'">
          <div class="flex gap-2 items-center">
            <span class="font-outfit text-base font-semibold">About Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <AboutUs v-if="activeDropdown === 'about'" :close-dropdown="closeDropdown"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>
        </div>
        <!-- Careers -->
        <NuxtLink to="/careers/career"
          class="flex items-center cursor-pointer hover:underline hover:[text-decoration-thickness:2px] hover:underline-offset-4"
          active-class="text-red-600 underline decoration-red-600 [text-decoration-thickness:2px] underline-offset-4">
          <span class="font-outfit text-base font-semibold">Careers</span>
        </NuxtLink>
      </nav>
      <!-- CTA -->
      <div class="hidden sm:block">
        <ContactUsButton bg-color="bg-red-600" text-color="text-white" />
      </div>
      <!-- Mobile Menu (Hamburger placeholder) -->
      <button class="md:hidden p-2">
        <img src="/svg/menu.svg" alt="Menu" class="h-6 w-6" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WhatwedoDropdownPanel from './WhatwedoDropdownPanel.vue'
import AccelerateWithUs from '../../pages/accelerate-with-us/index.vue'
import AboutUs from '../../pages/about-us/index.vue'
import ContactUsButton from '../../components/common/ContactUSButton.vue'

const activeDropdown = ref<string | null>(null)
function closeDropdown() {
  activeDropdown.value = null
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
