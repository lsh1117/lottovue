<template>
	<div class="ContactView">
		<section class="section section-area">
			<div class="section-header">
				<h4 class="title-big">고정번호</h4>
			</div>
			<div class="section-body">
				<div class="box-area">
					<div class="box box-round-bg">
						<div class="ball-area">
							<ul class="ball-list">
								<li class="ball-item" v-for="number in fixedNumbers" :key="number">
									<span class="ball-645" :class="'ball-'+getGroup(number)">{{ number }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="section-footer">
				<div class="btn-area btn-area-center">
					<button class="btn-primary btn-small"  @click="openFixedPopup">변경</button>
					<button class="btn-primary btn-small"  @click="openFixedRecommendPopup">추천 고정번호</button>
				</div>
			</div>
		</section>

		<section class="section section-area">
			<div class="section-header">
				<h4 class="title-big">제외번호</h4>
			</div>
			<div class="section-body">
				<div class="box-area">
					<div class="box box-round-bg">
						<div class="ball-area">
							<ul class="ball-list">
								<li class="ball-item" v-for="number in exceptionNumbers" :key="number">
									<span class="ball-645" :class="'ball-'+getGroup(number)">{{ number }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="section-footer">
				<div class="btn-area btn-area-center">
					<button class="btn-primary btn-small" @click="openExceptionPopup">변경</button>
					<button class="btn-primary btn-small" @click="openExceptionRecommendPopup">추천 제외번호</button>
				</div>
			</div>
		</section>
		<section class="section section-area fixed-bottom">
			<div class="btn-area btn-area-center">
				<button class="btn-primary btn-large" >번호뽑기</button>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import { useEventStore } from '@/stores/EventStore';
	import { useExceptionStore } from "@/stores/ExceptionStore";
	import { useFixedStore } from "@/stores/FixedStore";

	const eventStore = useEventStore();
	const exceptionStore = useExceptionStore();
	const fixedStore = useFixedStore();
	
	// 제외 번호
	let exceptionNumbers = ref([]);
	
	// 제외번호 팝업 호출
	function openExceptionPopup() {
		console.log("제외번호 변경");
		eventStore.emit('popup',{
			id:"exception",
			title:"제외번호1",
			onConfirm:onExceptionPopupConfirm,
			onClose:onExceptionPopupClose,
		});
	}

	// 제외번호 확인 핸들러.
	function onExceptionPopupConfirm(e){
		exceptionNumbers.value = [...exceptionStore.numbers];
		console.log("제외번호 확인 핸들러 :",e);
	}

	// 제외번호 닫기 핸들러.
	function onExceptionPopupClose(e){
		console.log("제외번호 닫기 핸들러 :",e);
	}

	// 추천 제외번호 팝업 호출
	function openExceptionRecommendPopup() {
		console.log("추천 제외번호 보기");
		eventStore.emit('popup',{
			id:"exceptionRecommend",
			title:"추천 제외번호 보기",
			onClose:onExceptionRecommendPopupClose,
		});
	}

	// 추천 제외번호 닫기 핸들러.
	function onExceptionRecommendPopupClose(e){
		console.log("추천 제외번호 닫기 핸들러 :",e);
	}

	// 고정번호
	let fixedNumbers = ref([]);
	
	// 고정번호 팝업 호출
	function openFixedPopup() {
		console.log("고정번호 변경");
		eventStore.emit('popup',{
			id:"fixed",
			title:"고정번호",
			onConfirm:onFixedPopupConfirm,
			onClose:onFixedPopupClose,
		});
	}

	// 고정번호 확인 핸들러.
	function onFixedPopupConfirm(e){
		fixedNumbers.value = [...fixedStore.numbers];
		console.log("고정번호 확인 핸들러 :",e);
	}

	// 고정번호 닫기 핸들러.
	function onFixedPopupClose(e){
		console.log("고정번호 닫기 핸들러 :",e);
	}

	// 추천 고정번호 팝업 호출
	function openFixedRecommendPopup() {
		console.log("추천 고정번호 보기");
		eventStore.emit('popup',{
			id:"fixedRecommend",
			title:"추천 고정번호 보기",
			onClose:onFixedRecommendPopupClose,
		});
	}

	// 추천 고정번호 닫기 핸들러.
	function onFixedRecommendPopupClose(e){
		console.log("추천 고정번호 닫기 핸들러 :",e);
	}

	function getGroup(n) {
		// (n - 1)을 10으로 나눈 몫에 1을 더함
		return Math.floor((n - 1) / 10) + 1;
	}

	onMounted(() => {
		exceptionNumbers.value = [...exceptionStore.numbers];
		fixedNumbers.value = [...fixedStore.numbers];
	});
</script>
