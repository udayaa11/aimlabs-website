<template>
    <div class="w-full max-w-[1440px] px-[120px] mx-auto space-y-6 py-20">
        <h1 class="text-black font-bold text-[28px]">{{ terms.title }}</h1>

        <div v-for="(sec, index) in terms.sections" :key="index" class="space-y-4 text-gray-600">
            <!-- Email row (special layout) -->
            <template v-if="isEmail(sec)">
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-red-400"></div>
                    <span class="text-base sm:text-lg md:text-xl font-medium">Email:</span>
                    <a :href="`mailto:${sec.paragraph}`" class="text-base text-red-600 font-semibold hover:underline">
                        {{ sec.paragraph }}
                    </a>
                </div>
            </template>

            <!-- Unique case: Only paragraph, no heading -->
            <template v-else-if="!sec.heading && sec.paragraph">
                <p class="text-sm md:text-base text-gray-500">
                    {{ sec.paragraph }}
                </p>
            </template>

            <!-- Default heading + body -->
            <template v-else>
                <!-- Heading -->
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-red-400"></div>
                    <p class="text-base sm:text-lg md:text-xl font-medium">{{ sec.heading }}</p>
                </div>

                <!-- Multiple paragraphs (bullet points) -->
                <ul v-if="sec.paragraphs" class="list-disc list-inside space-y-2">
                    <li v-for="(para, i) in sec.paragraphs" :key="i"
                        class="text-sm md:text-base text-gray-500 marker:text-gray-400">
                        {{ para }}
                    </li>
                </ul>

                <!-- Single paragraph -->
                <p v-else-if="sec.paragraph" class="text-sm md:text-base text-gray-500">
                    {{ sec.paragraph }}
                </p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import terms from '~/public/json/privacy.json'

const isEmail = (sec: any) =>
    typeof sec?.heading === 'string' &&
    sec.heading.trim().toLowerCase().startsWith('email')
</script>
