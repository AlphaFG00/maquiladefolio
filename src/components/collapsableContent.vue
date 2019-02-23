<template>
	<div role="tablist">
		<b-card no-body class="mb-1" v-for="(dataset, index) of datasets" :key="index">
			<b-card-header header-tag="header" class="p-1" role="tab" @click="dataset.isActive = !dataset.isActive">
				<b-button block href="#" v-b-toggle="index + ''" variant="primary">
					{{ dataset.titulo }}
					<span v-if="dataset.isActive">-</span>
					<span v-else>+</span>
				</b-button>
			</b-card-header>
			<b-collapse :id="index + ''" :visible="dataset.isActive" role="tabpanel">
				<b-card-body>
					<b-tabs>
						<b-tab v-for="(tab, tab_index) of dataset.tabs" :key="tab_index" :title="tab.tabname">
							<br>{{ tab.text }}
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
	import bTab from 'bootstrap-vue/es/components/tabs/tab'
	import bCard from 'bootstrap-vue/es/components/card/card'
	import bCardHeader from 'bootstrap-vue/es/components/card/card-header'
	import bCardBody from 'bootstrap-vue/es/components/card/card-body'
	import vBToggle from 'bootstrap-vue/es/directives/toggle/toggle'
	import BButton from 'bootstrap-vue/es/components/button/button'
	
	export default {
		data () {
			return {
					datasets: [
						{
							titulo: "Terminos y condiciones",
							tabs: [
								{
									tabname: "terminos de uso",
									text: `
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
										richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
										brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
										tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
										assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
										wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
										vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
										synth nesciunt you probably haven't heard of them accusamus labore VHS.
									`
								},
								{
									tabname: "terminos de cookies",
									text: "Nuestras cookies son shidas :3"
								}
							],
							isActive: false
						},
						{
							titulo: "FAQ's",
							tabs: [
								{
									tabname: "tableau",
									text: `
										hola!
									`
								},
								{
									tabname: "datatables",
									text: "Adios"
								}
							],
							isActive: false
						},
						{
							titulo: "Otra cosa",
							tabs: [
								{
									tabname: "sopa1",
									text: `Sopa aguada xd`
								},
								{
									tabname: "sopa2",
									text: "Sopa shida c:"
								},
								{
									tabname: "sopa3",
									text: "Sopa de calzon"
								},
								{
									tabname: "sopa4",
									text: "Sopa de verduras"
								},
								{
									tabname: "sopa5",
									text: "Sopa de piedra"
								},
								{
									tabname: "sopa6",
									text: "Sopa de camaron"
								},
								{
									tabname: "sopa7",
									text: "sopitas 7u7r"
								},
								{
									tabname: "sopa8",
									text: "La Ultima Sopa"
								}
							],
							isActive: true
						}
					]
			}
		},
		components: {
			'b-card': bCard,
			'b-tabs': bTabs,
			'b-collapse': bCollapse,
			'b-card-header': bCardHeader,
			'b-card-body': bCardBody,
			'b-tab': bTab,
			'b-button': BButton
		},
		directives: {
			'b-toggle': vBToggle
		}
	}
</script>