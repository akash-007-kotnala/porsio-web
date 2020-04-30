<template>
  <v-app-bar app color="primary" >
      <div class="d-flex align-center white--text">
        <a class="d-flex align-center white--text v-btn" href="/">PORSIO</a>
      </div>

      <v-spacer></v-spacer>
      <v-form method="get" v-show="false">
        <v-text-field
          hide-details
          append-outer-icon="mdi-search"
          placeholder="Search an item...."
          single-line
          light
          solo
        ></v-text-field>
        
      </v-form>
      <v-spacer></v-spacer>

      <v-btn icon color="white" to="/login"><v-icon>mdi-account</v-icon></v-btn>
      <v-btn icon color="white" to="/cart"><v-icon>mdi-cart</v-icon></v-btn>
    </v-app-bar>
</template>

<script>
export default {

  name: 'appbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>