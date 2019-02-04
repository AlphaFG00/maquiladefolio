<template>
	<div class="jumbotron">
		id: {{ id }} <br>
		<b-form>
			<b-form-group id="exampleInputGroup1"
										label="Email address:"
										label-for="exampleInput1"
										description="We'll never share your email with anyone else.">
				<b-form-input id="exampleInput1"
											type="email"
											v-model="usuario.email"
											required
											placeholder="Enter email"/>
			</b-form-group>
			<b-form-group id="exampleInputGroup2"
										label="Your Name:"
										label-for="exampleInput2">
				<b-form-input id="exampleInput2"
											type="text"
											required
											placeholder="Mi pleisjolder"
											v-model.trim="usuario.pleisjolder"/>
			</b-form-group>
			<b-form-group	label="Elige tu país!" 
										label-for="s_options">
				<b-form-select	id="s_options" 
												v-model="usuario.selected" 
												:options="usuario.options" 
												class="mb-3" />
			</b-form-group>
			<b-form-group>
				<b-form-textarea id="textarea1"
										 v-model="usuario.text"
										 placeholder="Pon lo que sea!"
										 :rows="3"
										 :max-rows="6"/>
			</b-form-group>
			<b-button type="submit" variant="primary"
								@click.prevent="enviarFormulario">Enviar</b-button>
		</b-form>
		<div v-if="mostrar">
			<br>
			Correo: {{ usuario.email }} <br>
			Valor de campo con Trim: {{ usuario.pleisjolder }} <br>
			<div>Selected: <strong>{{ usuario.selected }}</strong></div>
			Contenido del Textarea: <pre class="mt-3">{{ usuario.text }}</pre>
		</div>
	</div>
</template>

<script>
	import { Form } from 'bootstrap-vue/es/components';
	import { FormSelect } from 'bootstrap-vue/es/components';

	export default {
		data(){
			return {
				usuario: {
					pleisjolder: "",
					email: "",
					selected: null,
					text: '',
					options: [
						{ value: null, text: 'Please select an option' },
						{ value: 'Mexico', text: 'País donde hay tacos c:' },
						{ value: 'Venezuela', text: 'Pistaa: Van a salir de su crisis' },
						{ value: 'Cuba', text: 'Uffff men 7u7r cerca y barato' },
						{ value: 'Korea 7u7r', text: 'Paises asiaticos shidos :3' }
					]
				},
				mostrar: false,
				id: this.$route.params.id
			}
		},
		methods: {
			enviarFormulario(){
				this.mostrar = true
				this.$http.post('https://vue-proof.firebaseio.com/prueba.json', {
					correo: this.usuario.email,
					pais: this.usuario.selected,
					text: this.usuario.text
				}).then(response => console.log(response))
				this.usuario.email = ""
				this.usuario.selected = null
				this.usuario.text = ""
				this.usuario.pleisjolder = ""
			}
		}
	}
</script>

<style></style>