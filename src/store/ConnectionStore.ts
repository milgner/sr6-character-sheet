import ItemListStoreMutations from './ItemListStoreMutations';

const initialState = {
  items: [
    {
      id: 0,
      name: 'Todd',
      description: 'Mr. Johnson',
      loyalty: 1,
      influence: 2,
    },
    {
      id: 1,
      name: 'Sallie',
      description: 'Schieber',
      loyalty: 2,
      influence: 3,
    },
    {
      id: 2,
      name: 'Auguste',
      description: 'Drogendealer',
      loyalty: 3,
      influence: 2,
    },
    {
      id: 3,
      name: 'Sam',
      description: 'Barkeep',
      loyalty: 2,
      influence: 1,
    },
  ],
};


const ConnectionStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem() {
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
