import { AmmoFeedType, DamageType } from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

export enum WeaponMode {
  SS = 'SS', BF = 'BF', SA = 'SA', FA = 'FA'
}

interface RangedWeapon {
  id: number | null;
  name: string;
  damageValue: number;
  damageType: DamageType;
  modes: WeaponMode[];
  currentMode: WeaponMode;
  close: number;
  near: number;
  medium: number;
  far: number;
  extreme: number;
  ammoCount: number;
  ammoFeedType: AmmoFeedType;
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
        modes: [WeaponMode.SS],
        currentMode: WeaponMode.SS,
        close: 0,
        near: 0,
        medium: 0,
        far: 0,
        extreme: 0,
        ammoCount: 0,
        ammoFeedType: AmmoFeedType.clip,
      };
    },
  },
};

export default RangedWeaponsStore;
