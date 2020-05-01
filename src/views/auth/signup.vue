<template>
<v-container fill-height>
		<v-card class="mx-auto px-3 py-4" align="center" justify="center" max-width="900" min-width="500" raised background="secondary">
    <v-card-title>Welcome to Porsio</v-card-title>
  <form>
    
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="First-Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

     <v-text-field
      v-model="last"
      :error-messages="lastnameErrors"
      :counter="10"
      label="Last-Name"
      required
      @input="$v.last.$touch()"
      @blur="$v.last.$touch()"
    ></v-text-field>

    
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    
   <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

     <v-text-field
      v-model="confirmpassword"
      :error-messages="confirmErrors"
      label="Confirm-Password"
      required
      :rules="[checking]"
      @input="$v.confirmpassword.$touch()"
      @blur="$v.confirmpassword.$touch()"
    ></v-text-field>


   
  
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit" type="submit" raised color="primary">Submit</v-btn>
    <v-btn @click="clear">Clear</v-btn>
  </form>
  	<v-card-text>Welcome Back <a href="login">Login</a></v-card-text>
  	</v-card>
    
	</v-container>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import { required, maxLength ,email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      last: {required, maxLength:maxLength(10)},
      email: { required, email },
      password :{ required},
      confirmpassword :{ required},
      
     
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      last:'',
      email: '',
      password:'',
      confirmpassword:'',
      checkbox: false,
      
      
    }),

    computed: {

     
      checking () {
          return this.password !== this.confirmpassword ? 'Password do not match': '' ;
      },

      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('First Name is required.')
        return errors
      },

      lastnameErrors () {
        const errors = []
        if (!this.$v.last.$dirty) return errors
        !this.$v.last.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.last.required && errors.push('Last Name is required.')
        return errors
      },

     


      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },


      

       passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },

        
       confirmErrors () {
        const errors = []
        if (!this.$v.confirmpassword.$dirty) return errors
        !this.$v.confirmpassword.required && errors.push('Please Re-Password')
        return errors
      },
      
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.checkbox = false
        this.last = ''
        this.confirmpassword=''
        this.password=''

      
      },
    },
  } 
</script>