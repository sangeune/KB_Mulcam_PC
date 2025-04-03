<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <div>페이지가 전환되는 곳</div>
  <RouterView />
  <TheFooter />
</template>

<style scoped>
.App {
}
</style>
