import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupGlobComponents } from './components'
import { setupGlobDirectives } from './directives'

import { httpService } from '@/utils/httpService'
import 'amfe-flexible'
import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)
// Configure store
setupStore(app);
// Configure routing
setupRouter(app);
// Configure components
setupGlobComponents(app);
setupGlobDirectives(app);
app.provide('testa','123')
app.provide('$httpService',httpService)
app.config.globalProperties.$httpService = httpService

app.mount('#app')
