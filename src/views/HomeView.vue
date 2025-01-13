<template>
	<div class="HomeView">
		<section class="section section-area">
			<div class="section-header">
				<h4 class="title-big">
					<strong>{{ result.drwNo }}회</strong> 당첨결과
				</h4>
				<p><span class="text-description-medium">({{ result.drwNoDate }} 추첨)</span></p>
			</div>
			<div class="section-body">
				<div class="nums">
					<!-- 당첨 번호 -->
					<div class="num-win">
						<h4 class="title-medium">당첨번호</h4>
						<div class="ball-area">
							<ul class="ball-list">
								<li class="ball-item" v-for="(number, index) in winningNumbers" :key="index">
									<span class="ball-645" :class="'ball-' + getGroup(number)">{{ number }}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 보너스 번호 -->
					<div class="num-bonus">
						<h4 class="title-medium">보너스</h4>
						<div class="ball-area">
							<ul class="ball-list">
								<li class="ball-item">
									<span class="ball-645"
										:class="'ball-' + getGroup(result.bnusNo)">{{ result.bnusNo }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section section-area fixed-bottom">
			<div class="btn-area btn-area-center">
				<button class="btn-primary btn-large" @click="goLogin" >로그인</button>
			</div>
		</section>
	</div>
</template>

<script setup>
	import {onMounted,ref,computed} from "vue";
	import {useDrwStore} from "@/stores/DrwStore";
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();

	// Pinia store 가져오기
	const drwStore = useDrwStore();

	console.log(drwStore.getNumbers())

	const result = ref(drwStore.getNumbers()[0]);

	//console.log("@@@@@@@@@@",result);

	// 당첨번호를 배열로 정리
	const winningNumbers = [
		result.value.drwtNo1,
		result.value.drwtNo2,
		result.value.drwtNo3,
		result.value.drwtNo4,
		result.value.drwtNo5,
		result.value.drwtNo6,
	];

	// 그룹(색상) 계산 함수
	function getGroup(number) {
		// (number - 1)을 10으로 나누고 1을 더해 그룹 계산
		return Math.floor((number - 1) / 10) + 1;
	}

	function goLogin(){
		router.push({ path: '/login' });
	}

</script>
