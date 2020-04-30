<template>
  <v-app-bar app color="primary" >
      <div class="d-flex align-center white--text">
        <a class="white--text font-weight-bold" href="/">PORSIO</a>
      </div>
      <v-spacer></v-spacer>
      <v-text-field 
      append-icon="mdi-magnify" 
      @click:append="search" 
      v-model="searchContent"
      class="mx-12 mt-5"
      solo
      flat
      dense>
      </v-text-field>
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
      searchContent:''
    }
  },
  methods:{
    search:function(){

    }
  }
}
</script>

<style lang="css" scoped>
.v-text-field{
  max-width:400px;
}
</style>