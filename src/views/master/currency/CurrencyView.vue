<template>
  <div class="card">
    <div class="flex align-items-center justify-content-between">
      <h2>Currency</h2>
      <div class="flex align-right">
        <Button
          @click="redirectToAddCurrency"
        >
          <i class="fa-solid fa-plus" />
          <span class="ml-2">Add</span>
        </Button>
      </div>
    </div>
    <CurrencyList :items="currenciesRef" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import CurrencyList from '~/components/master/currency/CurrencyList.vue'
import { ICurrency } from '~/models/Currency'

const currenciesRef = ref([] as ICurrency[])
const router = useRouter()

function redirectToAddCurrency() {
  router.push({ name: 'CurrencyAdd' })
}

onMounted(() => {
  // Load currencies here
  const currencies: ICurrency[] = [
    {
      Id: 1,
      CurrencyCode: 'CAD',
      CurrencyName: 'Canadian Dollar',
    },
    {
      Id: 2,
      CurrencyCode: 'USD',
      CurrencyName: 'US Dollar',
    },
  ]
  currenciesRef.value = currencies
})
</script>
