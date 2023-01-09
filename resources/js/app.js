import './bootstrap';

import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import icons from './icon'

import  router from './vue-router/router'

import Layout from './Layout/Layout.vue'

library.add(icons)

const app = createApp({});

app.component('Layout', Layout);

app.use(router)

app.component("Font-icon",FontAwesomeIcon)

app.mount('#app');
