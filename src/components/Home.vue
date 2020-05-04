<template>
  <div class="home ma-5 align-center justify-center" >
    <v-layout xs8 class="align-center justify-center">
                 <router-link to="/leccion">
            <v-card>
            <v-img
              src="https://celicidad.net/wp-content/uploads/2017/03/box3.png"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>Curso Primeros Pasos</v-card-title>
            </v-img>
            </v-card></router-link></v-layout>
  </div>
</template>

<script>

export default {

  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: false
    }
  },

  methods: {
    validateField () {
        this.$refs.form.validate()
     },
    async login() {
      if(this.$refs.form.validate()) {
        try {
          console.log('Logging in...', {icon: "fingerprint"});
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          }).catch(e => {
            console.log('Failed Logging In' + e, {icon: "error_outline"});
            this.error = true;
            this.password = null;
          });
         /* if ($store.state.auth.user && $store.state.auth.user.firstName != null) {
            console.log('Successfully Logged In', {icon: "done"});
            localStorage.setItem('redirect', this.$route.path)
          }*/
        } catch (e) {        
            console.log('Username or Password wrong', {icon: "error"});
        }
      }
    }
  }
}
</script>