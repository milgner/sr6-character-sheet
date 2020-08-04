import { simpleUpdaters } from '@/store/util';
import { CharacterType } from '@/model';

interface PersonalDataState {
  name: string;
  metaType: string;
  ethnicity: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  reputation: number;
  searchWarrantLevel: number;
  spentKarma: number;
  totalKarma: number;
  characterType: CharacterType;
}

const initialState: PersonalDataState = {
  name: '',
  metaType: '',
  ethnicity: '',
  age: 0,
  gender: '',
  height: '',
  weight: '',
  reputation: 0,
  searchWarrantLevel: 0,
  spentKarma: 0,
  totalKarma: 0,
  characterType: CharacterType.Mundane,
};

const PersonalDataStore = {
  state: initialState,
  namespaced: true,
  mutations: {
    ...simpleUpdaters(initialState),
  },
};

export default PersonalDataStore;
