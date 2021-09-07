import {
  SpellCategory, SpellDuration, SpellKind, SpellRange,
} from '@/model';
import { simpleUpdaters } from '@/store/util';
import ItemListStoreMutations from './ItemListStoreMutations';

export interface Spell {
  id: number | null;
  name: string;
  category: SpellCategory;
  kind: SpellKind;
  range: SpellRange;
  duration: SpellDuration;
  drain: number;
}

interface SpellsState {
  tradition: string;
  items: Spell[];
}

const initialState: SpellsState = {
  tradition: '',
  items: [],
};

const SpellsStore = {
  namespaced: true,
  state: initialState,
  mutations: {
    ...ItemListStoreMutations,
    ...simpleUpdaters(initialState),
  },
  getters: {
    newItem(): Spell {
      return {
        id: null,
        name: '',
        category: SpellCategory.combat,
        drain: 0,
        duration: SpellDuration.instant,
        kind: SpellKind.mana,
        range: SpellRange.los,
      };
    },
  },
};

export default SpellsStore;
