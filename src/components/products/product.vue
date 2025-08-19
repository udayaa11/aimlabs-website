<template>
    <div class="max-w-[1440px] w-full mx-auto px-[120px] font-outfit pb-10">
        <div class="text-black font-bold text-[28px] leading-[36px] mb-6">Products</div>

        <div class="flex flex-col md:flex-row gap-x-12">
            <div v-for="(column, ci) in columns" :key="ci" class="flex flex-col gap-4">
                <div v-for="item in column" :key="item.name"
                    class="relative group flex items-center justify-between border-b border-gray-300 px-5 py-5 w-[558px] h-[80px]">
                    <span
                        class="text-black text-lg relative z-10 transition-colors duration-300 group-hover:text-white">
                        {{ item.name }}
                    </span>
                    <img src="/svg/crossIcon.svg" alt="Cross Arrow"
                        class="w-10 h-10 relative z-10 transition-all duration-300 group-hover:opacity-0" />
                    <img src="/svg/crossIconRed.svg" alt="Cross Arrow Red"
                        class="w-10 h-10 absolute right-5 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                        
                    <span class="absolute left-0 top-0 h-full w-0 bg-red-600 transition-all duration-500 ease-out group-hover:w-full"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const columns = [
    [
        { name: "E-Commerce" },
        { name: "Game Servers & Platforms" },
        { name: "Sportsbook" }
    ],
    [
        { name: "E-Commerce Latest" },
        { name: "Mobile Apps" },
        { name: "Trade Exchange Platforms" }
    ]
]
</script>
