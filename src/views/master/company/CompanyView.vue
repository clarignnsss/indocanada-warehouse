<template>
  <div class="card">
    <div class="flex align-items-center justify-content-between">
      <h2>Company</h2>
      <div class="flex align-right">
        <Button @click="redirectToAddCompany">
          <i class="fa-solid fa-plus" />
          <span class="ml-2">Add</span>
        </Button>
      </div>
    </div>
    <CompanyList :items="companiesRef" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ICompany } from '~/models/Company'
import CompanyList from '~/components/master/company/CompanyList.vue'
import { useRouter } from 'vue-router'
import { getCompanies } from '~/api/master/Company'

const companiesRef = ref([] as ICompany[])
const router = useRouter()

function redirectToAddCompany() {
  router.push({ name: 'CompanyAdd' })
}

onMounted(async() => {
  // Load companies here
  const companies= await getCompanies() 
  companiesRef.value = companies
})
</script>
