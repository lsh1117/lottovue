<template>
	<div class="StatisticsView">
		<section class="section section-area">
			<div class="section-header">
				<h4 class="title-big">통계 보기</h4>
			</div>
			<div class="section-body">
				<!-- ShowNumber 컴포넌트 삽입 -->
				<ShowNumber />
				<ConsecutiveShow />
				<NonAppearancesShow />
			</div>
		</section>
	</div>
</template>

<script setup>
	import ShowNumber from "@/components/cmm/ShowNumber.vue"; // ShowNumber 컴포넌트 가져오기
	import ConsecutiveShow from "@/components/cmm/ConsecutiveShow.vue"; // ShowNumber 컴포넌트 가져오기
	import NonConsecutiveShow from "@/components/cmm/NonConsecutiveShow.vue"; // ShowNumber 컴포넌트 가져오기
	import NonAppearancesShow from "@/components/cmm/NonAppearancesShow.vue"; // ShowNumber 컴포넌트 가져오기

</script>

<style scoped>
</style>
