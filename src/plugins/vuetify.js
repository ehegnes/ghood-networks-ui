import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

// topbar: #202c3a
// wayback: #1c222e
// blue accent: #4fd8e0
// purple: #635f9c

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#635f9c',
    secondary: colors.green.lighten2,
    accent: '#4fd8e0',
    accent: colors.blue.lighten3,
    //error: '#b71c1c'
  },
})
