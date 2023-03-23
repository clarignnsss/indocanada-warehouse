import { App } from 'vue';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

export function registerPrimeVue(app: App) {
  app.use(PrimeVue)
  
  // Register components
  app.component('Button', Button)
  app.component('Sidebar', Sidebar)
}
