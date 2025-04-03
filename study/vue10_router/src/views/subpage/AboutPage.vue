<script setup></script>

<template>
  <article class="AboutPage">
    <h3>about page</h3>
    <p>fullPath :{{ $route.fullPath }}</p>
    <p>path : {{ $route.path }}</p>
    <p>name: {{ $route.name }}</p>
    <p>params {{ $route.params }}</p>
  </article>
</template>

<style scoped>
.AboutPage {
}
</style>
