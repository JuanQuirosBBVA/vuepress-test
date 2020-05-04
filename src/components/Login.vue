<template>
  <div class="login">
     <v-container fluid fill-height>
    <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
             <v-alert
                  dismissible
                  :value="error"
                  color="error"
                >
                  Usuario o contraseña incorrectos
                </v-alert>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Celicidad</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form ref="form" method="post" @submit.prevent="login">
              <v-card-text>
                  <v-text-field v-model="email" prepend-icon="person" name="email" label="E-mail" type="text" required  :rules="[v => !!v || 'Debes introducir un email',  v => /.+@.+/.test(v) || 'Debes introducir un email válido']"></v-text-field>
                  <v-text-field  v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" required  :rules="[v => !!v || 'Debes introducir una contraseña']"></v-text-field>
              </v-card-text>
              <v-layout align-center justify-center>
                <v-btn type="submit" color="primary">Inicia Sesión</v-btn>
              </v-layout>
               <v-layout mt-2 mb-2 pb-2 align-center justify-center>
                   <router-link  to="/forgotpassword" class="black--text" style="text-decoration: none;"><span> ¿No recuerdas tu contraseña? Haz click aquí</span></router-link>
               </v-layout>
            </v-form>
            </v-card>
            <v-layout align-center justify-center mt-3>
              <v-flex mr-3>
               <v-divider></v-divider>
              </v-flex>
               <span>  O  </span>
               <v-flex ml-3>
                <v-divider ml-3></v-divider>
               </v-flex>
            </v-layout>
            <v-layout align-center justify-center>
              <router-link to="/register" style="text-decoration: none;"><v-btn color="accent">Regístrate en Celicidad</v-btn></router-link>
            </v-layout>
          </v-flex>
        </v-layout>
     </v-container>
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