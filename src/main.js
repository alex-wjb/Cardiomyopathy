// must go first:
import 'mdb-vue-ui-kit/css/mdb.min.css';
import './assets/styles/global.scss';
import App from './App.vue';
import router from './services/router.js';
import store from './services/store.js';
import { createApp } from 'vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
