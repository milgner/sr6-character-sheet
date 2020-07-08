import ItemListStoreMutations from './ItemListStoreMutations';

interface Connection {
  id: number | null;
  name: string;
  description: string;
  loyalty: number;
  influence: number;
}

interface ConnectionState {
  items: Connection[];
}

const initialState: ConnectionState = {
  items: [],
};

const ConnectionStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): Connection {
      return {
        id: null,
        name: '',
        description: '',
        loyalty: 1,
        influence: 1,
      };
    },
  },
};

export default ConnectionStore;
