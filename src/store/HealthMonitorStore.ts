import { simpleUpdaters } from '@/store/util';

const initialState = {
  stunDamage: 0,
  physicalDamage: 0,
};

const HealthMonitorStore = {
  namespaced: true,
  state: initialState,
  mutations: {
    ...simpleUpdaters(initialState),
  },
  actions: {},
  getters: {
    maxPhysicalDamage(_state: any, _getters: any, rootStore: any) {
      return 8 + Math.round(rootStore.attributes.bod / 2);
    },
    maxStunDamage(_state: any, _getters: any, rootStore: any) {
      return 8 + Math.round(rootStore.attributes.wil / 2);
    },
    stunDamageModifier(state: any) {
      return Math.ceil(state.stunDamage / -3);
    },
    physicalDamageModifier(state: any) {
      return Math.ceil(state.physicalDamage / -3);
    },
  },
};

export default HealthMonitorStore;
