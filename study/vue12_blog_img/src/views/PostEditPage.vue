<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import { useToastStore } from '@/stores/toastStore'

const router = useRouter()
const route = useRoute()
const postStore = usePostStore()
const toastStore = useToastStore()

const postId = route.params.postId
const title = ref('')
const content = ref('')
const imageFile = ref(null) // 이미지 파일 참조 추가
const imagePreview = ref('') // 이미지 미리보기 URL 참조 추가
const isSubmitting = ref(false)
const isLoading = ref(true)
const postExists = ref(true)
const originalPost = ref(null) // 원본 게시물 데이터 저장

const loadPost = async () => {
  try {
    isLoading.value = true
    const post = await postStore.getPostById(postId)

    if (!post) {
      postExists.value = false
      toastStore.showToast('존재하지 않는 게시물입니다.', 'error')
      return false
    }

    // 원본 게시물 데이터 저장
    originalPost.value = { ...post }

    title.value = post.title
    content.value = post.content

    // 기존 이미지가 있으면 미리보기에 표시
    if (post.imageUrl) {
      imagePreview.value = post.imageUrl
    }

    return true
  } catch (error) {
    postExists.value = false
    const errorMsg = error.message || '게시글을 불러오는데 실패했습니다.'
    toastStore.showToast(errorMsg, 'error')
    return false
  } finally {
    isLoading.value = false
  }
}

onMounted(loadPost)

// 이미지 파일 변경 시 처리 함수
const handleImageChange = event => {
  const file = event.target.files[0]
  if (!file) {
    imageFile.value = null
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

// 이미지 제거 함수
const removeImage = () => {
  imageFile.value = null
  imagePreview.value = ''
  // 이미지를 제거한다는 의미의 특수 값 설정
  // null은 "변경 안함"을 의미하고, '' 빈 문자열은 "이미지 제거"를 의미
  imageFile.value = ''

  // input file 요소 초기화
  const fileInput = document.getElementById('imageInput')
  if (fileInput) fileInput.value = ''
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
    }

    // 이미지 파일이 있거나 명시적으로 제거하기로 한 경우에만 포함
    if (imageFile.value !== null) {
      postData.imageFile = imageFile.value
    }

    await postStore.updatePost(postId, postData)

    toastStore.showToast('게시물이 성공적으로 수정되었습니다.', 'success')

    router.push({ name: 'PostDetail', params: { postId } })
  } catch (error) {
    const errorMsg = error.message || '게시물 수정에 실패했습니다.'
    toastStore.showToast(errorMsg, 'error')
  } finally {
    isSubmitting.value = false
  }
}

const handleReset = async () => {
  if (originalPost.value) {
    title.value = originalPost.value.title
    content.value = originalPost.value.content
    imageFile.value = null

    // 원본 이미지로 되돌리기
    imagePreview.value = originalPost.value.imageUrl || ''

    // input file 요소 초기화
    const fileInput = document.getElementById('imageInput')
    if (fileInput) fileInput.value = ''
  } else {
    await loadPost()
  }

  toastStore.showToast('내용이 초기화되었습니다.', 'info')
}

const goToList = () => {
  router.push({ name: 'postsList' })
}
</script>
<template>
  <section class="container postedit">
    <h2>글 수정 페이지</h2>

    <div v-if="isLoading" class="loading">게시글 로딩 중...</div>

    <form v-else @submit.prevent="handleSubmit">
      <label for="title">제목</label>
      <input
        type="text"
        id="title"
        v-model="title"
        placeholder="제목을 입력하세요"
      />

      <label for="content">내용</label>
      <textarea id="content" v-model="content" rows="10"></textarea>

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
        <button type="button" class="remove-image" @click="removeImage">
          이미지 제거
        </button>
      </div>

      <div class="btns-group">
        <button type="button" @click="goToList">글목록</button>
        <button type="button" @click="handleReset">초기화</button>
        <button type="submit" :disabled="isSubmitting" class="point">
          {{ isSubmitting ? '수정 중...' : '수정완료' }}
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.postedit form {
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
  position: relative;
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
  margin: 0 auto 10px;
  border-radius: 5px;
}

.remove-image {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8em;
  margin: 0 auto;
  display: block;
}

.remove-image:hover {
  background-color: #bd2130;
}
</style>
