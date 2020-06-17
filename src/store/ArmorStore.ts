import ItemListStoreMutations from './ItemListStoreMutations';

const initialState = {
  items: [
    {
      id: 0,
      name: 'Ballistische Maske',
      rating: 1,
      notes: 'Programmierbare Tarnung',
    }, {
      id: 1,
      name: 'Gefütterter Mantel',
      rating: 3,
      notes: 'Programmierbare Tarnung, Getarnte Magazintasche',
    },
  ],
};

const ArmorStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem() {
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
