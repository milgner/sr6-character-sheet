import ItemListStoreMutations from './ItemListStoreMutations';


export enum FeatType {
  Advantage= 'advantage',
  Disadvantage = 'disadvantage',
}

const initialState = {
  items: [
    {
      id: 0,
      name: 'Analytischer Geist',
      notes: '1 Bonus-Edge f. Proben mit Logik',
      type: FeatType.Advantage,
    },
    {
      id: 1,
      name: 'Härtung',
      notes: '1 Edge f. Widerstand gg. Matrixschaden',
      type: FeatType.Advantage,
    },
    {
      id: 2,
      name: 'Willensstark',
      notes: 'Edge-Boost Proben mit WIL kosten -1',
      type: FeatType.Advantage,
    },
    {
      id: 3,
      name: 'Beidhändigkeit',
      notes: '',
      type: FeatType.Advantage,
    },
    {
      id: 4,
      name: 'Allergie',
      notes: 'Erdbeeren, -4 auf Proben',
      type: FeatType.Disadvantage,
    },
    {
      id: 5,
      name: 'Abhängigkeit',
      notes: 'Zen, 3 Tage',
      type: FeatType.Disadvantage,
    },
  ],
};


const FeatStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem() {
      return {
        id: null,
        name: '',
        notes: '',
        type: FeatType.Advantage,
      };
    },
  },
};

export default FeatStore;
