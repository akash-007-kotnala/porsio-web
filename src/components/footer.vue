<template>
	<v-footer
    dark
    padless
    color="primary"
  >
    <v-card
      flat
      tile
      class="white--text text-center mx-auto"
      color="primary"
    >
       Description
      <v-divider></v-divider>

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