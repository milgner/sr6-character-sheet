import ItemListStoreMutations from './ItemListStoreMutations';

const initialState = {
  items: [
    {
      id: 0,
      name: 'Cyberbuchse',
      rating: 4,
      notes: 'D/F 7/6, Matrix-Ini +2',
      essence: 2.3,
    }, {
      id: 1,
      name: 'Zerebralbooster',
      rating: 2,
      notes: 'LOG +2',
      essence: 0.4,
    },
  ],
};

const BodytechStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem() {
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
