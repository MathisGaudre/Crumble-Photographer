<script setup>
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import { ref, computed } from "vue";

const route = useRoute();
const type = route.params.type;

let images = ref()



if (type !== "portrait" && type !== "esport") {
    window.location.href = "/";
} else {
    document.title = type === "portrait" ? "Portfolio - Portraits" : "Portfolio - Esport";
    if (type == "esport") {
        images = Object.keys(import.meta.glob('../../public/images/esport/*', { as: 'url' }))
            .map(path => path.replace(/^.*\/images\/esport\//, 'images/esport/'));
    } else if (type == "portrait") {
        images = Object.keys(import.meta.glob('../../public/images/portrait/*', { as: 'url' }))
            .map(path => path.replace(/^.*\/images\/portrait\//, 'images/portrait/'));
    }
}

</script>

<template>
  <Header />

    <main class="flex flex-col gap-8 xl:mx-46 lg:mx-24 mx-3">
        <div>
            <h1 class="font-mini_titre text-2xl md:text-4xl text-ink-base text-center">
                Portfolio
            </h1>
            <p class="font-serif italic text-center text-ink-base">{{ type == 'portrait' ? 'Portraits' : 'Esport' }}.</p>
        </div>
        <div class="bg-white w-full py-8 px-4 md:px-8">
            <div class="columns-1 sm:columns-2 md:columns-4 gap-2 space-y-2">
                <img :src="`/${img}`" v-for="img in images" :key="img"  draggable="false" class="w-full h-auto object-cover transition-transform duration-300 hover:scale-[102%] cursor-pointer" />
            </div>
        </div>
    </main>
</template>

<style scoped>
img {}

img:hover {
  cursor: url("/images/pointer.png") 12 12, auto;
}
</style>