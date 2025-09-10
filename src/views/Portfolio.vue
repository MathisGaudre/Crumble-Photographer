<script setup>
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";

const route = useRoute();
const type = route.params.type;

if (type !== "portrait" && type !== "esport") {
    window.location.href = "/";
} else {
    document.title = type === "portrait" ? "Portfolio - Portraits" : "Portfolio - Esport";
}
</script>

<template>
  <Header />

    <main class="flex flex-col gap-8 xl:mx-72 lg:mx-24 mx-3">
        <div>
            <h1 class="font-mini_titre text-2xl md:text-4xl text-ink-base text-center">
                Portfolio
            </h1>
            <p class="font-serif italic text-center text-ink-base">{{ type == 'portrait' ? 'Portraits' : 'Esport' }}.</p>
        </div>
        <div class="bg-white w-full py-8 px-4 md:px-8">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <div v-for="n in 9" :key="n" class="flex justify-center">
                    <img :src="`https://picsum.photos/200/300?random=${n}`" alt="Random" class="rounded shadow-md" />
                </div>
            </div>
        </div>
    </main>
</template>
