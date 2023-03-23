/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { App } from 'vue'

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'

export function registerPrimeVue(app: App) {
  app.use(PrimeVue)
  
  // Register components
  app.component('Button', Button)
  app.component('Sidebar', Sidebar)
  app.component('DataTable', DataTable)
  app.component('Column', Column)
  app.component('Card', Card)
}
