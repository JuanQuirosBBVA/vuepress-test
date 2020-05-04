<template>
  <div class="register">
     <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <div class="container">
            <v-alert
              dismissible
              :value="error"
              color="error"
              >
                  {{this.errorText}}
              </v-alert>
            <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>Celicidad</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-form ref="form" method="post" @submit.prevent="register">
                      <v-layout class="image-upload" justify-center align-center mt-4>
                      <label for="file">
                         <v-avatar style="cursor: pointer;"
                              :size=100
                              color="primary lighten-4"
                            >
                              <v-icon v-if="this.photo==null" large alt="avatar">add_a_photo</v-icon>
                              <v-img v-if="this.photo != null" :src="this.photo"/>
                            </v-avatar>  
                       </label>
                       <input type="file" name="file" id="file"  @change="onFileSelected" accept="image/*" >
                      </v-layout>
                    <v-card-text>
                        <v-text-field v-model="email" prepend-icon="person" name="email" label="E-mail" type="text" required  :rules="[v => !!v || 'Debes introducir un email',  v => /.+@.+/.test(v) || 'Debes introducir un email válido']"></v-text-field>
                        <v-text-field  v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" required  :rules="[v => !!v || 'Debes introducir una contraseña']"></v-text-field>
                        <v-text-field  v-model="fname" prepend-icon="perm_contact_calendar" name="fname" label="Nombre" id="fname" type="fname" required  :rules="[v => !!v || 'Debes introducir un nombre']"></v-text-field>
                        <v-text-field  v-model="lname" prepend-icon="perm_contact_calendar" name="lname" label="Apellidos" id="lname" type="lname" required  :rules="[v => !!v || 'Debes introducir un apellido']"></v-text-field>
                        <v-checkbox hide-details pa-0 ma-0  label="He leido y acepto la política de privacidad" :rules="[v => !!v || 'Debes aceptar la política de privacidad']"><span slot="label">He leido y acepto la <a target="_blank" href="https://celicidad.net/politica-de-privacidad/">política de privacidad</a></span></v-checkbox>
                    </v-card-text>
                    <v-layout align-center justify-center>
                      <v-btn type="submit" color="primary">Registrate</v-btn>
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
                    <router-link to="/login" style="text-decoration: none;"> <v-btn color="accent">Inicia sesión</v-btn></router-link>
                  </v-layout>
              </div>
        </v-flex>
      </v-layout>
     </v-container>
      <ErrorSnackBar ref="snackError"></ErrorSnackBar>
      <LoadingDialog ref="loading"></LoadingDialog>
      <InfoDialog ref ="infoDialog"></InfoDialog>
  </div>
</template>

<script>
import Vue from 'vue'
import LoadingDialog from "@/components/LoadingDialog.vue"
import ErrorSnackBar from "@/components/ErrorSnackBar.vue"
import InfoDialog from "@/components/InfoDialog.vue"

Vue.prototype.$bus = new Vue();


export default {
  components: {
    LoadingDialog,
    ErrorSnackBar,
    InfoDialog
  },
  created() {
    this.$bus.$on('accept', this.accept)
  },
  destroyed() {
    this.$bus.$off('accept', this.accept)
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: false,
      errorText: '',
      photo: null,
      fname: null,
      lname: null,
      user: null
    }
  },

  methods: {
    async getBase64(file) {
      var reader = new FileReader();
      var vm = this;
        if (file.size <= 5000000) {
        reader.readAsDataURL(file);
        reader.onload = function () {
          vm.photo= reader.result
          vm.$forceUpdate();
        }
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      } else {
        this.$refs.snackError.snackbar = !this.$refs.snackError.snackbar;
        this.$refs.snackError.snackbartext = "¡La imagen es demasiado grande!"
      }
     },
     async onFileSelected(event){
       this.$refs.loading.showDialog("Cargando Avatar")
       await this.getBase64(event.target.files[0])
       this.$forceUpdate();
       this.$refs.loading.closeDialog()
     },
     async finishRegister(){
       
     },
     async accept(){
         this.$refs.loading.showDialog("Iniciando sesión.....")
         this.$axios.post('/api/user', this.user)
              .then(() => {
                   this.$refs.loading.closeDialog()
                   this.$auth.loginWith('local', {
                    data: {
                      uname: this.username,
                      lname: this.username,
                      fname: this.username,
                      email: this.email,
                      password: this.password
                    }
                  })
              })
     },
    async register() {
      if(this.$refs.form.validate()) {
        this.$refs.loading.showDialog("Creando usuario.....")
        try {    
          await this.$axios.post('/api/register', {
            uname: this.email,
            lname: this.lname,
            fname: this.fname,
            email: this.email,
            password: this.password
          }).then(response => {
              this.$refs.loading.closeDialog()
              this.$refs.infoDialog.showDialog("¡¡Registrado!!", "¡Muchas gracias por registrarte! \n\n Para empezar, necesitamos que confirmes tu dirección de correo electrónico a traves del correo que te acabamos de enviar.", "fa-envelope-open-text", "primary") ;
              this.user = response.data
              this.user.encodedAvatar = this.photo
          })
          .catch(error => {
              if (error.response.status === 409){
                 this.$refs.loading.closeDialog()
                 this.errorText = "El usuario ya está registrado";
                 this.error = true;
              } 
              if (error.response.status === 400){
                 this.$refs.loading.closeDialog();
                 this.errorText = "Los datos introducidos no son válidos";
                 this.error = true;
              }
          });
        } catch (e) {
          this.error = e.response
        }
      }
    }
  }
}
</script>


<style>

.image-upload > input
{
    display: none;
}

.image-upload div
{
    cursor: pointer;
}
</style>
