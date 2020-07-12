import { ComplexFormDuration } from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

interface ComplexForm {
  id: number | null;
  name: string;
  fading: number;
  duration: ComplexFormDuration;
}

interface ComplexFormsState {
  items: ComplexForm[];
}

const initialState: ComplexFormsState = {
  items: [],
};

const ComplexFormsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): ComplexForm {
      return {
        id: null,
        name: '',
        fading: 0,
        duration: ComplexFormDuration.instant,
      };
    },
  },
};

export default ComplexFormsStore;
