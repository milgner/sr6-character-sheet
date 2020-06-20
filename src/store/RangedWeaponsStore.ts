import ItemListStoreMutations from './ItemListStoreMutations';

export enum DamageType {
  physical = 'P',
  stun = 'S',
}

export enum AmmoType {
  breakAction = 'b',
  clip = 'c',
  drum = 'd',
  muzzleLoader = 'ml',
  internal = 'm',
  cylinder = 'cy',
  belt = 'belt',
}

const initialState = {
  items: [
    {
      id: 0,
      name: 'Ares Predator VI',
      damageValue: 3,
      damageType: DamageType.physical,
      mode: 'HM/SM',
      close: 10,
      near: 10,
      medium: 8,
      far: 0,
      extreme: 0,
      ammoCount: 15,
      ammoType: AmmoType.clip,
    },
  ],
};


const RangedWeaponsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem() {
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
