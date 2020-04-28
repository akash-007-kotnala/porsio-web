import Vue from "vue";
import Vuetify from "vuetify/lib";
import { preset } from "vue-cli-plugin-vuetify-preset-crane/preset";

Vue.use(Vuetify);

export default new Vuetify({ preset,
	icons: {
	    iconfont: 'mdi', 
	  },
   });
