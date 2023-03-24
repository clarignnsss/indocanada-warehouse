<template>
  <div class="text-left">
    <span class="p-float-label mt-3">
      <InputText 
        :id="id"
        v-model="value"
        class="w-full"
      />
      <label :for="id">{{ fieldName }}</label>
    </span>
    <small 
      id="text-error" 
      class="p-error"
    >
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { Schema } from 'yup'

interface Props {
  id: string
  fieldName: string
  rules: Schema
}
const props = defineProps<Props>()

const { errorMessage, value } = useField<string>(props.id, props.rules)
</script>

<style scoped>
.p-float-label input:focus ~ label {
  left: 0rem;
}
</style>
