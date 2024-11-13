<!-- src/pages/Home.vue -->
<template>
  <div>
    <h1>홈페이지</h1>
    <p>여기는 홈페이지 내용입니다.</p>
    <button class="btn-primary" @click="goGameResult">회차별 당첨번호 보기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Vue Router 인스턴스를 가져오기
const router = useRouter()

// 예시 상태와 로직 정의 (Composition API)
const message = ref('홈페이지에 오신 것을 환영합니다!');

function goGameResult(e){
  router.push('/gameResult')
}
</script>
