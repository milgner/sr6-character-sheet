import { simpleUpdaters } from '@/store/util';
import { CharacterType } from '@/model';

interface AttributesState {
  bod: number;
  agi: number;
  rea: number;
  str: number;
  wil: number;
  log: number;
  int: number;
  cha: number;
  edg: number;
  mag: number;
  res: number;
  ess: number;
  iniDice: number;
  movement: number;
  currentEdge: number;
  attackUnarmed: number;
  defense: number;
  characterType: CharacterType;
}
const initialState: AttributesState = {
  bod: 0,
  agi: 0,
  rea: 0,
  str: 0,
  wil: 0,
  log: 0,
  int: 0,
  cha: 0,
  edg: 0,
  mag: 0,
  res: 0,
  ess: 6,
  iniDice: 1,
  movement: 10,
  currentEdge: 0,
  attackUnarmed: 0,
  defense: 0,
  characterType: CharacterType.mundane,
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
      return rootState.personalData.characterType === CharacterType.awakenedMage ? 2 : null;
    },
    astralIniBase(state: any, _getters: any, rootState: any): number | null {
      if (rootState.personalData.characterType !== CharacterType.awakenedMage) {
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
