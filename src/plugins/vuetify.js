import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.purple.lighten1,
    secondary: colors.green.lighten2,
    accent: colors.blue.lighten1,
    //error: '#b71c1c'
  },
})
