import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant';
// import axios from 'axios';
// import {animate } from 'Animate'

import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

import './assets/main.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Vant)
// app.use(axios)
// app.use(animate)

app.mount('#app')
