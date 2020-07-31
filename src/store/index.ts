// @ts-nocheck

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import boxes from '@/components/boxes';
import { RootState } from '@/store/TypeDefs';

import i18n from '../i18n';

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
import SpellsStore from './SpellsStore';
import MeleeWeaponsStore from './MeleeWeaponsStore';
import AdeptPowersStore from './AdeptPowersStore';
import ComplexFormsStore from './ComplexFormsStore';
import VehiclesStore from './VehiclesStore';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'sr6Character',
});

function determineNewItemCoordinates(layout: BoxState[]): [number, number] {
  const columnMax: any = {};
  layout.forEach((e: BoxState) => {
    // if it's in a different "lane", where there's place in a higher spot, put it there
    const topY = e.y + e.h;
    if (columnMax[e.x] === undefined || columnMax[e.x] < topY) {
      columnMax[e.x] = topY;
    }
  });
  let bestY = 9999;
  let bestX = 0;
  Object.entries(columnMax).forEach(([x, y]) => {
    if ((y as number) < bestY) {
      bestY = y as number;
      bestX = Number.parseInt(x, 10);
    }
  });
  return [bestX, bestY];
}

const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    locale: 'en',
    layout: [
      {
        x: 0,
        y: 0,
        w: 6,
        h: 6,
        i: '0',
        type: 'PersonalDataBox',
        moved: false,
      },
      {
        x: 0,
        y: 6,
        w: 6,
        h: 10,
        i: '1',
        type: 'AttributesBox',
      },
      {
        x: 0,
        y: 16,
        w: 6,
        h: 12,
        i: '2',
        type: 'SkillsBox',
      },
      {
        x: 0,
        y: 28,
        w: 6,
        h: 6,
        i: '3',
        type: 'LifestyleBox',
      },
      {
        x: 6,
        y: 0,
        w: 6,
        h: 3,
        i: '4',
        type: 'FightSummaryBox',
      },
      {
        x: 6,
        y: 3,
        w: 6,
        h: 6,
        i: '5',
        type: 'HealthMonitorBox',
      },
      {
        x: 6,
        y: 9,
        w: 6,
        h: 7,
        i: '6',
        type: 'FeatBox',
      },
      {
        x: 6,
        y: 16,
        w: 6,
        h: 8,
        i: '7',
        type: 'ConnectionsBox',
      },
      {
        x: 6,
        y: 24,
        w: 6,
        h: 15,
        i: '8',
        type: 'EquipmentBox',
      },
    ],
  },
  mutations: {
    addBox(state, boxData) {
      state.layout.push(boxData);
    },
    updateLayout(state, layout) {
      state.layout = [...layout];
    },
    setLocale(state, newLocale) {
      i18n.locale = newLocale;
      state.locale = newLocale;
    },
  },
  actions: {
    downloadState({ state }) {
      const data = vuexLocal.storage.getItem('sr6Character') as string;
      const blob = new Blob([data], {
        type: 'application/json',
      });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${state.personalData.name || i18n.t('defaultFilename')}.json`;
      link.click();
      setTimeout(() => link.remove(), 1000);
    },
    setLocale({ commit }, newLocale: string) {
      commit('setLocale', newLocale);
    },
    async addBox({ state, dispatch, commit }, boxType: BoxType) {
      const [x, y] = determineNewItemCoordinates(state.layout);
      const maxI = state.layout
        .reduce((a: number, e: BoxState) => Math.max(a, Number.parseInt(e.i, 10)), 0);
      const boxData = {
        x,
        y,
        h: boxes[boxType].defaultHeight,
        i: (maxI + 1).toString(),
        w: 6,
        type: boxType,
        itemId: undefined,
      };
      const { repeatableStore } = boxes[boxType];
      if (repeatableStore) {
        boxData.itemId = await dispatch(`${repeatableStore}/initNewInstance`);
      }
      commit('addBox', boxData);
      return Promise.resolve(boxData);
    },
    removeRepeatedBox({ rootState }, [boxType, itemId]: [BoxType, string]) {
      const moduleItems = rootState[boxes[boxType].repeatableStore].items;
      delete moduleItems[itemId];
    },
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
    spells: SpellsStore,
    meleeWeapons: MeleeWeaponsStore,
    adeptPowers: AdeptPowersStore,
    complexForms: ComplexFormsStore,
    vehicles: VehiclesStore,
  },
  getters: {
    availableBoxes(state: RootState) {
      const allTypes = Object.entries(boxes)
        .map(([k, v]) => k) as BoxType[];
      return allTypes.filter((type: BoxType) => !!((boxes[type] as any).repeatableStore)
          || !state.layout.some((e: any) => e.type === type));
    },
    minimumCoordinates(state: RootState): [number, number] {
      return determineNewItemCoordinates(state.layout);
    },
  },
});

i18n.locale = store.state.locale;

export default store;
