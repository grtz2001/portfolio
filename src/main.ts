import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { PortfolioPreset } from './theme'

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: PortfolioPreset,
      options: {
        // Keep PrimeVue's generated CSS out of the way of our own styles.
        darkModeSelector: '.app-dark',
        cssLayer: {
          name: 'primevue',
          order: 'primevue',
        },
      },
    },
  })
  .mount('#app')
