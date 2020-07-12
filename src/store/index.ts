import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import boxes from '@/components/boxes';

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

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'sr6Character',
});

export type BoxType = keyof (typeof boxes);

export interface BoxState {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  type: string;
}

interface RootState {
  layout: BoxState[];
}

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

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
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
    addBox(state, boxType: BoxType) {
      const [x, y] = determineNewItemCoordinates(state.layout);
      const maxI = state.layout
        .reduce((a: number, e: BoxState) => Math.max(a, Number.parseInt(e.i, 10)), 0);
      state.layout.push({
        x,
        y,
        // FIXME: improve type declaration
        h: boxes[boxType].defaultHeight,
        i: (maxI + 1).toString(),
        w: 6,
        type: boxType,
      });
    },
    updateLayout(state, layout) {
      state.layout = [...layout];
    },
  },
  actions: {
    downloadState(store) {
      const data = vuexLocal.storage.getItem('sr6Character') as string;
      const blob = new Blob([data], {
        type: 'application/json',
      });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${store.state.personalData.name || i18n.t('defaultFilename')}.json`;
      link.click();
      setTimeout(() => link.remove(), 1000);
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
  },
  getters: {
    availableBoxes(store: any) {
      const allTypes = Object.entries(boxes)
        .map(([k, v]) => k) as BoxType[];
      return allTypes.filter((type: BoxType) => !!((boxes[type] as any).allowMultiple)
          || !store.layout.some((e: any) => e.type === type));
    },
    minimumCoordinates(store: any): [number, number] {
      return determineNewItemCoordinates(store.layout);
    },
  },
});
