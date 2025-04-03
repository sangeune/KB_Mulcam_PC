<script setup></script>

<template>
  <section class="IntroPage">
    <h2>Intro 페이지</h2>
    <nav>
      <RouterLink to="/intro/about">서브메뉴1</RouterLink>
      <RouterLink to="/intro/transManagement">서브메뉴2</RouterLink>
      <!-- <RouterLink to="/">서브메뉴3</RouterLink>
      <RouterLink to="/">서브메뉴4</RouterLink> -->
    </nav>
  </section>
  <RouterView />
</template>

<style scoped>
.IntroPage a {
  display: inline-block;
  padding: 1em;
}
</style>
