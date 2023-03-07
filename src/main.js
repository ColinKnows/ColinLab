import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Locale } from 'vant';
import Vant from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css';
import './assets/main.css';

const app = createApp(App)

Locale.use('en-US', enUS);

app.use(createPinia())
app.use(router)
app.use(Vant)

app.mount('#app')
