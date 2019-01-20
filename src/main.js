import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"

import "bootstrap-vue/dist/bootstrap-vue.css"
import { Layout } from 'bootstrap-vue/es/components';

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(Layout);


//	Directivas de prueba. Usar esta como "v-decorar"
Vue.directive('decorar', {
	bind(elemento, modificadores, nodo_dom_virtual){
		elemento.style.fontFamily = modificadores.value
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
