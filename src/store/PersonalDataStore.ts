import { simpleUpdaters } from '@/store/util';

export enum CharacterType {
  Mundane = 'mundane',
  AwakenedMage = 'mage',
  AwakenedTechnomancer = 'technomancer',
}

const initialState = {
  name: 'Fizzbuzz (Xavier Devereaux)',
  metaType: 'Mensch',
  ethnicity: 'Kaukasisch',
  age: 25,
  gender: 'Männlich',
  height: '1.74m',
  weight: '65kg',
  reputation: 0,
  searchWarrantLevel: 0,
  spentKarma: 0,
  totalKarma: 0,
  characterType: CharacterType.Mundane,
};

const PersonalDataStore = {
  state: initialState,
  namespaced: true,
  mutations: {
    ...simpleUpdaters(initialState),
  },
  actions: {},
  getters: {
    availableKarma(state: any) {
      return state.totalKarma - state.spentKarma;
    },
  },
};

export default PersonalDataStore;
