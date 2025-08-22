<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    size: String
});
</script>

<template>
    <div class="bg-[#EAE6F6] p-10 rounded-lg shadow-lg flex flex-row gap-12 align-center mx-auto" :class="size">
        <slot />
    </div>
</template>
