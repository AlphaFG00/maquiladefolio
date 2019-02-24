<template>
	<b-row>
		<router-view></router-view>
		<collapsable-content></collapsable-content>
	</b-row>
</template>

<script>
	import collapsableContent from '@/components/collapsableContent.vue'

	export default {
		components: {
			'collapsable-content': collapsableContent
		}
	}
</script>