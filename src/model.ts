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
    specializations: ['astralSignatures', 'astralCombat', 'emotionalStates', 'spiritTypes'],
    mainAttribute: Attribute.intuition,
  },
  athletics: {
    specializations: ['archery', 'climbing', 'flying', 'escaping', 'sprinting', 'swimming', 'throwing'],
    mainAttribute: Attribute.agility,
  },
  biotech: {
    specializations: ['biotechnology', 'cybertechnology', 'firstAid', 'medicine'],
    mainAttribute: Attribute.logic,
  },
  closeCombat: {
    specializations: ['blades', 'clubs', 'unarmedCombat'],
    mainAttribute: Attribute.agility,
  },
  con: {
    specializations: ['acting', 'disguise', 'impersonation', 'performance'],
    mainAttribute: Attribute.charisma,
  },
  conjuring: {
    specializations: ['summoning', 'banishing'],
    mainAttribute: Attribute.magic,
  },
  cracking: {
    specializations: ['electronicWarfare', 'hacking', 'cyberCombat'],
    mainAttribute: Attribute.logic,
  },
  electronics: {
    specializations: ['computer', 'hardware', 'software'],
    mainAttribute: Attribute.logic,
  },
  enchanting: {
    specializations: ['alchemy', 'disenchanting', 'artificing'],
    mainAttribute: Attribute.magic,
  },
  engineering: {
    specializations: ['aeronauticsMechanic', 'armorer', 'automotiveMechanic', 'demolitions',
      'gunnery', 'industrialMechanic', 'lockpicking', 'nauticalMechanic'],
    mainAttribute: Attribute.logic,
  },
  firearms: {
    specializations: ['rifles', 'automatics', 'pistols', 'shotguns', 'longarms'],
    mainAttribute: Attribute.agility,
  },
  influence: {
    specializations: ['intimidation', 'leadership', 'etiquette', 'instruction', 'negotiation'],
    mainAttribute: Attribute.charisma,
  },
  outdoors: {
    specializations: ['navigation', 'tracking', 'survival',
      'environmentForest', 'environmentDesert', 'environmentUrban'],
    mainAttribute: Attribute.intuition,
  },
  perception: {
    specializations: ['aural', 'visual', 'tactile',
      'environmentForest', 'environmentDesert', 'environmentUrban'],
    mainAttribute: Attribute.intuition,
  },
  piloting: {
    specializations: ['groundcraft', 'aircraft', 'watercraft'],
    mainAttribute: Attribute.reaction,
  },
  sorcery: {
    specializations: ['counterspelling', 'ritualSpellcasting', 'spellcasting'],
    mainAttribute: Attribute.magic,
  },
  stealth: {
    specializations: ['camouflage', 'disguise', 'palming', 'sneaking'],
    mainAttribute: Attribute.agility,
  },
  tasking: {
    specializations: ['compiling', 'decompiling', 'registering'],
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
  specialization: string | undefined;
  expertise: string | undefined;
}
