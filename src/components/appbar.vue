<template>
  <v-app-bar app color="primary" >
      <div class="d-flex align-center white--text">
        PORSIO
      </div>

      <v-spacer></v-spacer>
      <v-form method="get">
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

      <v-btn icon color="white"><v-icon>mdi-account</v-icon></v-btn>
      <v-btn icon color="white"><v-icon>mdi-cart</v-icon></v-btn>
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