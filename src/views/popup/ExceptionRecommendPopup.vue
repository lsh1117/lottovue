<template>
	<div>
		<div class="text-area">
			제외번호 를 추천합니다.
		</div>
		<div class="btn-area btn-area-center">
			<button class="btn-primary btn-small" @click="$emit('close')">닫기</button>
		</div>
	</div>
</template>

<script setup>
	import {
		onMounted,
		ref,
		computed
	} from "vue";
	import {
		useFixedStore
	} from "@/stores/FixedStore";

</script>

<style scoped>
</style>
