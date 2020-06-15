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
  ] as ItemData[],
};

type ItemData = {
  id: number;
  name: string;
  rating: number;
  notes: string;
  essence: number;
}

type updateItemParams = {
  id: number;
  data: ItemData;
}

const BodytechStore = {
  namespaced: true,
  state: initialState,
  mutations: {
    removeItem(state: any, id: number) {
      const index = state.items.findIndex((e: any) => e.id === id);
      state.items.splice(index, 1);
    },
    updateItem(state: any, { id, data }: updateItemParams) {
      const index = state.items.findIndex((e: any) => e.id === id);
      Object.assign(state.items[index], data);
    },
    addItem(state: any, item: any) {
      /* eslint-disable no-param-reassign */
      item.id = state.items[state.items.length - 1].id + 1;
      state.items.push(item);
    },
  },
  getters: {
    newItem() {
      return {
        text: '',
        rating: 0,
        essence: 0,
        notes: '',
      };
    },
  },
};

export default BodytechStore;
