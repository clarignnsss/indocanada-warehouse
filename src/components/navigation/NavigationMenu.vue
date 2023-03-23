<template>
  <div 
    v-for="(item, index) in items"
    :key="`${item.text}-${index}`"
  >
    <RouterLink
      active-class="text-primary font-medium"
      class="block py-2 w-full text-700 font-normal"
      :to="item.url"
    >
      <i
        :class="item.icon"
        class="w-2rem text-center"
      />
      <span class="ml-2">{{ item.text }}</span>
    </RouterLink>
    <div class="pl-5">
      <NavigationMenu
        :items="item.children"
        :icon-only="iconOnly"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { NavigationItem } from './NavigationItem';

interface NavigationProps {
  items: NavigationItem[]
  iconOnly: boolean
}

defineProps<NavigationProps>()
</script>
