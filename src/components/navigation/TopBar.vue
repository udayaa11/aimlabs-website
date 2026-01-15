<template>
  <div @mouseleave="activeDropdown = null" class="relative">
    <div class="fixed top-0 left-0 w-full h-[84px] bg-white z-50 shadow-md border-b-2">
      <div class="h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-[120px] flex items-center justify-between">
        <NuxtLink to="/" @click="closeDropdown">
          <img src="/svg/aimlabsLogo.svg" alt="Aimlabs Logo" class="cursor-pointer" />
        </NuxtLink>
        <!-- Desktop Navigation -->
        <div class="hidden lg:flex gap-10 text-gray-800 text-sm font-medium">
          <div class="relative cursor-pointer" @mouseenter="activeDropdown = 'what'">
            <div class="flex gap-2 items-center">
              <span class="font-outfit text-base font-semibold">What We Do</span>
              <img src="/svg/dropdownIcon.svg"
                :style="{ transform: activeDropdown === 'what' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
            </div>
          </div>
          <transition name="slide-fade">
            <WhatwedoDropdownPanel v-if="activeDropdown === 'what'"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>
          <div class="flex gap-2 items-center cursor-pointer" @mouseenter="activeDropdown = 'accelerate'">
            <span class="font-outfit text-base font-semibold">Accelerate With Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'accelerate' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <AccelerateWithUs v-if="activeDropdown === 'accelerate'" :close-dropdown="closeDropdown"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>
          <div class="flex gap-2 items-center cursor-pointer" @mouseenter="activeDropdown = 'about'">
            <span class="font-outfit text-base font-semibold">About Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: activeDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </div>
          <transition name="slide-fade">
            <AboutUs v-if="activeDropdown === 'about'" :close-dropdown="closeDropdown"
              class="absolute left-0 top-[84px] bg-white shadow-md p-4 w-full" />
          </transition>
          <NuxtLink to="/careers/career"
            class="hover:underline hover:underline-offset-4 font-outfit text-base font-semibold">
            Careers
          </NuxtLink>
        </div>
        <div class="hidden lg:block pl-10">
          <ContactUsButton bg-color="bg-red-600" text-color="text-white" />
        </div>
        <div class="lg:hidden">
          <img src="/svg/menu.svg" alt="Menu" class="cursor-pointer w-6 h-6" @click="toggleMobileMenu" />
        </div>
      </div>
    </div>

    <!-- Mobile Slide-in Menu -->
    <transition name="slide-right">
      <div v-if="isMobileMenuOpen"
        class="fixed top-[84px] right-0 w-full h-screen bg-white shadow-lg z-50 p-6 overflow-y-auto">
        <ul class="flex flex-col gap-6 text-gray-800 text-base font-semibold">
          <!-- What We Do -->
          <li @click="toggleSection('what')" class="cursor-pointer flex justify-between items-center">
            <span>What We Do</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: expandedSection === 'what' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </li>
          <transition name="slide-fade">
            <ul v-if="expandedSection === 'what'" class="pl-4 flex flex-col gap-2 text-sm text-gray-600">
              <div class="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-20">
                <!-- Services Column -->
                <div>
                  <div class="text-lg font-medium mb-4 leading-6">Services</div>
                  <ul class="space-y-3 text-gray-500 text-base leading-5">
                    <li v-for="link in servicesLinks" :key="link.key">
                      <NuxtLink :to="link.to" @click="closeMobileMenu" class="hover:text-red-600">
                        {{ link.label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
                <!-- Products & Platforms Column -->
                <div>
                  <div class="text-lg font-medium mb-4 leading-6">Products & Platforms</div>
                  <ul class="space-y-3 text-gray-500 text-base leading-5">
                    <li v-for="link in productsLinks" :key="link.key">
                      <NuxtLink :to="link.to" @click="closeMobileMenu" class="hover:text-red-600">
                        {{ link.label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
                <!-- Solutions Column -->
                <div>
                  <div class="text-lg font-medium mb-4 leading-6">Solutions</div>
                  <ul class="space-y-3 text-gray-500 text-base leading-5">
                    <li v-for="link in solutionsLinks" :key="link.key">
                      <NuxtLink :to="link.to" @click="closeMobileMenu" class="hover:text-red-600">
                        {{ link.label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </transition>
          <!-- Accelerate With Us -->
          <li @click="toggleSection('accelerate')" class="cursor-pointer flex justify-between items-center">
            <span>Accelerate With Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: expandedSection === 'accelerate' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </li>
          <transition name="slide-fade">
            <ul v-if="expandedSection === 'accelerate'" class="pl-4 flex flex-col gap-2 text-sm text-gray-600">
              <li v-for="link in accelerateLinks" :key="link.key">
                <NuxtLink :to="link.to" @click="closeMobileMenu">
                  {{ link.label }}
                </NuxtLink>
              </li>

            </ul>
          </transition>
          <!-- About Us -->
          <li @click="toggleSection('about')" class="cursor-pointer flex justify-between items-center">
            <span>About Us</span>
            <img src="/svg/dropdownIcon.svg"
              :style="{ transform: expandedSection === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }" />
          </li>
          <transition name="slide-fade">
            <ul v-if="expandedSection === 'about'" class="pl-4 flex flex-col gap-2 text-sm text-gray-600">
              <li v-for="link in aboutUs" :key="link.label">
                <NuxtLink :to="link.to" @click="closeMobileMenu">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </transition>
          <li>
            <NuxtLink to="/careers/career" @click="closeMobileMenu">Careers</NuxtLink>
          </li>
          <li>
            <ContactUsButton bg-color="bg-red-600" text-color="text-white" />
          </li>
        </ul>
      </div>
    </transition>

    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WhatwedoDropdownPanel from './WhatwedoDropdownPanel.vue'
import AccelerateWithUs from '../../pages/accelerate-with-us/index.vue'
import AboutUs from '../../pages/about-us/index.vue'
import ContactUsButton from '../../components/common/ContactUSButton.vue'

const activeDropdown = ref<string | null>(null)
const isMobileMenuOpen = ref(false)
const expandedSection = ref<string | null>(null)

const servicesLinks = [
  { key: 'ai', label: 'AI', to: '/services/ai' },
  { key: 'data-analytics', label: 'Data & Analytics', to: '/services/data-analytics' },
  { key: 'cyber-security', label: 'Cyber Security', to: '/services/cyber-security' },
  { key: 'cloud', label: 'Cloud Services', to: '/services/cloud' },
  { key: 'consulting', label: 'Consulting', to: '/services/consulting' },
  { key: 'digital-transformation', label: 'Digital Transformation', to: '/services/digital-transformation' }
]

const productsLinks = [
  { key: 'ecommerce', label: 'E-Commerce', to: '/products/ecommerce' },
  { key: 'sportsbook', label: 'Sportsbook', to: '/products/sportsbook' },
  { key: 'trade-exchange', label: 'Trade Exchange', to: '/products/trade-exchange' },
  { key: 'mobile-apps', label: 'Mobile Apps', to: '/products/mobile-apps' },
  { key: 'game-servers', label: 'Game Servers', to: '/products/game-servers' }
]

const solutionsLinks = [
  { key: 'ai-platforms', label: 'AI Platforms', to: '/solutions/ai-platforms' },
  { key: 'ml-builder', label: 'ML Model Builder', to: '/solutions/ml-builder' },
  { key: 'low-code', label: 'Low Code Developments', to: '/solutions/low-code' },
  { key: 'data-annotation', label: 'Data Annotation', to: '/solutions/data-annotation' },
  { key: 'api-sdk', label: 'API & SDK Access', to: '/solutions/api-sdk' }
]


const accelerateLinks = [
  { key: 'innovative-cutting-edge-tech', label: 'Innovative / Cutting Edge Tech', to: '/accelerate-with-us/innovative-cutting-edge-tech' },
  { key: 'customer-centric-approach', label: 'Customer Centric Approach', to: '/accelerate-with-us/customer-centric-approach' },
  { key: 'adaptability-flexibility', label: 'Adaptability & Flexibility', to: '/accelerate-with-us/adaptability-flexibility' },
  { key: 'fast-paced-development', label: 'Fast Paced Development', to: '/accelerate-with-us/fast-paced-development' }
]
const aboutUs = [
  { label: 'Who We Are', to: '/about-us/who-we-are' },
  { label: 'Mission & Vision', to: '/about-us/mission-and-vision' },
  { label: 'Our Team', to: '/about-us/our-team' }
]


function closeDropdown() {
  activeDropdown.value = null
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  expandedSection.value = null
}

function toggleSection(section: string) {
  expandedSection.value = expandedSection.value === section ? null : section
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  expandedSection.value = null
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

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s ease, opacity 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
