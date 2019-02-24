<template>
	<div id="app">
		<main-header></main-header>

		<b-container fluid>
			<router-view/>
		</b-container>

		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/terminos">Terminos y condiciones</router-link> |
			<router-link to="/terminos/promociones">Hijo</router-link>
		</div>
	</div>
</template>

<script>
	import mainHeader from '@/components/mainHeader.vue'

	export default {
		components: {
			'main-header': mainHeader
		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/overrideBootstrap.scss';
	@import 'bootstrap/scss/bootstrap.scss';
	@import '@/assets/scss/general.scss'
</style>
