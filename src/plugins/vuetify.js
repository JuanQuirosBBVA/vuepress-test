// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify, { VLayout, VBtn, VDivider, VFlex, VTextField, VForm, VCard, VCardText, VCardTitle,
VSpacer, VToolbar, VApp, VToolbarTitle, VAlert, VContainer, VContent, VAppBar
,VImg, VIcon, VDialog, VCardActions, VProgressLinear, VSnackbar, VCheckbox, VAvatar } from 'vuetify/lib'

import colors from 'vuetify/es5/util/colors'

import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify, {
  components: { VLayout,VBtn, VDivider, VFlex, VTextField, VForm, VCard, VCardText, VCardTitle,
    VSpacer, VToolbar, VApp, VToolbarTitle, VAlert, VContainer, VContent, VAppBar, VImg, VIcon,
    VDialog, VCardActions, VProgressLinear, VSnackbar, VCheckbox, VAvatar },
})

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#4CAF50',
          primaryDark: '#388E3C',
          primaryLight: '#C8E6C9',
          primaryLighter: '#dff1e0',
          greenerWhite2: '#e0dcc3',
          greenerWhite: '#F2F8F2',
          accent: '#FF9800',
          accentLight: colors.amber.lighten1,
          secondary: '#f7fbf7',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          gold:"C9B037",
          silver: "B4B4B4",
          bronze:"#6A3805",
          oldCeli:"#a4b22e"
        }
      }
    },
    bgc: {
      backgroundColor: '#C8E6C9'
    }
})