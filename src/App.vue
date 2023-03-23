<template>
  <div class="flex flex-column min-h-screen">
    <TopNavigation />
    <RouterView />
  </div>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import TopNavigation from './components/navigation/TopNavigation.vue'
</script>

<style scoped>
</style>
