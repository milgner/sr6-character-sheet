import { simpleUpdaters } from '@/store/util';

const initialState = {
  simHot: false,
  attack: 6,
  sleaze: 5,
  dataProcessing: 7,
  firewall: 6,
  deviceName: 'MCT 360',
  deviceRating: 3,
  programs: [
    'Ausnutzen',
    'Panzerung',
    'Tarnkappe',
    'Blackout',
    'Babymonitor',
    'Schmöker',
    'Editieren',
  ],
  damage: 0,
};

const MatrixStore = {
  namespaced: true,
  state: initialState,
  mutations: {
    ...simpleUpdaters(initialState),
  },
  actions: {},
  getters: {
    totalHealth(state: any) {
      return 8 + Math.round(state.deviceRating);
    },
    damageModifier(state: any) {
      return Math.ceil(state.damage / -3);
    },
  },
};

export default MatrixStore;
