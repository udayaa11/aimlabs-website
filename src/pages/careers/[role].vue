<template>
  <div v-if="career" class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] py-8 sm:py-10 space-y-6">

    <!-- Back Link -->
    <NuxtLink to="/careers/career" class="group inline-flex items-center gap-2 text-gray-700 text-sm">
      <img src="/svg/backToCareers.svg" alt="Back Icon" class="w-5 h-5 block group-hover:hidden" />
      <img src="/svg/backArrowRed.svg" alt="Back Red Icon" class="w-5 h-5 hidden group-hover:block" />
      <span
        class="text-[#030712] text-base sm:text-lg md:text-[20px] font-medium leading-[24px] group-hover:text-red-600">
        Back to Careers
      </span>
    </NuxtLink>

    <!-- Job Card -->
    <div class="bg-red-600 text-white rounded-xl p-5 sm:p-6 md:p-8 space-y-3">
      <p class="text-xl sm:text-2xl md:text-3xl font-bold">{{ career.jobTitle }}</p>
      <div class="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-sm md:text-base items-center">
        <div class="flex items-center gap-2">
          <img src="/svg/yearsIcon.svg" alt="Experience" class="w-4 h-4" />
          <span>{{ career.experience }}</span>
        </div>
        <div class="flex items-center gap-2">
          <img src="/svg/location.svg" alt="Location" class="w-4 h-4" />
          <span>{{ career.location }}</span>
        </div>
        <div class="flex items-center gap-2">
          <img src="/svg/fulltime.svg" alt="Job Type" class="w-4 h-4" />
          <span>{{ career.jobType }}</span>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p class="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
      {{ career.description }}
    </p>

    <!-- Sections -->
    <div v-for="section in career.sections" :key="section.heading" class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-red-400"></div>
        <p class="text-base sm:text-lg md:text-xl font-medium leading-6">{{ section.heading }}</p>
      </div>
      <ul class="list-disc list-inside space-y-1 text-sm md:text-base text-gray-500">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
    </div>

    <!-- Divider -->
    <div class="border border-[#D1D5DC]"></div>

    <!-- Apply -->
    <div class="space-y-6 sm:space-y-8">
      <h2 class="text-black font-bold text-xl sm:text-2xl md:text-[28px] leading-8">Apply for this job</h2>

      <!-- Fields -->
      <div class="w-full max-w-full sm:max-w-[700px] lg:max-w-[91%]">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <template v-for="field in formFields" :key="field.id">
            <div class="space-y-2">
              <label :for="field.id" class="block text-gray-900 font-bold text-sm">
                {{ field.label }} <span v-if="field.required" class="text-red-500">*</span>
              </label>
              <input :id="field.id" :type="field.type" :placeholder="field.placeholder" :required="field.required"
                class="w-full h-10 px-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Cover Letter -->
    <div class="w-full md:w-[91%] space-y-3">
      <h2 class="text-black font-bold text-base sm:text-lg leading-[24px]">Cover Letter (optional)</h2>
      <textarea placeholder="Share why you’re a great fit."
        class="w-full h-32 sm:h-40 p-3 border border-gray-400 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"></textarea>
    </div>

    <!-- Resume Upload -->
    <div
      class="w-full md:w-[91%] h-32 sm:h-40 rounded-xl bg-gray-50 border border-gray-400 flex flex-col justify-center items-center text-center cursor-pointer">
      <label for="resume" class="w-full h-full flex flex-col justify-center items-center">
        <span class="text-black text-base sm:text-lg font-semibold cursor-pointer">
          Upload Resume <span class="text-red-500">*</span>
        </span>
        <span class="text-gray-500 text-xs sm:text-sm mt-1">
          Max file size: 5MB. Supported formats: PDF, DOC, DOCX.
        </span>
        <input id="resume" type="file" accept=".pdf,.doc,.docx" class="hidden" />
      </label>
    </div>

    <!-- Consents + Submit -->
    <div class="space-y-4 mx-auto">
      <label class="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" v-model="checkboxes.agreeTerms"
          class="w-5 h-5 rounded-sm border-gray-400 checked:bg-red-600 checked:border-red-600 focus:ring-0" />
        <div class="text-gray-700 text-sm leading-5">
          I agree to the <span class="text-red-600 font-semibold">Terms & Conditions</span> and
          <span class="text-red-600 font-semibold">Privacy Policy</span> and consent AIMLABS to store my personal data.*
        </div>
      </label>
      <label class="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" v-model="checkboxes.contactConsent"
          class="w-5 h-5 rounded-sm border-gray-400 checked:bg-red-600 checked:border-red-600 focus:ring-0" />
        <div class="text-gray-700 text-sm leading-5">
          Yes, AIMLABS can contact me about future job opportunities.
        </div>
      </label>

      <!-- Submit Button -->
      <div class="flex justify-center pt-4">
        <button :disabled="!allChecked"
          class="px-6 sm:px-8 py-2 sm:py-3 rounded-[32px] text-white font-medium flex justify-center items-center gap-x-3 transition-colors duration-100 w-auto text-sm sm:text-base"
          :class="allChecked ? 'bg-red-600 hover:bg-red-500 hover:text-white cursor-pointer' : 'bg-red-200 cursor-not-allowed'">
          SUBMIT APPLICATION
        </button>
      </div>
    </div>
  </div>

  <!-- Fallback -->
  <div v-else class="text-center py-20 text-gray-600 text-lg">
    Job not found.
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import careerData from '~/public/json/careerData.json'
import { NuxtLink } from '#components'

const route = useRoute()
const roleSlug = computed(() => String(route.params.role || '').toLowerCase())
const slugify = (s) => s?.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')

const career = computed(() => {
  const data = careerData
  if (Array.isArray(data)) {
    return (
      data.find(j => (j.slug || slugify(j.jobTitle)) === roleSlug.value) ||
      null
    )
  }
  return data
})

const formFields = [
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name', required: true },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name', required: true },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', required: true },
]

const checkboxes = reactive({
  agreeTerms: false,
  contactConsent: false,
})
const allChecked = computed(() => checkboxes.agreeTerms && checkboxes.contactConsent)
</script>
