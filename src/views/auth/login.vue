<template>
	<v-container fill-height>
		<v-card class="mx-auto px-3 py-4" align="center" justify="center" max-width="900" min-width="500" raised background="secondary">
			<v-card-title>Log In to Porsio</v-card-title>
			<v-divider></v-divider>
			<v-form>
				<v-text-field type="email" name="email" placeholder="email"/>
				<v-text-field type="password" name="password" placeholder="password"/>
				<v-btn type="submit" raised color="primary">Log In</v-btn>
				<v-btn text>Forgot Password</v-btn>
			</v-form>
			<v-card-text>New Here, <a href="signup">Create an account</a></v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>