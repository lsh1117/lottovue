<template>
	<div>
		<div class="ball-container">
			<!-- 번호 볼 목록 -->
			<div class="box-area">
				<div class="box">
					<div class="ball-area">
						<ul class="ball-list">
							<li class="ball-item" v-for="number in numbers" :key="number">
								<div class="checkbox-area ball-645" :class="'ball-' + getGroup(number)">
									<input type="checkbox" :id="'ball-' + number" :value="number"
										v-model="selectedNumbers"
										:disabled="!selectedNumbers.includes(number) && selectedNumbers.length >= maxSelection"
										@change="onCheckedHandler" />
									<label :for="'ball-' + number">{{ number }}</label>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="btn-area btn-area-center">
			<p v-if="isMaxSelection" class="error-message">최대 {{ maxSelection }}개의 번호만 선택할 수 있습니다.</p>
			<button class="btn-primary btn-small" @click="onConfirmHandler">확인</button>
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

	// Emit 이벤트 정의
	const emit = defineEmits(["close"]);

	// Pinia store 가져오기
	const fixedStore = useFixedStore();

	// Prop 정의
	const props = defineProps({
		onConfirm: {
			type: Function,
			default: null,
		},
	});

	// 번호 목록 생성 (1 ~ 45)
	const numbers = Array.from({
		length: 45
	}, (_, i) => i + 1);

	// 선택된 번호를 저장하는 상태
	let selectedNumbers = ref([]);

	// 최대 선택 가능한 개수
	const maxSelection = 6;

	// 최대 선택 제한 여부
	const isMaxSelection = computed(() => selectedNumbers.value.length >= maxSelection);

	// Mounted 시 store의 번호를 초기화
	onMounted(() => {
		selectedNumbers.value = [...fixedStore.numbers];
	});

	// 번호 그룹 계산 함수
	function getGroup(n) {
		return Math.floor((n - 1) / 10) + 1;
	}

	// 체크박스 선택 이벤트 핸들러
	function onCheckedHandler(e) {
        /*
		const number = parseInt(e.target.value, 10);
		const isChecked = e.target.checked;

		if (isChecked) {
			// 번호 추가
			if (selectedNumbers.value.length < maxSelection) {
				selectedNumbers.value.push(number);
			}
		} else {
			// 번호 제거
			const index = selectedNumbers.value.indexOf(number);
			if (index !== -1) {
				selectedNumbers.value.splice(index, 1);
			}
		}
            */
	}

	// 확인 버튼 클릭 핸들러
	function onConfirmHandler() {
		// 선택된 번호를 store에 저장
		fixedStore.setNumbers(selectedNumbers.value);

		// Prop의 onConfirm 함수 호출
		if (props.onConfirm) {
			props.onConfirm();
		}

		// 팝업 닫기 이벤트 emit
		emit("close");
	}

</script>

<style scoped>
	.error-message {
		color: red;
		font-size: 0.9rem;
		text-align: center;
		margin-bottom: 10px;
	}

</style>
