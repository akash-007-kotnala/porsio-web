<template>
  <div class="home">
  	<pcarousel/>
   <v-row>
   	<v-col cols="0" md="3" sm="4" class="mx-4">
   		<v-card tile class="mx-2 my-2 px-3 py-3" v-for="(filter,idx) in filters" :key="idx">
   			
   				<b>{{ filter.title }}</b>
   			  <v-checkbox v-for="(option,i) in filter.options" :key="i" :label=option class="mx-1 my-0 px-0 py-0"></v-checkbox>
   			
   		</v-card>
   	</v-col>
   	
   			<v-col cols="12" sm="4" md="3" v-for="(product,idx) in texts" :key="idx">
          {{product}}
   				<pcard item=product.name></pcard>
            
   			</v-col>
   		
   	
   </v-row>
    
  </div>
</template>

<script>
import pcard from "./../components/pcard";
import pcarousel from './../components/pcarousel';
import firebase from '../firebaseConfig'

export default {
  name: "Home",
  components: {
    pcard,
    pcarousel
  },
  data:()=>({
  	filters:[
  	{
  		title:"Department",
  		options:['T-shirt','Caps','Shirts','Umbrella']
  	},
  	{
  		title:"Brand",
  		options:['Nike','Addidas','Puma']
  	},
  	{
  		title:"Price",
  		options:['Below 500','above 500']
  	},
  	{
  		title:"Seller",
  		options:['Flipkart','Amazon','Local']
  	}
  	],
  	products:[{
      name:'item'
    }],
    texts:[]
  }),
  mounted(){
    var db = firebase.firestore();
    
    db
      .collection('productsData')
      .get()
      .then(snap=>{
        const texts = [];
        snap.forEach(doc=>{
          texts.push({'id':[doc.id],[doc.id]:doc.data()});
        });
        this.texts = texts;
        console.log(texts);
      })
  }
};
</script>
<style>
.v-input__slot{
  margin-bottom: 0;
}
.v-messages{
  min-height: 0px;
}
</style>