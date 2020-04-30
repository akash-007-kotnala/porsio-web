<template>
	<v-footer
    dark
    padless
    color="primary"
  >
    <v-card
      flat
      tile
      min-width="100%"
      class="white--text text-center mx-auto"
      color="primary"
    >
       Description
      <v-divider></v-divider>
      <v-row>
        <v-col cols="6">
        </v-col>
        <v-col cols="6">
          <router-link to="about" class="white--text">About us</router-link><br>
          <router-link to="policies" class="white--text">Policies</router-link><br>
          <router-link to="contactus" class="white--text">Contact Us</router-link><br>
        </v-col>
      </v-row>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} &copy;  <strong>Porsio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {

  name: 'pfooter',

  data () {
    return {

    }
  }
};
</script>

<style lang="css" scoped>
</style>