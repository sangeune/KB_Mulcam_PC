<script setup>
import PostCard from '@/components/PostCard.vue'

import { onMounted } from 'vue'
import { usePostStore } from '@/stores/postStore'

const postStore = usePostStore()

onMounted(() => {
  postStore.fetchPosts()
})
</script>

<template>
  <section class="container postslist">
    <h2>글목록</h2>

    <div v-if="postStore.loading" class="loading">게시물을 불러오는 중...</div>

    <div v-else-if="postStore.error" class="error">{{ postStore.error }}</div>

    <div v-else class="postsContainer">
      <div v-if="postStore.posts.length === 0" class="no-posts">
        게시물이 없습니다.
      </div>
      <PostCard
        v-for="post in postStore.getSortedPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </section>
</template>
<style>
.postsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
}
</style>
