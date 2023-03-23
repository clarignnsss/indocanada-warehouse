<template>
  <DataTable
    :value="items"
    table-class=""
  >
    <Column 
      field="companyName"
      header="Company Name"
      class="white-space-nowrap"
      style="min-width: 15rem;"
    />
    <Column 
      field="companyAddress"
      header="Address"
      class="pre-line"
      style="min-width: 20rem;"
    />
    <Column 
      field="country"
      header="Country"
      class="white-space-nowrap"
      style="min-width: 10rem;"
    />
    <Column 
      field="phoneNo"
      header="Phone No."
      class="white-space-nowrap"
      style="min-width: 10rem;"
    />
  </DataTable>
</template>

<script setup lang="ts">
import { ICompany } from '~/models/Company'

interface Props {
  items: ICompany[]
}
defineProps<Props>()
</script>
