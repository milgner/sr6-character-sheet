export enum CharacterType {
  mundane = 'mundane',
  awakenedMage = 'mage',
  awakenedTechnomancer = 'technomancer',
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

export enum AmmoFeedType {
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
  untrained: boolean;
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
    specializations: ['astralSignatures', 'astralCombat', 'emotionalStates', 'spiritTypes'],
    mainAttribute: Attribute.intuition,
    untrained: false,
  },
  athletics: {
    specializations: ['archery', 'climbing', 'flying', 'escaping', 'sprinting', 'swimming', 'throwing'],
    mainAttribute: Attribute.agility,
    untrained: true,
  },
  biotech: {
    specializations: ['biotechnology', 'cybertechnology', 'firstAid', 'medicine'],
    mainAttribute: Attribute.logic,
    untrained: false,
  },
  closeCombat: {
    specializations: ['blades', 'clubs', 'unarmedCombat'],
    mainAttribute: Attribute.agility,
    untrained: true,
  },
  con: {
    specializations: ['acting', 'disguise', 'impersonation', 'performance'],
    mainAttribute: Attribute.charisma,
    untrained: true,
  },
  conjuring: {
    specializations: ['summoning', 'banishing'],
    mainAttribute: Attribute.magic,
    untrained: false,
  },
  cracking: {
    specializations: ['electronicWarfare', 'hacking', 'cyberCombat'],
    mainAttribute: Attribute.logic,
    untrained: false,
  },
  electronics: {
    specializations: ['computer', 'hardware', 'software'],
    mainAttribute: Attribute.logic,
    untrained: true,
  },
  enchanting: {
    specializations: ['alchemy', 'disenchanting', 'artificing'],
    mainAttribute: Attribute.magic,
    untrained: false,
  },
  engineering: {
    specializations: [
      'aeronauticsMechanic',
      'armorer',
      'automotiveMechanic',
      'demolitions',
      'gunnery',
      'industrialMechanic',
      'lockpicking',
      'nauticalMechanic'],
    mainAttribute: Attribute.logic,
    untrained: true,
  },
  firearms: {
    specializations: ['rifles', 'automatics', 'pistols', 'shotguns', 'longarms'],
    mainAttribute: Attribute.agility,
    untrained: true,
  },
  influence: {
    specializations: ['intimidation', 'leadership', 'etiquette', 'instruction', 'negotiation'],
    mainAttribute: Attribute.charisma,
    untrained: true,
  },
  outdoors: {
    specializations: ['navigation', 'tracking', 'survival',
      'environmentForest', 'environmentDesert', 'environmentUrban'],
    mainAttribute: Attribute.intuition,
    untrained: true,
  },
  perception: {
    specializations: ['aural', 'visual', 'tactile',
      'environmentForest', 'environmentDesert', 'environmentUrban'],
    mainAttribute: Attribute.intuition,
    untrained: true,
  },
  piloting: {
    specializations: ['groundcraft', 'aircraft', 'watercraft'],
    mainAttribute: Attribute.reaction,
    untrained: true,
  },
  sorcery: {
    specializations: ['counterspelling', 'ritualSpellcasting', 'spellcasting'],
    mainAttribute: Attribute.magic,
    untrained: false,
  },
  stealth: {
    specializations: ['camouflage', 'disguise', 'palming', 'sneaking'],
    mainAttribute: Attribute.agility,
    untrained: true,
  },
  tasking: {
    specializations: ['compiling', 'decompiling', 'registering'],
    mainAttribute: Attribute.resonance,
    untrained: false,
  },
  exoticWeapons: {
    specializations: [],
    mainAttribute: Attribute.agility,
    untrained: false,
  },
};

export interface CharacterSkill {
  id: number | null;
  name: ActionSkill | string; // knowledge skills and languages don't have a definitive list
  type: SkillType;
  rating: SkillRanking;
  specialization: string | undefined;
  expertise: string | undefined;
}
