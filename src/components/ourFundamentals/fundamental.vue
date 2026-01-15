<template>
    <div class="w-full max-w-[1440px] mx-auto px-6 lg:px-[80px] py-16">
        <h2 class="text-black font-bold text-[28px] leading-[36px] mb-4">
            Our Fundamentals
        </h2>
        <p class="text-gray-500 text-lg leading-[24px] mb-12 max-w-[800px]">
            Every engagement we undertake with our clients, their customers,
            our colleagues, and the communities in which we function is directed by these principles.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div v-for="item in fundamentals" :key="item.id"
                class="relative flex flex-col items-center text-center space-y-4">
                <span class="text-[100px] font-bold leading-[80px] bg-[linear-gradient(180deg,#FFC5C7_0%,rgba(255,197,199,0)_100%)] 
                 bg-clip-text text-transparent">
                    {{ item.id }}
                </span>

                <span class="absolute top-8 text-red-600 text-lg font-medium leading-[24px]">
                    {{ item.title }}
                </span>

                <p class="text-gray-500 text-base leading-[24px] py-1">
                    {{ item.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import fundamentals from "../../public/json/fundamental.json"
</script>
