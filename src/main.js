import Vue from 'vue'

//	Complementos de Vue
import VueResource from "vue-resource"
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

//	Bootstrap
import BootstrapVue from "bootstrap-vue"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { Layout } from 'bootstrap-vue/es/components'
Vue.use(BootstrapVue)
Vue.use(Layout)

//	Mis archivos de configuración
import { routes } from  './routes.js'
import App from './App.vue'
const enrutador = new VueRouter({
	routes: routes,
	mode: 'history' /*	Quita la almohadilla para separar peticiones y router-view.	*/
})

/*	Directivas de prueba. Usar esta como "v-decorar" [BORRAR]
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

//	Inicialización del componente principal
new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
