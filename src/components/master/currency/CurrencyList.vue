<template>
  <DataTable
    :value="items"
  >
    <Column 
      field="CurrencyCode"
      header="Currency Code"
      class="white-space-nowrap"
      style="min-width: 15rem;"
    />
    <Column 
      field="CurrencyName"
      header="Name"
      class="white-space-nowrap"
      style="min-width: 20rem;"
    />
  </DataTable>
</template>

<script setup lang="ts">
import { ICurrency } from '~/models/Currency'

interface Props {
  items: ICurrency[]
}
defineProps<Props>()
</script>
