import ItemListStoreMutations from './ItemListStoreMutations';

interface Armor {
  id: number | null;
  name: string;
  rating: number;
  notes: string;
}

interface ArmorState {
  items: Armor[];
}

const initialState: ArmorState = {
  items: [],
};

const ArmorStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): Armor {
      return {
        id: null,
        name: '',
        rating: 0,
        notes: '',
      };
    },
  },
};

export default ArmorStore;
