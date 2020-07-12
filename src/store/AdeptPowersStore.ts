import ItemListStoreMutations from './ItemListStoreMutations';

interface AdeptPower {
  id: number | null;
  name: string;
  rating: number;
  notes: string;
}

interface AdeptPowersState {
  items: AdeptPower[];
}

const initialState: AdeptPowersState = {
  items: [],
};

const AdeptPowersStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): AdeptPower {
      return {
        id: null,
        name: '',
        rating: 0,
        notes: '',
      };
    },
  },
};

export default AdeptPowersStore;
