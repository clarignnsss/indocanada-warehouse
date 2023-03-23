<template>
  <div class="card">
    <h2>Company</h2>
    <CompanyList :items="companiesRef" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ICompany } from '~/models/Company'
import CompanyList from '~/components/master/company/CompanyList.vue'

const companiesRef = ref([] as ICompany[])

onMounted(() => {
  // Load companies here
  const companies: ICompany[] = [
    {
      baseCurrencyId: 1,
      companyAddress: '8 Cantertrot Crt\nThornhill, ON L4J 7X7',
      companyId: 1,
      companyName: 'IndoCanada Marketing Inc.',
      country: 'Canada',
      phoneNo: '+1(647) 547-3929',
    },
  ]
  companiesRef.value = companies
})
</script>
