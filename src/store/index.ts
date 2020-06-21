import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import boxes from '@/components/boxes';
import AttributesStore from './AttributesStore';
import PersonalDataStore from './PersonalDataStore';
import HealthMonitorStore from './HealthMonitorStore';
import MatrixStore from './MatrixStore';
import BodytechStore from './BodytechStore';
import ArmorStore from './ArmorStore';
import EquipmentStore from './EquipmentStore';
import FeatStore from './FeatStore';
import ConnectionStore from './ConnectionStore';
import RangedWeaponsStore from './RangedWeaponsStore';
import SkillsStore from './SkillsStore';
import LifestyleStore from './LifestyleStore';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'sr6Character',
});

interface BoxState {
  x: number;
  y: number;
  w: number;
  h: number;
  i: number;
  type: string;
}

interface RootState {
  layout: BoxState[];
}

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    layout: [
      {
        x: 0,
        y: 0,
        w: 6,
        h: 6,
        i: 0,
        type: 'PersonalDataBox',
      },
      {
        x: 0,
        y: 6,
        w: 6,
        h: 10,
        i: 1,
        type: 'AttributesBox',
      }, {
        x: 0,
        y: 15,
        w: 6,
        h: 12,
        i: 2,
        type: 'SkillsBox',
      }, {
        x: 0,
        y: 26,
        w: 6,
        h: 6,
        i: 3,
        type: 'LifestyleBox',
      }, {
        x: 6,
        y: 0,
        w: 6,
        h: 3,
        i: 4,
        type: 'FightSummaryBox',
      }, {
        x: 6,
        y: 3,
        w: 6,
        h: 6,
        i: 5,
        type: 'HealthMonitorBox',
      }, {
        x: 6,
        y: 8,
        w: 6,
        h: 7,
        i: 6,
        type: 'FeatBox',
      }, {
        x: 6,
        y: 19,
        w: 6,
        h: 8,
        i: 7,
        type: 'ConnectionsBox',
      }, {
        x: 0,
        y: 23,
        w: 6,
        h: 5,
        i: 8,
        type: 'RangedWeaponsBox',
      }, {
        x: 0,
        y: 34,
        w: 6,
        h: 4,
        i: 9,
        type: 'BodytechBox',
      }, {
        x: 6,
        y: 38,
        w: 6,
        h: 15,
        i: 10,
        type: 'EquipmentBox',
      }, {
        x: 0,
        y: 38,
        w: 6,
        h: 5,
        i: 12,
        type: 'ArmorBox',
      },
    ],
  },
  mutations: {
    addBox(state, boxType) {
      let x = 0;
      const maxY = state.layout.reduce((a, e) => {
        const y = e.y + e.h;
        if (y > a) {
          x = e.x;
          return y;
        }
        return a;
      }, 0);
      state.layout.push({
        x,
        y: maxY,
        h: boxType.defaultHeight,
        i: state.layout.length + 1,
        w: 6,
        type: boxType,
      });
    },
  },
  actions: {
  },
  modules: {
    personalData: PersonalDataStore,
    attributes: AttributesStore,
    matrix: MatrixStore,
    healthMonitor: HealthMonitorStore,
    bodytech: BodytechStore,
    armor: ArmorStore,
    equipment: EquipmentStore,
    feats: FeatStore,
    connections: ConnectionStore,
    rangedWeapons: RangedWeaponsStore,
    skills: SkillsStore,
    lifestyle: LifestyleStore,
  },
  getters: {
    boxesByCategory() {
      return Object.entries(boxes).filter(([k, v]) => k === 'true');
    },

    availableBoxes() {
      return {};
    },
  },
});
