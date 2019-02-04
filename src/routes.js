import formulario from './components/formulario.vue'
import collapsableContent from './components/collapsableContent.vue'

export const routes = [
	{ path:'', component: collapsableContent },
	{ path:'/formulario/:id', component: formulario }
]