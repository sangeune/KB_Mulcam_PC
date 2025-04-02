<script setup>
import FilterContainer from './components/FilterContainer.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import InputContainer from './components/InputContainer.vue'
import TodoItem from './components/TodoItem.vue'
import SummaryContainer from './components/SummaryContainer.vue'

import { onMounted } from 'vue'
import { useTodos } from './api/useTodos'
const { todos, loading, error, fetchTodos, addTodo, updateTodo } = useTodos()

onMounted(() => {
  fetchTodos()
})
function handleaddTodo(newTodo) {
  addTodo(newTodo)
}
function handleUpdateTodo(updatedTodo) {
  addTodo(newTodo)
}
console.log('App ---', loading.value, error.value)
</script>

<template>
  <HeaderLayout />
  <InputContainer @add-todo="handleaddTodo" />
  <FilterContainer />
  <div v-if="loading">로딩중...</div>
  <div v-else-if="error">
    <p>에러 {{ error }}</p>
    <button @click="fetchTodos">새로고침</button>
  </div>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @update:todo="handleupdateTodo"
    />
  </ul>
  <SummaryContainer />
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
