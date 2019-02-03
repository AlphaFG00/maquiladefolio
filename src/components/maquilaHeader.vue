<template>
	<div>
		<b-navbar toggleable="md" type="dark" variant="primary" sticky>

			<b-navbar-toggle target="nav_collapse"/>
			<b-navbar-brand href="#">Maquila de Folio</b-navbar-brand>
			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item href="#">Productos</b-nav-item>
					<b-nav-item href="#" disabled>Disabled</b-nav-item>
					<b-nav-item-dropdown text="Post" right>
						<b-dropdown-item to="/">Terminos y condiciones</b-dropdown-item>
						<b-dropdown-item to="/formulario">Formulario</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown right>
						<!-- Using button-content slot -->
						<template slot="button-content">
							<em>Certificaciones</em>
						</template>
						<b-dropdown-item href="#">ISO-5001</b-dropdown-item>
						<b-dropdown-item href="#">Norma-Shida</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>

			</b-collapse>
		</b-navbar>
		<main-slider/>

		<b-breadcrumb :items="items"/>
	</div>
</template>

<script>
	import bBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb'
	import { Navbar } from 'bootstrap-vue/es/components'
	import mainSlider from './mainSlider.vue'
	
	export default {
		data () {
			return {
				items: [
					{
						text: 'Admin',
						href: '#'
					}, {
						text: 'Manage',
						href: '#'
					}, {
						text: 'Library',
						active: true
					}
				]
			}
		},
		components: {
			mainSlider
		}
	}
</script>

<style lang="scss">
	
</style>