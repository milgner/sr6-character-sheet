import ItemListStoreMutations from './ItemListStoreMutations';

const initialState = {
  items: [
    {
      id: 0,
      name: 'Kommlink Erika Elite (D2/F1)',
      rating: 4,
    },
    {
      id: 1,
      name: 'Kommlink Renraku Sensei (D2/0)',
      rating: 3,
    },
    {
      id: 2,
      name: 'Kleidung, gut, elektrochrom, AR Feedback',
    },
    {
      id: 3,
      name: 'AR-Handschuhe',
      rating: 3,
    },
    {
      id: 4,
      name: 'Satellitenverbindung (Rauschen max -5)',
      rating: 4,
    },
    {
      id: 5,
      name: 'SIM-Modul',
      rating: 3,
    },
    {
      id: 6,
      name: 'Subvokales Mikrofon',
      rating: 3,
    },
    {
      id: 7,
      name: 'Datenwanze',
      rating: 2,
    },
    {
      id: 8,
      name: 'White-Noise-Generator',
      rating: 3,
    },
    {
      id: 9,
      name: 'Wanzenscanner',
      rating: 3,
    },
    {
      id: 10,
      name: 'Shopsoft (Programme)',
      rating: 3,
    },
    {
      id: 11,
      name: 'Credsticks (10x Standard, 3x Silber)',
    },
    {
      id: 12,
      name: 'Kiste: Elektronik, Mechanik',
    },
    {
      id: 13,
      name: 'Medikit + Nachfüllpack',
    },
    {
      id: 14,
      name: 'Vitalmonitor',
    },
    {
      id: 15,
      name: 'Erste-Hilfe-Set x5',
    },
    {
      id: 16,
      name: 'Zen (x20)',
    },
    {
      id: 17,
      name: 'Kontaktlinsen (Smartlink, Bildverbindung)',
      rating: 3,
    },
    {
      id: 18,
      name: 'Ersatz-Magazine x9',
    },
    {
      id: 19,
      name: 'Schnellzieh-Tarnholster',
    },
  ],
};

const EquipmentStore = {
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

export default EquipmentStore;
