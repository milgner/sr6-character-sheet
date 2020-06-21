import { simpleUpdaters } from '@/store/util';

interface MatrixState {
  simHot: boolean;
  attack: number;
  sleaze: number;
  dataProcessing: number;
  firewall: number;
  deviceName: string;
  deviceRating: number;
  programs: string[];
  damage: number;
}

const initialState: MatrixState = {
  simHot: false,
  attack: 0,
  sleaze: 0,
  dataProcessing: 0,
  firewall: 0,
  deviceName: '',
  deviceRating: 0,
  programs: [],
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
