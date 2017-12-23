import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

import Notifications from 'vue-notification'
Vue.use(Notifications)

Vue.use(Vuetify, {
  theme: {
    /*
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
    */
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

import VJsonTree from 'vue-json-tree'
Vue.component('v-json-tree', VJsonTree)

import LoremIpsum from '@/components/LoremIpsum'
Vue.component('lorem-ipsum', LoremIpsum)

import Model from '@/model'
Vue.use(Model)

import modular from '@/modular'
Vue.use(modular)

Vue.prototype.$debug = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => <App />
})
