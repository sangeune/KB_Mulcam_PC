<script>
export default {
  name: 'Lesson1Parent',
  data() {
    return {}
  },
}
</script>

<template>
  <div class="lesson1parent">
    <h1>컴포넌트 분리-lesson1Parent</h1>
    <label for="">이름</label> : <input type="text" />
  </div>
</template>

<style scoped>
.lesson1parent {
  border: 1px solid lightgreen;
  padding: 1rem;
}
</style>
