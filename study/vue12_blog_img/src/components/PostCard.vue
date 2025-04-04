<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const postStore = usePostStore()

const goDetail = () => {
  // router.push(`/post/${props.post.id}`)
  router.push({ name: 'PostDetail', params: { postId: props.post.id } })
}
</script>

<template>
  <div class="PostCard" @click="goDetail">
    <!-- 썸네일 이미지 표시 영역 추가 -->
    <div class="card-container">
      <div v-if="post.imageUrl" class="thumbnail">
        <img :src="post.imageUrl" alt="썸네일" />
      </div>
      <div class="card-content">
        <p>{{ post.title }}</p>
        <span>{{ postStore.formatDate(post.createdAt) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.PostCard {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;
}
.PostCard:hover {
  background-color: #e9e9e9;
}
.card-container {
  position: relative;
  padding-top: 100%;
}
/* 썸네일 스타일 추가 */
.thumbnail {
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 50px);
  margin-right: 1em;
  overflow: hidden;
  border-radius: 4px;
  flex-shrink: 0;
}
.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-content {
  position: absolute;
  top: calc(100% - 40px);
  width: 100%;
}
.card-content p {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 0.25rem;
}
.card-content span {
  color: #666;
  font-size: 0.75em;
}
</style>
