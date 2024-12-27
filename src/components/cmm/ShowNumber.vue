<template>
	<div class="ShowNumber">
		<div class="accordion accordion-area">
			<div class="accordion-header" @click="toggleAccordion">
				<label class="label-medium">번호별 등장 횟수</label>
				<span class="accordion-icon">{{ isOpen ? "▲" : "▼" }}</span>
			</div>
			<div class="accordion-body" v-if="isOpen">
				<div class="chart">
					<ul class="chart-list">
						<!-- 번호별 등장 횟수 표시 -->
						<li class="chart-item" v-for="(item, index) in numberStats" :key="index">
							<div class="chart-bar">
								<!-- 번호 라벨 -->
								<div class="chart-bar-label">
									<span class="ball-645" :class="'ball-' + getGroup(item.number)">{{ item.number }}</span>
								</div>
								<!-- 연속 등장 횟수와 바 차트 -->
								<div class="chart-bar-volum">
									<span class="chart-bar-bg" :style="{ width: item.count * 2 + 'px' }"></span>
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
		ref,
		computed
	} from "vue";
	import {
		useDrwStore
	} from "@/stores/DrwStore";

	// Pinia store 가져오기
	const drwStore = useDrwStore();

	// 아코디언 상태 관리
	const isOpen = ref(false);

	// 아코디언 토글 함수
	const toggleAccordion = () => {
		isOpen.value = !isOpen.value;
	};

	// 번호 등장 횟수 계산 함수
	const calculateNumberStats = () => {
		const stats = Array(45).fill(0); // 1~45의 초기 등장 횟수 (0으로 초기화)

		// 스토어 데이터 순회
		drwStore.numbers.forEach((item) => {
			// 각 회차의 당첨번호 카운트
			stats[Number(item.drwtNo1) - 1]++;
			stats[Number(item.drwtNo2) - 1]++;
			stats[Number(item.drwtNo3) - 1]++;
			stats[Number(item.drwtNo4) - 1]++;
			stats[Number(item.drwtNo5) - 1]++;
			stats[Number(item.drwtNo6) - 1]++;
		});

		return stats.map((count, index) => ({
			number: index + 1,
			count,
		})); // 번호와 등장 횟수를 객체로 반환
	};

	// 번호별 등장 횟수를 반응형 데이터로 관리 (내림차순 정렬 추가)
	const numberStats = computed(() => {
		const statsArray = calculateNumberStats();

		// 등장 횟수를 기준으로 내림차순 정렬
		return statsArray.sort((a, b) => b.count - a.count);
	});

	// 그룹(색상) 계산 함수
	function getGroup(number) {
		// (number - 1)을 10으로 나누고 1을 더해 그룹 계산
		return Math.floor((number - 1) / 10) + 1;
	}

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
