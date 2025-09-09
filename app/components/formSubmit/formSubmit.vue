<template>
    <div
        class="flex flex-col items-center justify-center space-y-6 p-6 bg-white rounded-xl w-full max-w-[548px] h-[298px] font-outfit text-center">
        <img src="/assets/svg/mail.svg" alt="Mail" class="w-16 h-16" />
        <h1 class="text-[28px] font-bold text-black">Thank You</h1>
        <p class="text-sm text-gray-500 leading-relaxed">
            We've received your application and our team will review it shortly.
            If your profile aligns with our needs, we'll be in touch soon.
        </p>
        <!-- back to careers -->
        <NuxtLink to="/careers/career" class="flex justify-center pt-4">
            <button @click="afStore.closeformPopup"
                class="px-6 sm:px-8 py-2 sm:py-3 rounded-[32px] text-white font-medium flex justify-center items-center gap-x-3 transition-colors duration-100 w-auto text-sm sm:text-base bg-red-600 hover:bg-red-500 hover:text-white cursor-pointer">
                Back to Careers
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
import { NuxtLink } from '#components';
const afStore = useAfStore()
</script>
