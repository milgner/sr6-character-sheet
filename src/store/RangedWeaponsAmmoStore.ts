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

export enum WeaponClass {
  taser = 'taser',
  lightPistol = 'lightPistol',
  heavyPistol = 'heavyPistol',
  rifle = 'rifle',
  automaticRifle = 'automaticRifle',
  cannon = 'cannon',
  dmsoGel = 'dmsoGel',
  injectionDart = 'injectionDart'
}

interface RangedWeaponsAmmo {
  id: number | null;
  type: AmmoType;
  weaponClass: WeaponClass;
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
        weaponClass: WeaponClass.taser,
        amount: 0,
      };
    },
  },
};

export default RangedWeaponsAmmoStore;
