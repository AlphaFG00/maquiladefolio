<template>
	<b-col>
		<router-view></router-view>
		<collapsable-content></collapsable-content>
	</b-col>
</template>

<script>
	import collapsableContent from '@/components/collapsableContent.vue'

	export default {
		components: {
			'collapsable-content': collapsableContent
		}
	}
</script>