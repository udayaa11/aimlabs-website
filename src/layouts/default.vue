<template>
    <div class="min-h-screen flex flex-col">
        <TopBar class="fixed top-0 left-0 w-full z-50" />
        <div class="flex-1 md:pt-[84px] max-[500px]:pt-[76px]">
            <NuxtPage />
        </div>
        <common-footerBar />
    </div>
</template>

<script setup>
import TopBar from '~/components/navigation/TopBar.vue'
</script>

<style>
:root:has(.no-doc-scroll) {
    overflow: hidden;
}

::-webkit-scrollbar {
    display: none;
}

body {
    background-color: #fff;
    overflow-x: hidden;
}
</style>
