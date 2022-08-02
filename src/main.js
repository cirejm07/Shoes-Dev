import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(VueSweetalert2).component('fa', FontAwesomeIcon).mount('#app')


import "bootstrap/dist/js/bootstrap.js"

