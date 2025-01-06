<template>
	<div>
		<ul>
			<li>
				<div class="ball-area">
					<ul class="ball-list">
						<li class="ball-item" v-for="number in numbers" :key="number">
							<span class="ball-645" :class="'ball-' + getGroup(number)">{{number}}</span>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		
		<div class="btn-area btn-area-center">
			<button class="btn-primary btn-small" @click="$emit('close')">닫기</button>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import { useRecommendStore } from "@/stores/RecommendStore";

	// Pinia store 가져오기
	const recommendStore = useRecommendStore();

	onMounted(() => {
		
	});
</script>

<style scoped>
</style>
