<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const type = route.params.type;

if (type !== 'portrait' && type !== 'esport') {
    window.location.href = '/';
} else {
    //
}
</script>

<template>
    
</template>