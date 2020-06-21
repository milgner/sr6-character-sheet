import { simpleUpdaters } from './util';

interface LifestyleState {
  primaryLifestyle: string;
  nuyen: number;
  idsAndLicenses: string;
}

const initialState: LifestyleState = {
  primaryLifestyle: '',
  nuyen: 0,
  idsAndLicenses: '',
};

const LifestyleStore = {
  namespaced: true,
  state: initialState,
  mutations: simpleUpdaters(initialState),
};

export default LifestyleStore;
