
<script setup>
import { ref, onMounted } from 'vue';
const loading = ref(true);

onMounted(() => {
	if (document.readyState === 'complete') {
		loading.value = false
	} else {
		window.addEventListener('load', () => {
			loading.value = false;
		});
	}
});
</script>

<template>
	<transition name="fade">
		<div v-if="loading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#CDBFE0]">
			<div class="flex flex-col items-center gap-4">
				<div class="w-16 h-16 border-4 border-[#412764] border-t-transparent rounded-full animate-spin"></div>
				<span class="text-xl font-semibold text-[#412764]">Chargement...</span>
			</div>
		</div>
	</transition>
</template>