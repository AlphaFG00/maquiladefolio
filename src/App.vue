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
import maquilaHeader from './maquilaHeader.vue'
import collapsableContent from './collapsableContent.vue'

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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
