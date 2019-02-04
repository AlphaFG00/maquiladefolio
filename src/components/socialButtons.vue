<template>
	<div>
		<b-button-group vertical>
			<b-link href="https://www.google.com">
				<b-button class="rojo">
					1
				</b-button>
			</b-link>
			<b-button>2</b-button>
			<b-button>3</b-button>
		</b-button-group>
	</div>
</template>

<script>
	import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';

	export default{}
</script>

<style lang="scss">
	.rojo {
		background-color: red;
	}
</style>