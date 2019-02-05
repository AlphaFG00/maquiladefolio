<template>
	<div>
		<b-navbar toggleable="md" type="dark" variant="primary" sticky>
			<div class="container">
				<b-navbar-toggle target="nav_collapse"/>
				<b-navbar-brand to="/">Maquila de Folio</b-navbar-brand>
				
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown text="Post" right>
							<b-dropdown-item to="/" exact>Terminos y condiciones</b-dropdown-item>
							<b-dropdown-item to="/formulario" exact>Formulario</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown right>
							<!-- Using button-content slot -->
							<template slot="button-content">
								<em>Certificaciones</em>
							</template>
							<b-dropdown-item href="#">ISO-5001</b-dropdown-item>
							<b-dropdown-item href="#">Norma-Shida</b-dropdown-item>
						</b-nav-item-dropdown>
						<b-nav-item v-for="(icon, indice) in icons" :key="indice" :href="icon.href" target="_blank" right>
							<font-awesome-icon :icon="['fab', icon.icon]"></font-awesome-icon>
						</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
		<main-slider></main-slider>
		<b-breadcrumb :items="items"></b-breadcrumb>
	</div>
</template>

<script>
	import bBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb'
	import { Navbar } from 'bootstrap-vue/es/components'

	/*	Paquetes de iconos disponibles - Font Awesome
		@fortawesome/free-brands-svg-icons - prefix: fab
		@fortawesome/free-regular-svg-icons - prefix: far
		@fortawesome/free-solid-svg-icons - prefix: fas
	*/
	import { library } from '@fortawesome/fontawesome-svg-core'
	import { faFacebookF, faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	library.add( faFacebookF, faFacebookSquare, faInstagram, faTwitter )

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
				],
				icons: [
					{
						href: "https://www.facebook.com/maquila.defolio",
						icon: "facebook-square"
					},{
						href: "https://www.instagram.com/hazalnhr",
						icon: "instagram"
					},{
						href: "https://twitter.com/MadeWithVueJS",
						icon: "twitter"
					}
				]
			}
		},
		components: {
			mainSlider,
			FontAwesomeIcon
		}
	}
</script>