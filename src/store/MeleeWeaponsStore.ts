import { DamageType } from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

interface MeleeWeapon {
  id: number | null;
  name: string;
  damageValue: number;
  damageType: DamageType;
  close: number;
}

interface MeleeWeaponsState {
  items: MeleeWeapon[];
}

const initialState: MeleeWeaponsState = {
  items: [],
};

const MeleeWeaponsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): MeleeWeapon {
      return {
        id: null,
        name: '',
        damageValue: 0,
        damageType: DamageType.physical,
        close: 0,
      };
    },
  },
};

export default MeleeWeaponsStore;
