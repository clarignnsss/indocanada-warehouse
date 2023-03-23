<template>
  <div class="flex h-4rem card-containter py-2 px-3 shadow-1">
    <Sidebar 
      v-model:visible="visible"
      class="sidebar"
    >
      <NavigationMenu
        :items="itemsRef"
        :icon-only="false"
      />
    </Sidebar>
    <Button 
      icon="pi pi-bars" 
      rounded
      text
      severity="secondary"
      aria-label="Side Menu"
      @click="visible = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationMenu from './NavigationMenu.vue';
import { items } from './NavigationItem';

const visible = ref(false)
const itemsRef = ref(items)
</script>

<style scoped>

</style>
