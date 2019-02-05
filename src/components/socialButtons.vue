<template>
	<div>
		<b-link href="https://www.facebook.com/maquila.defolio" target="_blank">
			<b-button variant="primary">
				<font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon>
			</b-button>
		</b-link>
		<b-link href="https://www.instagram.com/hazalnhr" target="_blank">
			<b-button variant="primary">
				<font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
			</b-button>
		</b-link>
		<b-link href="https://twitter.com/MadeWithVueJS" target="_blank">
			<b-button variant="primary">
				<font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
			</b-button>
		</b-link>
	</div>
</template>

<script>
	import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group'
	import bLink from 'bootstrap-vue/es/components/link/link'

	/*	Paquetes de iconos disponibles
		@fortawesome/free-brands-svg-icons - prefix: fab
		@fortawesome/free-regular-svg-icons - prefix: far
		@fortawesome/free-solid-svg-icons - prefix: fas
	*/
	import { library } from '@fortawesome/fontawesome-svg-core'
	import { faFacebookF, faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	library.add( faFacebookF, faFacebookSquare, faInstagram, faTwitter )

	export default{
		components: {
			FontAwesomeIcon
		}
	}
</script>