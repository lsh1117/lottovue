<template>
	<div>
		<div class="text-area">
			<p v-for="message in messages" :key="message">
				<span class="text-normal">{{ message }}</span>
			</p>
		</div>
		<div class="btn-area btn-area-center">
			<button class="btn-primary btn-small" @click="$emit('close')">닫기</button>
		</div>
	</div>
</template>

<script setup>
	import {onMounted,ref,computed} from "vue";
	import {useFixedStore} from "@/stores/FixedStore";
	import {useDrwStore} from '@/stores/DrwStore';

	// Pinia store 가져오기
	const drwStore = useDrwStore();
	const messages = ref([]);

	onMounted(()=>{
		const _message1 = getAppearInSuccessionUntil();
		if(_message1){
			messages.value.push(_message1);
		}

		const _message2 = getLastAppear();
		if(_message2){
			messages.value.push(_message2);
		}
	});
	
	// 연속 등장 횟수 분석
	function getAppearInSuccessionUntil(){
		// 연속 등장 횟수 계산
		const appearInSuccessionUntil = drwStore.getAppearInSuccessionUntil(drwStore.numbers);
		appearInSuccessionUntil.sort((a, b) => b.count - a.count);
		// 연속 3회 이상 등장한 한 번호 모음
		let thirdAppears = [];
		appearInSuccessionUntil.forEach((item) => {
			if(item.count > 1){
				thirdAppears.push(item.number);
			}
		});

		if(thirdAppears.length > 0){
			const _message = thirdAppears.join() + " 번호는 최근 2번 이상 연속으로 나온 번호로 2번이상 나올 확률은 극히 낮은 확률 입니다.";
			return _message;
		}
		else{
			return null;
		}
	}

	// 최근 100 회 등장 횟수 분석
	function getLastAppear(){
		// 최근 100 회 데이터
		let _max = {count:0};
		let _min = {count:100};

		for( let i=0;i<100;i++){
			let startIndex = (drwStore.numbers.length - 1) - (100+i);
			let endIndex = startIndex + 100;
			let _lastNumbers = drwStore.numbers.slice(startIndex,endIndex);

			const _totalAppear = drwStore.getTotalAppear(_lastNumbers);
			_totalAppear.sort((a, b) => b.count - a.count);

			if(Number(_max.count) < Number(_totalAppear[0].count)){
				_max = _totalAppear[0];
			}

			if(Number(_min.count) > Number(_totalAppear[44].count)){
				_min = _totalAppear[44];
			}

			console.log("startIndex : ",startIndex, ", endIndex : ", endIndex)
			console.log("##########", _totalAppear.length ,_totalAppear[0]);
			console.log("##########",_totalAppear[44]);
		}

		console.log("#### _max :", _max);
		console.log("#### _min :", _min);
		/*
		// 최근 100 회 등장 정보
		const _totalAppear = drwStore.getTotalAppear(_lastNumbers);
		if(_totalAppear){
			_totalAppear.sort((a, b) => b.count - a.count);
			console.log(_totalAppear)
			return "_totalAppear";
		}
		else {
			null;
		}
			*/
	}

</script>

<style scoped>
</style>
