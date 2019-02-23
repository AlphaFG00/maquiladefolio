<template>
	<div id="app">
		<maquila-header/>

		<div class="container">
			<router-view></router-view>
		</div>

		<br>
	</div>
</template>

<script>
import maquilaHeader from './components/maquilaHeader.vue'
import collapsableContent from './components/collapsableContent.vue'

import formulario from './components/formulario.vue'

export default {
	name: 'app',
	components: {
		maquilaHeader,
		collapsableContent,
		formulario
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
