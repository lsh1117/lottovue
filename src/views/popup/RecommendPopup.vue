<template>
	<div>
		<div class="ball-area">
			<ul class="ball-list">
				<li class="ball-item" v-for="number in numbers" :key="number">
					<span class="ball-645" :class="'ball-' + getGroup(number)">{{number}}</span>
				</li>
			</ul>
		</div>
		<div class="btn-area btn-area-center">
			<button class="btn-primary btn-small" @click="$emit('close')">닫기</button>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import { useCalculateStore } from "@/stores/CalculateStore";
	import { useExceptionStore } from "@/stores/ExceptionStore";
	import { useFixedStore } from "@/stores/FixedStore";
	import { useRecommendStore } from "@/stores/RecommendStore";

	// Pinia store 가져오기
	const exceptionStore = useExceptionStore();
	const fixedStore = useFixedStore();
	const calculateStore = useCalculateStore();
	const recommendStore = useRecommendStore();

	const numbers = ref([]);

	// 제외 번호
	const _exceptionNumber = exceptionStore.numbers;
	// 고정 번호
	const _fixedNumber = fixedStore.numbers;

	// 번호뽑기시 삭제해야 할 번호. ( 제외번호+고정번호 )
	const _exc = _exceptionNumber.concat(_fixedNumber);

	// 계산에 필요한 모든 숫자 
	let _totalNumbers = [...calculateStore.getNumbers()];

	// 번호뽑기시 삭제해야 할 번호 제외 한 전체 번호
	let _newTotalNumbers = _totalNumbers.filter(item => !_exc.includes(item));

	const _cnt = 6 - _fixedNumber.length;

	for(let i=0;i<_cnt;i++) {
		let _number = getRandomElement(_newTotalNumbers);
		_newTotalNumbers = _newTotalNumbers.filter(item => item !== _number);
		numbers.value.push(_number);
	}

	numbers.value.push(..._fixedNumber);
	numbers.value.sort((a, b) => a - b);

	recommendStore.addNumbers(numbers);

	// 번호 그룹 계산 함수
	function getGroup(n) {
		return Math.floor((n - 1) / 10) + 1;
	}

	function getRandomElement(array) {
		if (!Array.isArray(array) || array.length === 0) {
			throw new Error("유효한 배열을 입력해주세요.");
		}

		// 배열의 인덱스를 랜덤으로 선택
		const randomIndex = Math.floor(Math.random() * array.length);

		// 선택된 인덱스의 요소 반환
		return array[randomIndex];
	}

	onMounted(() => {
		
	});
</script>

<style scoped>
</style>
