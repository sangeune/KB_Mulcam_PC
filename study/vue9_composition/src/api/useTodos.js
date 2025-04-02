import axios from 'axios'
import { ref } from 'vue'
const API_URL = 'http://localhost:5000/todos'

export const useTodos = () => {
  const todos = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchTodos = async () => {
    loading.value = true
    error.value = null

    // 데이터 가져오기
    try {
      // 지연상태 확인
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })

      const response = await axios.get(API_URL)
      console.log('response---', response)
      todos.value = response.data
    } catch (err) {
      error.value = err.message || '데이터 요청 중 에러'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  // 데이터 등록하기
  const addTodo = async newTodo => {
    try {
      const response = await axios.post(API_URL, newTodo)
      console.log('response---', response)
      todos.value.push(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  // todo 항목 업데이트
  const updateTodo = async updateTodo => {
    try {
      const response = await axios.post(
        `${API_URL}/${updateTodo.id}`,
        updatedTodo,
      )
      console.log('response---', response)
      if (index === -1) todos.value[index] = updatedTodo.id
    } catch (err) {
      console.log(err)
    }
  }
  // todo 리스트 삭제하기
  const deleteTodo = async todoID => {
    try {
      await axios.delete(`${API_URL}/${todoId}`, updatedTodo)
      console.log('response---', response)
      if (index === -1) todos.value[index] = updatedTodo.id
    } catch (error) {}
  }

  return { todos, loading, error, fetchTodos, addTodo, updateTodo, deleteTodo }
}
