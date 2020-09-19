import {
  SkillType, ActionSkill, CharacterSkill, ActionSkillDescriptions,
} from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

interface SkillsState {
  items: CharacterSkill[];
}

const initialState: SkillsState = {
  items: Object.entries(ActionSkillDescriptions)
    .filter(([_name, props]) => props.untrained)
    .map(([name, _props], index) => ({
      id: index,
      name,
      rating: 0,
      type: SkillType.action,
      specialization: undefined,
      expertise: undefined,
    })),
};

const SkillsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem(): CharacterSkill {
      return {
        id: null,
        name: '',
        rating: 0,
        type: SkillType.action,
        specialization: undefined,
        expertise: undefined,
      };
    },

    actionSkills(store: any) {
      return store.items.filter((i: CharacterSkill) => i.type === SkillType.action);
    },

    knowledgeSkills(store: any) {
      return store.items.filter((i: CharacterSkill) => i.type !== SkillType.action);
    },

    availableActionSkills(store: any): ActionSkill[] {
      const skills = Object.keys(ActionSkill) as ActionSkill[];
      function skillLearned(skill: ActionSkill) {
        return store.items.findIndex((e: CharacterSkill) => e.type === SkillType.action
          && skill === e.name) === -1;
      }
      return skills.filter(skillLearned);
    },
  },
};

export default SkillsStore;
