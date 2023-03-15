import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import { validation, icons } from './includes';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.use(validation);
app.use(icons);

app.mount('#app');
