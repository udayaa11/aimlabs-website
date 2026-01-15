<template>
    <div class="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] font-outfit pb-10">
        <div class="text-black font-bold text-2xl md:text-[28px] leading-snug md:leading-[36px] mb-6">
            Products
        </div>

        <div class="sm:flex lg:flex-row gap-6 lg:gap-x-12">
            <div v-for="(column, ci) in columns" :key="ci" class="flex flex-col gap-4">
                <div v-for="item in column" :key="item.name"
                    class="relative group flex items-center justify-between border-b border-gray-300 px-4 sm:px-2 py-4 md:py-5 w-full lg:w-[558px] sm:w-[330px] h-[72px] md:h-[80px] rounded-md">
                    <span
                        class="text-black text-base md:text-lg relative z-10 transition-colors duration-300 group-hover:text-white">
                        {{ item.name }}
                    </span>

                    <!-- <div class="relative w-8 h-8 md:w-10 md:h-10">
                        <img src="/assets/svg/crossIcon.svg" alt="Cross Arrow"
                            class="absolute inset-0 w-full h-full z-10 transition-opacity duration-300 group-hover:opacity-0" />
                        <img src="/assets/svg/crossIconRed.svg" alt="Cross Arrow Red"
                            class="absolute inset-0 w-full h-full z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div> -->

                    <span
                        class="absolute left-0 top-0 h-full w-0 bg-red-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const columns = [
    [
        { name: "OTT Platforms" },
        { name: "Game Servers & Platforms" },
        { name: "Sportsbook" }
    ],
    [
        { name: "E-Commerce Latest" },
        { name: "Mobile Apps" },
        { name: "Trade Exchange Platforms" }
    ]
];
</script>
