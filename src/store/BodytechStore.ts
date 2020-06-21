import ItemListStoreMutations from './ItemListStoreMutations';

interface Bodytech {
  id: number | null;
  name: string;
  rating: number;
  essence: number;
  notes: string;
}

interface BodytechState {
  items: Bodytech[];
}

const initialState: BodytechState = {
  items: [],
};

const BodytechStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): Bodytech {
      return {
        id: null,
        name: '',
        rating: 0,
        essence: 0,
        notes: '',
      };
    },
  },
};

export default BodytechStore;
