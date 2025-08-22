<script setup>

defineProps({
    name: String,
    imgSrc: String
});
</script>

<template>
    <a :href="`/photos/${name.toLowerCase()}`">
        <div class="relative group w-full">
            <img :src="imgSrc" alt="Portfolio Image"
                class="w-full h-auto rounded-lg shadow-lg transition duration-500 ease-in-out group-hover:blur-sm" />
            <div class="absolute inset-0 flex items-end justify-center pointer-events-none">
                <span
                    class="mb-6 text-white text-3xl font-mini_titre px-6 py-2 rounded-lg opacity-0 translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    {{ name }}
                </span>
            </div>
        </div>
    </a>
</template>