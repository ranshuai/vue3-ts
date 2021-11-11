import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupGlobComponents } from './components'

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

app.mount('#app')
