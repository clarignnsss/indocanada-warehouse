<template>
  <form @submit.prevent="submit">
    <div class="grid">
      <div class="col-12 md:col-6">
        <BaseInputText
          id="currencyCode"
          v-model="currencyRef.currencyCode"
          :rules="currencyCodeRules" 
          field-name="Currency Code"
        />
      </div>
      <div class="col-12 md:col-6">
        <BaseInputText
          id="currencyName"
          v-model="currencyRef.currencyName"
          :rules="currencyNameRules" 
          field-name="Currency Name"
        />
      </div>
    </div>
    <div class="sm:flex sm:flex-row-reverse inline">
      <div class="mt-3">
        <Button
          type="submit"
          class="w-full block"
        >
          Submit
        </Button>
      </div>
      <div class="mt-3 sm:mr-2">
        <Button
          severity="secondary"
          class="w-full block"
          @click="redirectToCurrencyView"
        >
          Cancel
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { string } from 'yup'
import { ICurrency } from '~/models/Currency'
import BaseInputText from '~/components/base/BaseInputText.vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { addCurrency } from '~/api/master/Currency'

const currency: ICurrency = {
  currencyCode: '',
  currencyName: '',
  currencyId: 0,
}
const currencyRef = ref(currency)

const currencyCodeRules = string().max(5).required().label('Currency Code')
const currencyNameRules = string().max(50).required().label('Currency Name')

const router = useRouter()
function redirectToCurrencyView() {
  router.push({ name: 'Currency' })
}

const { handleSubmit } = useForm<ICurrency>({})
const submit = handleSubmit(async value => {
  // Set loading on

  // Handle action
  console.log(value)
  const newCurrency: ICurrency = {
    currencyCode: value.currencyCode,
    currencyName: value.currencyName,
    currencyId: 0
  }
  try {
    await addCurrency(newCurrency)
    
    // Show success message

    // Redirect back to list
    redirectToCurrencyView()
  } catch (err) {
    console.error(err)
  } finally {
    // Set loading off
  }
})
</script>
