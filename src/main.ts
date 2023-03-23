import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { registerPrimeVue } from './register-components'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)
app.use(router)
registerPrimeVue(app)

app.mount('#app')
