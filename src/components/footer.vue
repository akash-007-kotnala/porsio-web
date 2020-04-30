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
      class="white--text mx-auto px-5 py-2"
      color="primary"
    >
      <v-row>
        <v-col cols="4">
          <h6>
            Account Info
          </h6>
          <router-link to="user" class="white--text">My account</router-link>
        </v-col>
        <v-col cols="4">
          <h6>Information</h6>
          <router-link to="about" class="white--text">About us</router-link><br>
          <router-link to="policies" class="white--text">Policies</router-link><br>
          <router-link to="contactus" class="white--text">Contact Us</router-link><br>
        </v-col>
        <v-col cols="4">
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} &copy;  All copyrights are reserved by <strong>Porsio</strong> Pvt. Ltd.
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
h6{
  font-size:1.2rem;
}
</style>