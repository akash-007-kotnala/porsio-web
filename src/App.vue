<template>
  <v-app>
    <appbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
    <pfooter />
  </v-app>
</template>

<script>
import appbar from "./components/appbar";
import pfooter from "./components/footer";

export default {
  name: "App",

  components: {
    pfooter,
    appbar
  },

  data: () => ({
    //
  })
};
</script>
<style>
a{
  text-decoration: none;
}
.v-btn{
  text-transform:none !important;
}
</style>
