<template>
	<div>
		<!-- 회차 선택 Select -->
		<article class="article-area">
			<div class="select-area">
				<label for="drwSelect" class="select-label label-big">회차 선택</label>
				<select id="drwSelect" v-model="selectedDrwNo" @change="updateResult">
					<option v-for="drw in drwList" :key="drw" :value="drw">
						{{ drw }}회
					</option>
				</select>
			</div>
		</article>
		<article class="article-area">
			<div class="recommend-list">
				<table class="table-list">
					<colgroup>
						<col style="width:20%">
						<col style="width:65%">
						<col style="width:15%">
					</colgroup>
					<thead>
						<tr>
							<th><span>회차</span></th>
							<th><span>번호</span></th>
							<th><span>결과</span></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="recommend in recommendList" :key="recommend">
							<td><span>{{ recommend.drw }}</span><span>회</span></td>
							<td>
								<div class="ball-area">
									<ul class="ball-list">
										<li class="ball-item" v-for="item in recommend.numbers" :key="item">
											<span class="ball-645 ball-645-small" :class="'ball-' + getGroup(item.number)">{{item.number}}</span>
										</li>
									</ul>
								</div>
							</td>
							<td><span>꽝</span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</article>
		
		<article class="article-area">
			<table class="table-item">
				<colgroup>
					<col style="width:20%">
					<col style="width:80%">
				</colgroup>
				<tbody>
					<tr>
						<th><span>1등</span></th>
						<td><span>{{ no1 }}</span></td>
					</tr>
					<tr>
						<th><span>2등</span></th>
						<td><span>{{ no2 }}</span></td>
					</tr>
					<tr>
						<th><span>3등</span></th>
						<td><span>{{ no3 }}</span></td>
					</tr>
					<tr>
						<th><span>4등</span></th>
						<td><span>{{ no4 }}</span></td>
					</tr>
					<tr>
						<th><span>5등</span></th>
						<td><span>{{ no5 }}</span></td>
					</tr>
					<tr>
						<th><span>꽝</span></th>
						<td><span>{{ no6 }}</span></td>
					</tr>
				</tbody>
			</table>
		</article>

		<div class="btn-area btn-area-center">
			<button class="btn-primary btn-small" @click="$emit('close')">닫기</button>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import { useRecommendStore } from "@/stores/RecommendStore";
	import { useDrwStore } from "@/stores/DrwStore";

	// 회차 정보
	const drwStore = useDrwStore();
	// 마지막 회차 번호
	const _lastDrwNumber = Number(drwStore.numbers[0].drwNo);

	// 선택된 회차 (기본값은 최신 회차로 설정)
	const selectedDrwNo = ref(drwStore.numbers[0] ?.drwNo);

	// 추천(뽑기)번호 정보
	const recommendStore = useRecommendStore();
	// 추천(뽑기)회차 리스트
	const drwList = ref(recommendStore.getDrwList());
	// 추천(뽑기)번호 리스트
	const recommendList = ref(recommendStore.getRecommends());

	const no1 = ref(0);
	const no2 = ref(0);
	const no3 = ref(0);
	const no4 = ref(0);
	const no5 = ref(0);
	const no6 = ref(0);

	console.log("####### 회차 리스트",drwList)

	// 번호 그룹 계산 함수
	function getGroup(n) {
		return Math.floor((n - 1) / 10) + 1;
	}

	// 회차 변경 시 결과 업데이트
	function updateResult() {
		console.log("##### 회차 변경 시 결과 업데이트 :", selectedDrwNo.value);
		const _list = recommendStore.getRecommends(selectedDrwNo.value);
		_list.forEach(item => {
			const _drw = item.drw;
			const _numbers = item.numbers;
			let _cnt = 0;
			_numbers.forEach(numberObj =>{
				const _matching = checkMatching('1153',numberObj.number);
				numberObj.matching = _matching;
				if(_matching){
					_cnt++;
				}
			});
			if( _cnt === 3){
				no5.value++;
			} else if( _cnt === 4){
				no4.value++;
			} else if( _cnt === 5){
				no3.value++;
			} else if( _cnt === 6){
				no1.value++;
			} else{
				no6.value++;
			}
		});
		recommendList.value = recommendStore.getRecommends(selectedDrwNo.value);
	}

	function checkMatching(drw,number){
		try{
			const _drwNo = drwStore.getDrwNo(drw);
			const _numbers = [
				Number(_drwNo.drwtNo1),
				Number(_drwNo.drwtNo2),
				Number(_drwNo.drwtNo3),
				Number(_drwNo.drwtNo4),
				Number(_drwNo.drwtNo5),
				Number(_drwNo.drwtNo6),
			]
			if(_numbers.includes(number)){
				return true;
			}
			else{
				return false;
			}
		}catch(e){
			return null;
		}
	}

	onMounted(() => {
		
	});
</script>

<style scoped>
</style>
