<template>
	<b-col cols="12" md="4">
		<b-card-group deck>
			<b-card header="Promociones que podrían interesarte" v-if="promos.length > 0">
				<b-list-group>
					<b-list-group-item v-for="(promo, key) in promos" :key="key" :to="promo.to" href="#">{{ promo.text }}</b-list-group-item>
				</b-list-group>

				<p class="card-text mt-2">
					Aqui puede ir cualquier <strong>html</strong>, me agradaría c:
				</p>
			</b-card>
		</b-card-group>
	</b-col>
</template>

<script>
	import bListGroup from 'bootstrap-vue/es/components/list-group/list-group'
	import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item'
	import bCard from 'bootstrap-vue/es/components/card/card'
	import bCardGroup from 'bootstrap-vue/es/components/card/card-group'

	export default {
		data(){
			return {
				promos: [
					{
						'to': '/',
						'text': 'Debería disparar una modal'
					},
					{
						'to': '/terminos',
						'text': 'Esto es una promo a modal'
					},
					{
						'to': '/about',
						'text': 'Esto es otra promo a modal x2'
					}
				]
			}
		},
		components: {
			'b-list-group': bListGroup,
			'b-list-group-item': bListGroupItem,
			'b-card': bCard,
			'b-card-group': bCardGroup
		}
	}
</script>