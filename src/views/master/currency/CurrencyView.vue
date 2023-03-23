<template>
  <div class="card">
    <h2>Currency</h2>
    <CurrencyList :items="currenciesRef" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CurrencyList from '~/components/master/currency/CurrencyList.vue';
import { ICurrency } from '~/models/Currency';

const currenciesRef = ref([] as ICurrency[])

onMounted(() => {
  // Load currencies here
  const currencies: ICurrency[] = [
    {
      id: 1,
      currencyCode: 'CAD',
      currencyName: 'Canadian Dollar',
    },
    {
      id: 2,
      currencyCode: 'USD',
      currencyName: 'US Dollar',
    },
  ]
  currenciesRef.value = currencies
})
</script>
