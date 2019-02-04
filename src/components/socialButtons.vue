<template>
	<div>
		<b-button-group vertical>
			<b-link href="https://www.google.com">
				<b-button class="rojo">
					<font-awesome-icon :icon="['fas', 'coffee']"/>1
				</b-button>
			</b-link>
			<b-button>
				<font-awesome-icon :icon="['fab', 'facebook-square']"/>12
			</b-button>
			<b-button>3</b-button>
		</b-button-group>
	</div>
</template>

<script>
	import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group'

	/*	Paquetes de iconos disponibles
		@fortawesome/free-brands-svg-icons - prefix: fab
		@fortawesome/free-regular-svg-icons - prefix: far
		@fortawesome/free-solid-svg-icons - prefix: fas
	*/
	
	//	Iconos
	import { library } from '@fortawesome/fontawesome-svg-core'
	import { faCoffee } from '@fortawesome/free-solid-svg-icons'
	import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
	library.add(faCoffee, faFacebookSquare)

	export default{
		components: {
			FontAwesomeIcon
		}
	}
</script>

<style lang="scss">
	.rojo {
		background-color: red;
	}
</style>