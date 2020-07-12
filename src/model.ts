export enum CharacterType {
  Mundane = 'mundane',
  AwakenedMage = 'mage',
  AwakenedTechnomancer = 'technomancer',
}

export enum Attribute {
  body = 'bod',
  agility = 'agi',
  reaction = 'rea',
  strength = 'str',
  willpower = 'wil',
  logic = 'log',
  intuition = 'int',
  charisma = 'cha',
  edge = 'edg',
  magic = 'mag',
  resonance = 'res',
  essence = 'ess',
}

export enum FeatType {
  advantage= 'advantage',
  disadvantage = 'disadvantage',
}

export enum SkillType {
  action = 'action',
  language = 'language',
  knowledge = 'knowledge',
}

export enum DamageType {
  physical = 'physical',
  stun = 'stun',
}

export enum AmmoType {
  breakAction = 'breakAction',
  clip = 'clip',
  drum = 'drum',
  muzzleLoader = 'muzzleLoader',
  internal = 'internal',
  cylinder = 'cylinder',
  belt = 'belt',
}

export enum SpellCategory {
  health = 'health',
  illusion = 'illusion',
  combat = 'combat',
  manipulation = 'manipulation',
  detection = 'detection',
}

export enum SpellRange {
  touch = 'touch',
  los = 'los',
  losArea = 'losArea',
  special = 'special',
}

export enum SpellKind {
  mana = 'mana',
  physical = 'physical',
}

export enum SpellDuration {
  instant = 'instant',
  sustained = 'sustained',
  temporary = 'temporary',
  permanent = 'permanent',
}

export enum ComplexFormDuration {
  instant = 'instant',
  sustained = 'sustained',
  permanent = 'permanent',
}

interface ActionSkillDescription {
  specializations: string[];
  mainAttribute: Attribute;
}

export enum LanguageSkillRating {
  fluid = 'fluid',
  specialized = 'specialized',
  expert = 'expert',
  native = 'native',
}

type SkillRanking = number | LanguageSkillRating;

export enum ActionSkill {
  astral = 'astral',
  athletics = 'athletics',
  biotech = 'biotech',
  closeCombat = 'closeCombat',
  con = 'con',
  conjuring = 'conjuring',
  cracking = 'cracking',
  electronics = 'electronics',
  enchanting = 'enchanting',
  engineering = 'engineering',
  firearms = 'firearms',
  influence = 'influence',
  outdoors = 'outdoors',
  perception = 'perception',
  piloting = 'piloting',
  sorcery = 'sorcery',
  stealth = 'stealth',
  tasking = 'tasking',
  exoticWeapons = 'exoticWeapons',
}

export const ActionSkillDescriptions: { [name in ActionSkill]: ActionSkillDescription } = {
  astral: {
    specializations: [],
    mainAttribute: Attribute.intuition,
  },
  athletics: {
    specializations: [],
    mainAttribute: Attribute.agility,
  },
  biotech: {
    specializations: [],
    mainAttribute: Attribute.logic,
  },
  closeCombat: {
    specializations: [],
    mainAttribute: Attribute.agility,
  },
  con: {
    specializations: [],
    mainAttribute: Attribute.charisma,
  },
  conjuring: {
    specializations: [],
    mainAttribute: Attribute.magic,
  },
  cracking: {
    specializations: [],
    mainAttribute: Attribute.logic,
  },
  electronics: {
    specializations: [],
    mainAttribute: Attribute.logic,
  },
  enchanting: {
    specializations: [],
    mainAttribute: Attribute.magic,
  },
  engineering: {
    specializations: [],
    mainAttribute: Attribute.logic,
  },
  firearms: {
    specializations: [],
    mainAttribute: Attribute.agility,
  },
  influence: {
    specializations: [],
    mainAttribute: Attribute.charisma,
  },
  outdoors: {
    specializations: [],
    mainAttribute: Attribute.intuition,
  },
  perception: {
    specializations: [],
    mainAttribute: Attribute.intuition,
  },
  piloting: {
    specializations: [],
    mainAttribute: Attribute.reaction,
  },
  sorcery: {
    specializations: [],
    mainAttribute: Attribute.magic,
  },
  stealth: {
    specializations: [],
    mainAttribute: Attribute.agility,
  },
  tasking: {
    specializations: [],
    mainAttribute: Attribute.resonance,
  },
  exoticWeapons: {
    specializations: [],
    mainAttribute: Attribute.agility,
  },
};

export interface CharacterSkill {
  id: number | null;
  name: ActionSkill | string; // knowledge skills and languages don't have a definitive list
  type: SkillType;
  rating: SkillRanking;
  specializations: string[];
}
