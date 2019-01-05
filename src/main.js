import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { Layout } from 'bootstrap-vue/es/components';

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(Layout);

new Vue({
  el: '#app',
  render: h => h(App)
})
