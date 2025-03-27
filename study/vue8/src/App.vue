<script>
import Lesson1Parent from './lesson1/Lesson1Parent.vue'

export default {
  name: 'App',
  components: { Lesson1Parent },
}
</script>

<template>
  <div class="app">
    <h1>app 영역</h1>
    <Lesson1Parent />
  </div>
</template>

<style scoped>
.app {
  border: 1px solid red;
  padding: 1rem;
  margin: 1rem;
}
</style>
