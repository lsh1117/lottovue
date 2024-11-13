<!-- src/pages/Home.vue -->
<template>
  <div>
    <h1>홈페이지</h1>
    <p>여기는 홈페이지 내용입니다.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 예시 상태와 로직 정의 (Composition API)
const message = ref('홈페이지에 오신 것을 환영합니다!')
</script>
