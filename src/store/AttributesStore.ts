import { simpleUpdaters } from '@/store/util';
import { CharacterType } from '@/model';

const initialState = {
  bod: 3,
  agi: 3,
  rea: 5,
  str: 2,
  wil: 5,
  log: 8,
  int: 5,
  cha: 3,
  edg: 5,
  mag: 0,
  res: 0,
  ess: 3.3,
  iniDice: 1,
  movement: 10,
  currentEdge: 5,
};

const AttributesStore = {
  namespaced: true,
  state: initialState,
  mutations: {
    ...simpleUpdaters(initialState),
  },
  actions: {},
  getters: {
    iniBase(state: any) {
      return state.rea + state.int;
    },
    matrixIniBase(state: any, _getters: any, rootState: any) {
      if (rootState.matrix.deviceRating == null || rootState.matrix.deviceRating === 0) {
        return null;
      }
      return state.int + rootState.matrix.dataProcessing;
    },
    matrixIniDice(_state: any, _gitters: any, rootState: any): number | null {
      if (rootState.matrix.deviceRating == null || rootState.matrix.deviceRating === 0) {
        return null;
      }
      return rootState.matrix.simHot ? 2 : 3;
    },
    astralIniDice(_state: any, _getters: any, rootState: any): number | null {
      return rootState.personalData.characterType === CharacterType.AwakenedMage ? 2 : null;
    },
    astralIniBase(state: any, _getters: any, rootState: any): number | null {
      if (rootState.personalData.characterType !== CharacterType.AwakenedMage) {
        return null;
      }
      return state.log + state.int;
    },
    composure(state: any) {
      return state.wil + state.cha;
    },
    judgeIntentions(state: any) {
      return state.wil + state.int;
    },
    carryLift(state: any) {
      return state.bod + state.wil;
    },
    memory(state: any) {
      return state.log + state.int;
    },
  },
};

export default AttributesStore;
