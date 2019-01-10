<template>
	<div id="app">
		<maquila-header/>

		<div class="container">
			<modal-temp/>
			<collapsable-content/>
		</div>

	</div>
</template>

<script>
import maquilaHeader from './components/maquilaHeader.vue'
import modalTemp from './components/modalTemp.vue'
import collapsableContent from './components/collapsableContent.vue'

export default {
	name: 'app',
	components: {
		maquilaHeader,
		modalTemp,
		collapsableContent
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
