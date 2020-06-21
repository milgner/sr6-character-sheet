import { AmmoType, DamageType } from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

interface RangedWeapon {
  id: number | null;
  name: string;
  damageValue: number;
  damageType: DamageType;
  mode: string;
  close: number;
  near: number;
  medium: number;
  far: number;
  extreme: number;
  ammoCount: number;
  ammoType: AmmoType;
}

interface RangedWeaponsState {
  items: RangedWeapon[];
}

const initialState: RangedWeaponsState = {
  items: [],
};

const RangedWeaponsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): RangedWeapon {
      return {
        id: null,
        name: '',
        damageValue: 0,
        damageType: DamageType.physical,
        mode: 'HM',
        close: 0,
        near: 0,
        medium: 0,
        far: 0,
        extreme: 0,
        ammoCount: 0,
        ammoType: AmmoType.clip,
      };
    },
  },
};

export default RangedWeaponsStore;
