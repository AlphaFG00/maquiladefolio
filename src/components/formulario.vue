<template>
	<div>
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
											v-model="pleisjolder">
				</b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
		<div>
			{{ pleisjolder }}
		</div>
	</div>
</template>

<script>
	import { Form } from 'bootstrap-vue/es/components';

	export default {
		data(){
			return {
				pleisjolder: ""
			}
		}
	}
</script>

<style></style>