<template>
	<div role="tablist">
		<b-card no-body class="mb-1">
			<b-card-header header-tag="header" class="p-1" role="tab" @click="isActive = !isActive">
				<button v-b-toggle.accordion1 variant="info">
					{{ titulo }}
					<span v-if="isActive">-</span>
					<span v-else>+</span>
				</button>
			</b-card-header>
			<b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
				<b-card-body>
					<b-tabs>
						<b-tab title="FAQ's" active>
							<br>I'm the first fading tab
						</b-tab>
						<b-tab title="Terminos y condiciones" >
							<br>{{ text }}
						</b-tab>
					</b-tabs>
				</b-card-body>
			</b-collapse>
		</b-card>
	</div>
</template>
<script>
	import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
	import bTabs from 'bootstrap-vue/es/components/tabs/tabs'
	export default {
		data () {
			return {
				text: `
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
					richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
					brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
					tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
					assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
					wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
					vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
					synth nesciunt you probably haven't heard of them accusamus labore VHS.
				`,
				titulo: "Terminos y condiciones",
				isActive: true
			}
		}
	}
</script>
<style lang="scss">
	
</style>