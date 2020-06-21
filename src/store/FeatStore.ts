import { FeatType } from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

interface Feat {
  id: number | null;
  name: string;
  notes: string;
  type: FeatType;
}

interface FeatState {
  items: Feat[];
}

const initialState: FeatState = {
  items: [],
};

const FeatStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): Feat {
      return {
        id: null,
        name: '',
        notes: '',
        type: FeatType.advantage,
      };
    },
  },
};

export default FeatStore;
