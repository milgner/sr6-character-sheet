import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#991f76',
        secondary: '#b4a5c8',
        error: '#ef625c',
        info: '#00af97',
        success: '#A0F0A0',
        warning: '#F0A0A0',
        anchor: '#FF00FF',
        accent: '#991f76',
      },
    },
  },
});
