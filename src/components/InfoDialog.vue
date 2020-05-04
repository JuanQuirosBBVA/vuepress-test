<template >
 <v-dialog @keydown.esc="dialog = false;$bus.$emit('accept', 'foo message');"
                  v-model="dialog"
                  hide-overlay
                  persistent
                  max-width=750
                  width="60%"
                >
                  <v-card justify-center
                  >
                    <v-card-title class=" text-xs-center">
                       <span class="headline" :class="`${this.color}--text`">{{this.title}}</span>
                    </v-card-title>
                    <v-layout justify-center class="accent--text">
                       <v-icon class="fa fa-5x primary--text" :class="`${this.icon} ${this.color}--text`" ></v-icon> 
                    </v-layout>
                    <v-card-text class=" mt-3 text-xs-center">
                      <span class="subheading">{{this.text}}</span>
                    </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="accent " text @click="dialog = false;$bus.$emit('accept', 'foo message');">¡OK!</v-btn>
                      </v-card-actions>
                  </v-card>
                </v-dialog>
</template>
<script>

export default {
  data() {
    return {
      title: '',
      text: '',
      icon: '',
      color: "",
      dialog: false
    }
  },
  methods: {
    showDialog(title, txt, icon, color){
      this.title= title
      this.text = txt
      this.icon = icon
      this.color = color
      this.dialog = true
    },
    showUserNotLogged(){
      this.title = "Usuario no registrado"
      this.text = "Solamente los usuarios registrados pueden realizar esta función. Si quieres puedes registrarte, por supuesto es totalmente gratuito"
      this.icon = "fa-times-circle"
      this.color = "error"
      this.dialog = true
    },
    closeDialog(){
      this.dialog = false
    }
          
  }
}
</script>