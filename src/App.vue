<template>
	<div id="app">
		<maquila-header></maquila-header>

		<div class="container">
			<div class="jumbotron">
				<b-row>
					<b-col cols="12" offset="0">
						{{ msg }}
						<br>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<b-btn v-b-modal.modal5>Qué se cuece aqui?</b-btn>

						<!-- Modal Component -->
						<b-modal id="modal5" title="Alerta!">
							<p class="my-4">Sitio en construcción. Hombres trabajando xd</p>
						</b-modal>
					</b-col>
				</b-row>
			</div>
			<collapsable-content></collapsable-content>
		</div>

	</div>
</template>

<script>
import bModal from 'bootstrap-vue/es/components/modal/modal'
import maquilaHeader from './components/maquilaHeader.vue'
import collapsableContent from './components/collapsableContent.vue'

export default {
	name: 'app',
	components: {
		maquilaHeader,
		collapsableContent
	},
	data () {
		return {
			msg: 'Zoi un Jumbotron, y te doy la bienvenido a Maquila de Folio c:'
		}
	}
}
</script>

<style lang="scss">
	//	Estilos de bootstrap
	@import './assets/scss/overrideBootstrap.scss';
	@import '~bootstrap/scss/bootstrap.scss';

	//	Mis estilos
	@import './assets/scss/general.scss';
</style>
