import { simpleUpdaters } from './util';

const initialState = {
  primaryLifestyle: 'Squatter',
  nuyen: 35,
  idsAndLicenses: 'Falsche SIN (4)',
};

const LifestyleStore = {
  namespaced: true,
  state: initialState,
  mutations: simpleUpdaters(initialState),
};

export default LifestyleStore;
