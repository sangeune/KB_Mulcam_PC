import { defineStore } from 'pinia'
import axios from 'axios'
import { useToastStore } from './toastStore'

const API_URL = 'http://localhost:5500/posts'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),
  getters: {
    getSortedPosts: state => {
      return [...state.posts].sort((a, b) => b.createdAt - a.createdAt)
    },
  },
  actions: {
    async fetchPosts() {
      const toastStore = useToastStore()
      this.posts = []
      this.loading = true
      this.error = null

      try {
        const response = await axios.get(API_URL)
        this.posts = response.data
      } catch (error) {
        this.error = error.message || '게시물을 불러오는데 실패했습니다.'
        toastStore.showToast(this.error, 'error')
      } finally {
        this.loading = false
      }
    },

    async getPostById(id) {
      const toastStore = useToastStore()
      try {
        const response = await axios.get(`${API_URL}/${id}`)
        return response.data
      } catch (error) {
        const errorMsg = `게시물(ID: ${id})을 불러오는데 실패했습니다.`
        toastStore.showToast(errorMsg, 'error')
        throw error
      }
    },

    formatDate(timestamp) {
      const date = new Date(parseInt(timestamp))
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')

      return `${year}. ${month}. ${day}`
    },

    // 이미지를 Base64로 변환하는 함수 추가
    async convertImageToBase64(file) {
      return new Promise((resolve, reject) => {
        if (!file) {
          resolve(null)
          return
        }

        // 파일 크기 제한 (5MB)
        if (file.size > 5 * 1024 * 1024) {
          reject(new Error('이미지 크기는 5MB 이하여야 합니다.'))
          return
        }

        // 이미지 파일 타입 검증
        if (!file.type.match('image.*')) {
          reject(new Error('이미지 파일만 첨부할 수 있습니다.'))
          return
        }

        const reader = new FileReader()
        reader.onload = e => resolve(e.target.result)
        reader.onerror = e => reject(e)
        reader.readAsDataURL(file)
      })
    },

    async createPost(postData) {
      const toastStore = useToastStore()
      this.loading = true
      this.error = null

      try {
        // imageFile이 postData에 포함되어 있으면 Base64로 변환
        let imageUrl = null
        if (postData.imageFile) {
          imageUrl = await this.convertImageToBase64(postData.imageFile)
        }

        const newPost = {
          ...postData,
          imageUrl, // 이미지 URL(Base64) 추가
          createdAt: Date.now().toString(),
        }

        // imageFile 속성 제거 (파일 객체는 JSON으로 직렬화할 수 없음)
        delete newPost.imageFile

        const response = await axios.post(API_URL, newPost)
        this.posts.push(response.data)
        return response.data
      } catch (error) {
        this.error = error.message || '게시물 등록에 실패했습니다.'
        toastStore.showToast(this.error, 'error')
        throw error
      } finally {
        this.loading = false
      }
    },

    async updatePost(id, postData) {
      const toastStore = useToastStore()
      this.loading = true
      this.error = null

      try {
        const existingPost = await this.getPostById(id)

        // imageFile이 postData에 포함되어 있으면 Base64로 변환
        let imageUrl = existingPost.imageUrl // 기존 이미지 URL 유지
        if (postData.imageFile) {
          imageUrl = await this.convertImageToBase64(postData.imageFile)
        }

        const updatedPostData = {
          ...existingPost,
          ...postData,
          imageUrl, // 이미지 URL 설정
          createdAt: existingPost.createdAt, // 원래 생성 날짜를 보존
        }

        // imageFile 속성 제거
        delete updatedPostData.imageFile

        const response = await axios.put(`${API_URL}/${id}`, updatedPostData)

        const index = this.posts.findIndex(post => post.id == id)
        if (index !== -1) {
          this.posts[index] = response.data
        }

        return response.data
      } catch (error) {
        this.error = error.message || '게시물 수정에 실패했습니다.'
        toastStore.showToast(this.error, 'error')
        throw error
      } finally {
        this.loading = false
      }
    },

    async deletePost(id) {
      const toastStore = useToastStore()
      this.loading = true
      this.error = null

      try {
        await axios.delete(`${API_URL}/${id}`)
        this.posts = this.posts.filter(post => post.id != id)

        return true
      } catch (error) {
        this.error = error.message || '게시물 삭제에 실패했습니다.'
        toastStore.showToast(this.error, 'error')
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
