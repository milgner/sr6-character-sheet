import ItemListStoreMutations from './ItemListStoreMutations';

interface Equipment {
  id: number | null;
  name: string;
  rating?: number;
  notes?: string;
}

interface EquipmentState {
  items: Equipment[];
}

const initialState: EquipmentState = {
  items: [],
};

const EquipmentStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): Equipment {
      return {
        id: null,
        name: '',
        rating: 0,
        notes: '',
      };
    },
  },
};

export default EquipmentStore;
