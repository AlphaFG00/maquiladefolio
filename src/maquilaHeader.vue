<template>
	<div>
		
		<b-navbar toggleable="md" type="dark" variant="dark" sticky>

			<b-navbar-toggle target="nav_collapse"/>
			<b-navbar-brand href="#">Maquila de Folio</b-navbar-brand>
			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item href="#">Productos</b-nav-item>
					<b-nav-item href="#" disabled>Disabled</b-nav-item>
					<b-nav-item-dropdown text="Lenguaje" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
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

		<b-breadcrumb :items="items"/>
	</div>
</template>

<script>
	import bBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb'
	import { Navbar } from 'bootstrap-vue/es/components'
	
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
		}
	}
</script>

<style>
	
</style>