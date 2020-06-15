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
  mutations: {
    removeItem(state: any, id: number) {
      const index = state.items.findIndex((e: any) => e.id === id);
      state.items.splice(index, 1);
    },
    addItem(state: any, item: any) {
      /* eslint-disable no-param-reassign */
      item.id = state.items[state.items.length - 1];
      state.items.push(item);
    },
  },
};

export default BodytechStore;
