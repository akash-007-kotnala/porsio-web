<template>
  <div class="home">
  	<pcarousel/>
   <v-row>
   	<v-col cols="3" class="mx-4">
   		<v-card tile class="mx-2 my-2 px-3 py-3" v-for="(filter,idx) in filters" :key="idx">
   			
   				<b>{{ filter.title }}</b>
   			  <v-checkbox v-for="(option,i) in filter.options" :key="i" :label=option class="mx-1 my-0 px-0 py-0"></v-checkbox>
   			
   		</v-card>
   	</v-col>
   	
   			<v-col cols="3" v-for="(product,idx) in products" :key="idx">
   				<pcard item=product.name></pcard>
   			</v-col>
   		
   	
   </v-row>
    
  </div>
</template>

<script>
import pcard from "./../components/p-card";
import pcarousel from './../components/pcarousel';

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
  	products:[
  	{
  		name:"shirt",
  		data:"description"
  	},
  	{
  		name:"shoe",
  		data:"description"
  	}
  	]
  })
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