<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import { useToastStore } from '@/stores/toastStore'

const router = useRouter()
const postStore = usePostStore()
const toastStore = useToastStore()

const title = ref('')
const content = ref('')
const imageFile = ref(null) // 이미지 파일 참조 추가
const imagePreview = ref('') // 이미지 미리보기 URL 참조 추가
const isSubmitting = ref(false)

// 이미지 파일 변경 시 처리 함수
const handleImageChange = event => {
  const file = event.target.files[0]
  if (!file) {
    imageFile.value = null
    imagePreview.value = ''
    return
  }

  // 파일 크기 제한 (5MB)
  if (file.size > 5 * 1024 * 1024) {
    toastStore.showToast('이미지 크기는 5MB 이하여야 합니다.', 'error')
    event.target.value = '' // 파일 입력 초기화
    return
  }

  // 이미지 파일 타입 검증
  if (!file.type.match('image.*')) {
    toastStore.showToast('이미지 파일만 첨부할 수 있습니다.', 'error')
    event.target.value = '' // 파일 입력 초기화
    return
  }

  imageFile.value = file

  // 이미지 미리보기 생성
  const reader = new FileReader()
  reader.onload = e => {
    imagePreview.value = e.target.result
  }
  reader.readAsDataURL(file)
}

const handleSubmit = async () => {
  if (!title.value.trim()) {
    toastStore.showToast('제목을 입력해주세요.', 'error')
    return
  }

  if (!content.value.trim()) {
    toastStore.showToast('내용을 입력해주세요.', 'error')
    return
  }

  isSubmitting.value = true

  try {
    const postData = {
      title: title.value,
      content: content.value,
      imageFile: imageFile.value, // 이미지 파일 추가
    }

    await postStore.createPost(postData)

    toastStore.showToast('게시물이 성공적으로 등록되었습니다.', 'success')

    router.push({ name: 'postsList' })
  } catch (error) {
    const errorMsg = error.message || '게시물 등록에 실패했습니다.'
    toastStore.showToast(errorMsg, 'error')
  } finally {
    isSubmitting.value = false
  }
}

const handleReset = () => {
  title.value = ''
  content.value = ''
  imageFile.value = null
  imagePreview.value = ''
  // input file 요소 초기화를 위한 참조
  const fileInput = document.getElementById('imageInput')
  if (fileInput) fileInput.value = ''
}

const goToList = () => {
  router.push({ name: 'postsList' })
}
</script>
<template>
  <section class="container postwrite">
    <h2>글쓰기 페이지</h2>

    <form @submit.prevent="handleSubmit">
      <label for="title">제목</label>
      <input
        type="text"
        id="title"
        placeholder="제목을 입력하세요"
        v-model="title"
      />

      <label for="content">내용</label>
      <textarea id="content" v-model="content"></textarea>

      <!-- 이미지 업로드 필드 추가 -->
      <label for="imageInput">이미지 첨부</label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        @change="handleImageChange"
      />

      <!-- 이미지 미리보기 영역 추가 -->
      <div v-if="imagePreview" class="image-preview">
        <h3>이미지 미리보기</h3>
        <img :src="imagePreview" alt="미리보기" />
      </div>

      <div class="btns-group">
        <button type="button" @click="goToList">글목록</button>
        <button type="button" @click="handleReset">초기화</button>
        <button type="submit" class="point" :disabled="isSubmitting">
          {{ isSubmitting ? '등록 중...' : '글작성' }}
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.postwrite form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 이미지 미리보기 스타일 추가 */
.image-preview {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}

.image-preview h3 {
  font-size: 0.9em;
  margin-bottom: 10px;
  color: #666;
}

.image-preview img {
  max-width: 100%;
  max-height: 300px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
}
</style>
