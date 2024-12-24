<template>
	<div>
		<div class="ball-container">
			<!-- 번호 볼 목록 -->
			<div class="box-area">
				<div class="box">
					<div class="ball-area">
						<ul class="ball-list">
							<li class="ball-item" v-for="number in numbers" :key="number">
								<!--<span class="ball-645" :class="'ball-'+getGroup(number)">{{ number }}</span>-->
								<div class="checkbox-area ball-645" :class="'ball-'+getGroup(number)">
									<input  type="checkbox"  :id="'ball-' + number"  :value="number"  v-model="selectedNumbers" @change="onCheckedHandler" /> 
									<label :for="'ball-' + number">{{ number }}</label>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		<div class="btn-area btn-area-center">
			<button class="btn-primary btn-small" @click="onConfirmHandler">확인</button>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import { useExceptionStore } from "@/stores/ExceptionStore";
	const emit = defineEmits(["close"]);

	// Pinia store 가져오기
	const exceptionStore = useExceptionStore();

	const props = defineProps({
		onConfirm:{
			type: Function,
			default: null
		},
	})
	

	// 번호 목록 생성 (1 ~ 45)
	const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

	// 선택된 번호를 저장하는 상태
	let selectedNumbers = ref([]);

	onMounted(() => {
		selectedNumbers.value = [...exceptionStore.numbers];
	});

	function getGroup(n) {
		// (n - 1)을 10으로 나눈 몫에 1을 더함
		return Math.floor((n - 1) / 10) + 1;
	}

	function onCheckedHandler(e){
		const _number = e.target.value;

		// if(e.target.checked){
		// 	selectedNumbers.push(_number);
		// }else{
		// 	const _index = selectedNumbers.indexOf(_number);
		// 	if (_index !== -1) {
		// 		// 인덱스를 기준으로 해당 요소 삭제
		// 		selectedNumbers.splice(_index, 1);
		// 	}
		// }
	}

	function onConfirmHandler(){
		exceptionStore.setNumbers(selectedNumbers.value); // store에 선택된 번호 저장
		if(props.onConfirm){
			props.onConfirm();
		}
		emit("close")
	}

	

</script>
