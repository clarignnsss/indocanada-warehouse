<template>
  <form @submit.prevent="submit">
    <div class="grid w-full">
      <div class="col-12 md:col-6">
        <BaseInputText
          id="companyName"
          v-model="companyRef.companyName"
          :rules="companyNameRules"
          field-name="Company Name"
        />
        <BaseInputText
          id="companyAddress"
          v-model="companyRef.companyAddress"
          :rules="companyAddressRules"
          field-name="Company Address"
        />
      </div>
      <div class="col-12 md:col-6">
        <BaseInputText
          id="companyCountry"
          v-model="companyRef.country"
          :rules="companyCountryRules"
          field-name="Company Country"
        />
        <BaseInputText
          id="companyPhoneNo"
          v-model="companyRef.phoneNo"
          :rules="companyPhoneNoRules"
          field-name="Company Phone No"
        />
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
              @click="redirectToCompanyView"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {string} from 'yup'
import { ICompany } from '~/models/Company'
import BaseInputText from '~/components/base/BaseInputText.vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import {addCompany} from '~/api/master/Company'

const company: ICompany = {
  companyId: 0,
  companyName: '',
  companyAddress: '',
  phoneNo: '',
  country: '',
  baseCurrencyId: 0,
}
const companyRef = ref(company)

const companyNameRules = string().max(50).required().label('Company Name')
const companyAddressRules = string().max(50).required().label('Company Address')
const companyPhoneNoRules = string().max(10).required().label('Company Phone No')
const companyCountryRules = string().max(20).required().label('Company Country')

const router = useRouter()
function redirectToCompanyView() {
  router.push({ name: 'Company' })
}

const { handleSubmit } = useForm<ICompany>({})
const submit = handleSubmit(async value => {

console.log(value) 
const newCompany : ICompany = {
  companyId: 0,
  companyName: value.companyName,
  companyAddress: value.companyAddress,
  phoneNo: value.phoneNo,
  country: value.country,
  baseCurrencyId: 0,
}
try {
  await addCompany(newCompany) 

  redirectToCompanyView()

}catch (err) {
  console.error(err)

}

})
</script>