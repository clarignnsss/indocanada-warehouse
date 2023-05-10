<template>
  <div class="container">
    <div class="card">
        <input type="text" placeholder="Username"> 
        <input type="password" placeholder="Password"> 
        <input type="text" placeholder="Login">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('') no-repeat center;
    background-size: cover;
}

/* .card {
    
} */

.read-the-docs {
  color: #888;
}
</style>
