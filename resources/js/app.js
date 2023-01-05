import './bootstrap';

import { createApp } from 'vue';

import  router from './vue-router/router'

import Layout from './Layout/Layout.vue'

const app = createApp({});

app.component('Layout', Layout);

app.use(router)

app.mount('#app');
