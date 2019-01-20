<template>
	<div class="jumbotron">
		<b-row>
			<b-col cols="12" offset="0" v-decorar.italica.negritas="{familia:'helvetica'}">
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
</template>

<script>
	import bModal from 'bootstrap-vue/es/components/modal/modal'
	export default {
		data () {
			return {
				msg: 'Zoi un Jumbotron, y te doy la bienvenido a Maquila de Folio c:'
			}
		}
	}
</script>

<style lang="scss"></style>