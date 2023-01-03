import './bootstrap';

import { createApp } from 'vue';

import  router from './vue-router/router'

import Layout from './Layout/Layout.vue'

// icon 
import { library } from '@fortawesome/fontawesome-svg-core';

import icon from './Icon/icon'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(icon)

const app = createApp({});

app.component('Layout', Layout);

// app.component('font-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app');
