<template>
	<div class="NonAppearances">
		<div class="accordion accordion-area">

			<div class="accordion-header" @click="toggleAccordion">
				<label class="label-medium">번호별 현재까지 연속 미등장 횟수</label>
				<span class="accordion-icon">{{ isOpen ? "▲" : "▼" }}</span>
			</div>

			<div class="accordion-body" v-if="isOpen">
				<div class="chart">
					<ul class="chart-list">
						<li class="chart-item" v-for="(item, index) in maxNonAppearancesCounts" :key="index">
							<div class="chart-bar">
								<!-- 번호 라벨 -->
								<div class="chart-bar-label">
									<span class="ball-645"
										:class="'ball-' + getGroup(item.number)">{{ item.number }}</span>
								</div>
								<!-- 연속 등장 횟수와 바 차트 -->
								<div class="chart-bar-volum">
									<span class="chart-bar-bg" :style="{ width: item.count * 5 + 'px' }"></span>
									<span>{{ item.count }}</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		computed,
		onMounted,
		ref
	} from 'vue';
	import {
		useDrwStore
	} from '@/stores/DrwStore';

	// Pinia store 가져오기
	const drwStore = useDrwStore();

	// 아코디언 상태 (열림/닫힘)
	const isOpen = ref(false);

	// 현재 까지 등장하지 않은 
	const maxNonAppearancesCounts = ref([]);

	// 그룹(색상) 계산 함수
	function getGroup(number) {
		return Math.floor((number - 1) / 10) + 1;
	}

	// 아코디언 토글 함수
	function toggleAccordion() {
		isOpen.value = !isOpen.value; // 열기/닫기 상태 반전
	}

	onMounted(() => {
		// 번호 체크
		const _draws = drwStore.numbers; // Store에서 당첨 번호들 가져오기

		for (let i = 0; i < 45; i++) {
			const _number = i + 1; // 번호 (1부터 시작)
			const _cnt = drwStore.calculateNonAppearances(_draws, _number);

			const _data = {
				number: _number,
				count: _cnt
			};
			maxNonAppearancesCounts.value.push(_data);
		}
	})

</script>

<style scoped>
	.chart-bar {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.chart-bar-volum {
		background-color: #4caf50;
		color: white;
		text-align: right;
		padding: 0 5px;
		line-height: 20px;
		height: 20px;
		margin-left: 10px;
		border-radius: 5px;
	}

</style>
