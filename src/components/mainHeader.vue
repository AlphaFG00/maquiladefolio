<template>
	<div>
		<b-navbar toggleable="md" type="dark" variant="primary" sticky>
			<div class="container-fluid">
				<b-navbar-toggle target="nav_collapse"/>
				<b-navbar-brand to="/">
					<img src="../../public/maquila-logo.svg" height="40px" width="80px" alt="Maquila-logo">
					<img src="../../public/maquila-white.svg" height="60px" width="80px" alt="Maquila-logo">
					Maquila de Folio
				</b-navbar-brand>
				
				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown text="Post" right>
							<b-dropdown-item to="/" exact>Terminos y condiciones</b-dropdown-item>
							<b-dropdown-item to="/about" exact>Prueba</b-dropdown-item>
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
		<!-- <main-slider></main-slider>
		<b-breadcrumb :items="items"></b-breadcrumb> -->
	</div>
</template>

<script>
	/*	Imports de Bootstrap	*/
	import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
	import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle'
	import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
	import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
	import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown'
	import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item'
	import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
	// import bBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb'
	import bNavItem from 'bootstrap-vue/es/components/nav/nav-item'

	/*	Font Awesome - Paquetes de iconos disponibles
		@fortawesome/free-brands-svg-icons - prefix: fab
		@fortawesome/free-regular-svg-icons - prefix: far
		@fortawesome/free-solid-svg-icons - prefix: fas
	*/
	import { library } from '@fortawesome/fontawesome-svg-core'
	import { faFacebookF, faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	library.add( faFacebookF, faFacebookSquare, faInstagram, faTwitter )

	//	imports propios
	//import mainSlider from '@/components/mainSlider.vue'

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
			//'main-slider': mainSlider,
			'font-awesome-icon': FontAwesomeIcon,
			'b-navbar': bNavbar,
			'b-navbar-toggle': bNavbarToggle,
			'b-navbar-brand': bNavbarBrand,
			'b-navbar-nav': bNavbarNav,
			'b-nav-item-dropdown': bNavItemDropdown,
			'b-dropdown-item': bDropdownItem,
			'b-collapse': bCollapse,
			//'b-breadcrumb': bBreadcrumb,
			'b-nav-item': bNavItem
		}
	}
</script>