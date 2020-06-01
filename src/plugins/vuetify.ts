import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#991f76',
        secondary: '#991f76',
        error: '#bf0707',
        info: '#991f76',
        success: '#A0F0A0',
        warning: '#F0A0A0',
        anchor: '#FF00FF',
        accent: '#991f76',
      },
    },
  },
});
