import Vue from 'vue'
import VueResource from "vue-resource"
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"

import "bootstrap-vue/dist/bootstrap-vue.css"
import { Layout } from 'bootstrap-vue/es/components'
import { routes } from  './routes.js'

import App from './App.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Layout)


/*	Directivas de prueba. Usar esta como "v-decorar"
 *	Para definir en local, ponemos en directives : {...} del componente
 */
Vue.directive('decorar', {
	bind(elemento, binding, virtual_node){
		elemento.style.fontFamily = binding.value.familia

		if(binding.modifiers['negritas']){
			elemento.style.fontWeight = 'bold'
		}
		if(binding.modifiers['italica']){
			elemento.style.fontStyle = 'italic'
		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
