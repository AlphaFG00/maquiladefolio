<template>
	<div class="jumbotron">
		<b-form>
			<b-form-group id="exampleInputGroup1"
										label="Email address:"
										label-for="exampleInput1"
										description="We'll never share your email with anyone else.">
				<b-form-input id="exampleInput1"
											type="email"
											required
											placeholder="Enter email">
				</b-form-input>
			</b-form-group>
			<b-form-group id="exampleInputGroup2"
										label="Your Name:"
										label-for="exampleInput2">
				<b-form-input id="exampleInput2"
											type="text"
											required
											placeholder="Mi pleisjolder"
											v-model.trim="usuario.pleisjolder">
				</b-form-input>
				<br>
				<b-form-select v-model="usuario.selected" :options="usuario.options" class="mb-3" />

			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
		<div>
			Valor de campo con Trim: {{ usuario.pleisjolder }} <br>
	    <div>Selected: <strong>{{ usuario.selected }}</strong></div>
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
		      options: [
		        { value: null, text: 'Please select an option' },
		        { value: 'Mexico', text: 'País donde hay tacos c:' },
		        { value: 'Venezuela', text: 'Pistaa: Van a salir de su crisis' },
		        { value: 'Cuba', text: 'Uffff men 7u7r cerca y barato' },
		        { value: 'Korea 7u7r', text: 'Paises asiaticos shidos :3' }
		      ]
				}
			}
		}
	}
</script>

<style></style>