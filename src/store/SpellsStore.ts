import {
  SpellCategory, SpellDuration, SpellKind, SpellRange,
} from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

interface Spell {
  id: number | null;
  name: string;
  category: SpellCategory;
  kind: SpellKind;
  range: SpellRange;
  duration: SpellDuration;
  drain: number;
}

interface SpellsState {
  items: Spell[];
}

const initialState: SpellsState = {
  items: [],
};

const SpellsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
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
