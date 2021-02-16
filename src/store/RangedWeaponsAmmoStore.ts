import ItemListStoreMutations from './ItemListStoreMutations';

export enum AmmoType {
  apds = 'apds',
  explosive = 'explosive',
  flechette = 'flechette',
  gel = 'gel',
  shocker = 'shocker',
  standard = 'standard',
  caseless = 'caseless',
}

interface RangedWeaponsAmmo {
  id: number | null;
  type: AmmoType;
  amount: number;
}

interface RangedWeaponsAmmoState {
  items: RangedWeaponsAmmo[];
}

const initialState: RangedWeaponsAmmoState = {
  items: [],
};

const RangedWeaponsAmmoStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): RangedWeaponsAmmo {
      return {
        id: null,
        type: AmmoType.standard,
        amount: 0,
      };
    },
  },
};

export default RangedWeaponsAmmoStore;
