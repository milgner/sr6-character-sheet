import {
  SkillType, ActionSkill, LanguageSkillRating, CharacterSkill,
} from '@/model';
import ItemListStoreMutations from './ItemListStoreMutations';

const initialState = {
  items: [
    {
      id: 0,
      name: ActionSkill.athletics,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 1,
      name: ActionSkill.biotech,
      rating: 3,
      type: SkillType.action,
    },
    {
      id: 2,
      name: ActionSkill.cracking,
      rating: 6,
      type: SkillType.action,
    },
    {
      id: 3,
      name: ActionSkill.influence,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 4,
      name: ActionSkill.electronics,
      rating: 3,
      type: SkillType.action,
    },
    {
      id: 5,
      name: ActionSkill.firearms,
      rating: 3,
      type: SkillType.action,
    },
    {
      id: 6,
      name: ActionSkill.stealth,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 7,
      name: ActionSkill.engineering,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 8,
      name: ActionSkill.outdoors,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 9,
      name: ActionSkill.piloting,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 10,
      name: ActionSkill.con,
      rating: 1,
      type: SkillType.action,
    },
    {
      id: 11,
      name: ActionSkill.perception,
      rating: 2,
      type: SkillType.action,
    },
    {
      id: 12,
      name: 'Englisch',
      rating: LanguageSkillRating.native,
      type: SkillType.language,
    },
    {
      id: 13,
      name: 'Französisch',
      rating: LanguageSkillRating.expert,
      type: SkillType.language,
    },
    {
      id: 14,
      name: 'Hackergruppen',
      type: SkillType.knowledge,
    },
    {
      id: 15,
      name: 'Tech-Konzerne',
      type: SkillType.knowledge,
    },
    {
      id: 16,
      name: 'Sicherheitssysteme',
      type: SkillType.knowledge,
    },
    {
      id: 17,
      name: 'Straßen von Toronto',
      type: SkillType.knowledge,
    },
    {
      id: 18,
      name: 'Virtuelle Nachtclubs',
      type: SkillType.knowledge,
    },
    {
      id: 19,
      name: 'Polizeikonzerne',
      type: SkillType.knowledge,
    },
  ],
};


const SkillsStore = {
  namespaced: true,
  state: initialState,
  mutations: ItemListStoreMutations,
  getters: {
    newItem() {
      return {
        id: null,
        name: '',
        rating: 0,
        type: SkillType.action,
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
