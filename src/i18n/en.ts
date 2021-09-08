export default {
  name: 'Name',
  rating: 'Rating',
  notes: 'Notes',
  dicePool: '# Dice',
  amount: 'Amount',

  dialogs: {
    add: 'Add',
    close: 'Close',
    update: 'Update',
  },

  globalMenu: {
    edit: {
      on: 'Start Editing Sheet',
      off: 'Finish Editing Sheet',
    },
    save: 'Save character',
    load: 'Load character',
    settings: 'Settings',
    legal: 'Legal Info',
  },

  settings: {
    title: 'Settings',
    locale: 'Language',
  },

  defaultFilename: 'Nameless Character',

  boxes: {
    PersonalDataBox: 'Personal Data',
    AttributesBox: 'Attributes',
    SkillsBox: 'Skills',
    RangedWeaponsBox: 'Ranged Weapons',
    RangedWeaponsAmmoBox: 'Ammunition',
    LifestyleBox: 'IDs /  Lifestyles / Currency',
    FightSummaryBox: 'Important Fight Info',
    HealthMonitorBox: 'Condition Monitor',
    FeatBox: 'Qualities',
    ConnectionsBox: 'Connections',
    MatrixStatsBox: 'Matrix Stats',
    EquipmentBox: 'Equipment',
    BodytechBox: 'Bodytech',
    ArmorBox: 'Armor',
    SpellsBox: 'Spells',
    MeleeWeaponsBox: 'Melee Weapons',
    AdeptPowersBox: 'Adept Powers',
    ComplexFormsBox: 'Complex Forms',
    VehicleBox: 'Vehicle',
  },
  attribute: 'Attribute',
  attributes: {
    str: 'Strength',
    bod: 'Body',
    agi: 'Agility',
    rea: 'Reaction',
    wil: 'Willpower',
    log: 'Logic',
    int: 'Intuition',
    cha: 'Charisma',
    edg: 'Edge',
    ess: 'Essence',
    ini: 'Initiative',
    astralIni: 'Astral Initiative',
    matrixIni: 'Matrix-Initiative',
    mag: 'Magic',
    res: 'Resonance',
    composure: 'Composure',
    judgeIntentions: 'Judge Intentions',
    memory: 'Memory',
    carryLift: 'Lift/Carry',
    movement: 'Movement',
    defense: 'Defense',
    attackUnarmed: 'Attack unarmed',
  },
  personalData: {
    name: 'Name / Primary Alias',
    metaType: 'Metatype',
    ethnicity: 'Ethnicity',
    age: 'Age',
    gender: 'Sex',
    height: 'Height',
    weight: 'Weight',
    reputation: 'Reputation',
    searchWarrantLevel: 'Heat',
    spentKarma: 'Spent Karma',
    totalKarma: 'Total Karma',
    characterTypes: {
      mundane: 'Mundan',
      awakenedMage: 'Magier',
      awakenedTechnomancer: 'Technomancer',
    },
  },
  matrix: {
    simModes: {
      cold: 'Cold Sim',
      hot: 'Hot Sim',
    },
    attack: 'Attack',
    sleaze: 'Sleaze',
    dataProcessing: 'Data Processing',
    firewall: 'Firewall',
    deviceName: 'Device Name',
    deviceRating: 'Rating',
    programs: 'Programs',
    noPrograms: 'No Programme',
    damageMonitor: 'Condition Monitor',
    availablePrograms: {
      babyMonitor: 'Babymonitor',
      browse: 'Browse',
      configurator: 'Configurator',
      edit: 'Edit',
      encryption: 'Encryption',
      search: 'Search',
      signalScrub: 'Signal Scrub',
      toolbox: 'Toolbox',
      virtualMachine: 'Virtual Machine',
      armor: 'Armor',
      track: 'Track',
      biofeedback: 'Biofeedback',
      biofeedbackFilter: 'Biofeedback Filter',
      exploit: 'Exploit',
      blackout: 'Blackout',
      defuse: 'Defuse',
      decryption: 'Decryption',
      lockdown: 'Lockdown',
      fork: 'Fork',
      chipGuard: 'Chip Guard',
      stealth: 'Stealth',
      overclock: 'Overclock',
    },
  },
  bodytech: {
    addDialog: {
      title: 'Add Bodytech',
    },
    updateDialog: {
      title: 'Edit Bodytech',
    },
  },
  adeptPowers: {
    addDialog: {
      title: 'Add Adept Power',
    },
    updateDialog: {
      title: 'Edit Adept Power',
    },
  },
  armor: {
    noData: 'No armor equipped',
    addDialog: {
      title: 'Add Armor',
    },
    updateDialog: {
      title: 'Edit Armor',
    },
  },
  equipment: {
    name: 'Item',
    addDialog: {
      title: 'Add Item',
    },
    updateDialog: {
      title: 'Edit Item',
    },
  },
  feats: {
    type: 'Type',
    advantage: 'Positive Quality',
    disadvantage: 'Negative Quality',
    addDialog: {
      title: 'Add Quality',
    },
    updateDialog: {
      title: 'Edit Quality',
    },
  },
  connections: {
    description: 'Description',
    loyalty: 'Loyality',
    influence: 'Influence',
    addDialog: {
      title: 'Add Connection',
    },
    updateDialog: {
      title: 'Edit Connection',
    },
  },
  weapons: {
    damage: 'Damage',
    damageType: 'Damage Type',
    damageTypes: {
      physical: 'Physical',
      stun: 'Stun',
    },
  },
  rangedWeapons: {
    mode: 'Mode',
    ammo: 'Ammo',
    ammoFeedType: 'Ammo Type',
    ammoCount: 'Mag.-Size',
    ranges: {
      close: 'Close',
      near: 'Near',
      medium: 'Medium',
      far: 'Far',
      extreme: 'Extreme',
    },
    ammoFeedTypes: {
      breakAction: 'Break Action',
      clip: 'Clip',
      drum: 'Drum',
      muzzleLoader: 'Muzzle Loader',
      internal: 'Internal',
      cylinder: 'Cylinder',
      belt: 'Belt',
    },
    ammoFeedTypeMnemonics: {
      breakAction: 'ba',
      clip: 'c',
      drum: 'd',
      muzzleLoader: 'ml',
      internal: 'i',
      cylinder: 'c',
      belt: 'b',
    },
    addDialog: {
      title: 'Add Ranged Weapon',
    },
    modes: {
      SS: 'EM',
      BF: 'SM',
      SA: 'HA',
      FA: 'AM',
    },
    updateDialog: {
      title: 'Edit Ranged Weapon',
    },
  },
  rangedWeaponsAmmo: {
    type: 'Type',
    weaponClass: 'Weapon Class',
    types: {
      apds: 'APDS',
      explosive: 'Explosive',
      flechette: 'Flechette',
      gel: 'Gel',
      shocker: 'Shocker',
      standard: 'Standard',
      caseless: 'Caseless',
    },
    weaponClasses: {
      taser: 'Taser',
      lightPistol: 'Holdout / Light Pistol / Automatic Pistol',
      heavyPistol: 'Heavy Pistol / Machine Pistol',
      rifle: 'Rifle',
      automaticRifle: 'Automatic Rifle',
      cannon: 'Cannon',
      dmsoGel: 'DMSO-Gelpack',
      injectionDart: 'Injection Dart',
      grenade: 'Grenade',
    },
    grenadeTypes: {
      concussion: 'Concussion Grenade',
      flash: 'Flash-Pack',
      gas: 'Gas Grenade',
      irSmoke: 'IR-Smoke Grenade',
      smoke: 'Smoke Grenade',
      cluster: 'Cluster Grenade',
      explosive: 'Explosive Grenade',
    },
    addDialog: {
      title: 'Add Ammo',
    },
    updateDialog: {
      title: 'Change Ammo',
    },
  },
  meleeWeapons: {
    addDialog: {
      title: 'Add Melee Weapon',
    },
    updateDialog: {
      title: 'Edit Melee Weapon',
    },
  },
  skills: {
    level: 'Level',
    actionSkills: 'Action Skills',
    knowledgeSkills: 'Knowledge Skills',
    types: {
      action: 'Action Skill',
      language: 'Language',
      knowledge: 'Knowledge Skill',
    },
    skillRating: {
      fluid: 'Fluid',
      native: 'Native Speaker',
      specialized: 'Specialized',
      expert: 'Expert',
    },
    skillRatingMnemonics: {
      specialized: 'S',
      expert: 'E',
    },
    skills: {
      astral: 'Astral',
      athletics: 'Athletics',
      biotech: 'Biotech',
      closeCombat: 'Close Combat',
      con: 'Con',
      conjuring: 'Conjuring',
      cracking: 'Cracking',
      electronics: 'Electronics',
      enchanting: 'Enchanting',
      engineering: 'Engineering',
      firearms: 'Firearms',
      influence: 'Influence',
      outdoors: 'Outdoors',
      perception: 'Perception',
      piloting: 'Piloting',
      sorcery: 'Sorcery',
      stealth: 'Stealth',
      tasking: 'Tasking',
      exoticWeapons: 'Exotic Weapons',
    },
    specializations: {
      astral: {
        astralCombat: 'Astral Combat',
        astralSignatures: 'Astral Signatures',
        emotionalStates: 'Emotional States',
        spiritTypes: 'Spirit Types',
      },
      athletics: {
        archery: 'Archery',
        climbing: 'Climbing',
        flying: 'Flying',
        escaping: 'Escaping',
        sprinting: 'Sprinting',
        swimming: 'Swimming',
        throwing: 'Throwing',
      },
      biotech: {
        biotechnology: 'Biotechnology',
        cybertechnology: 'Cybertechnology',
        firstAid: 'First Aid',
        medicine: 'Medicine',
      },
      closeCombat: {
        blades: 'Blades',
        clubs: 'Clubs',
        unarmedCombat: 'Unarmed Combat',
      },
      con: {
        acting: 'Acting',
        disguise: 'Disguise',
        impersonation: 'Impersonation',
        performance: 'Performance',
      },
      conjuring: {
        banishing: 'Banishing',
        summoning: 'Summoning',
      },
      cracking: {
        cyberCombat: 'Cyber Combat',
        electronicWarfare: 'Electronic Warfare',
        hacking: 'Hacking',
      },
      electronics: {
        computer: 'Computer',
        software: 'Software',
        hardware: 'Hardware',
      },
      enchanting: {
        alchemy: 'Alchemy',
        artificing: 'Artificing',
        disenchanting: 'Disenchanting',
      },
      engineering: {
        aeronauticsMechanic: 'Aeronautics Mechanic',
        armorer: 'Armorer',
        automotiveMechanic: 'Automotive Mechanic',
        demolitions: 'Demolitions',
        gunnery: 'Gunnery',
        industrialMechanic: 'Industrial Mechanic',
        lockpicking: 'Lockpicking',
        nauticalMechanic: 'Nautical Mechanic',
      },
      firearms: {
        automatics: 'Automatics',
        longarms: 'Longarms',
        pistols: 'Pistols',
        rifles: 'Rifles',
        shotguns: 'Shotguns',
      },
      influence: {
        etiquette: 'Etiquette',
        instruction: 'Instruction',
        intimidation: 'Intimidation',
        leadership: 'Leadership',
        negotiation: 'Negotiation',
      },
      outdoors: {
        navigation: 'Navigation',
        survival: 'Survival',
        tracking: 'Tracking',
        environmentUrban: 'Urban',
        environmentDesert: 'Desert',
        environmentForest: 'Forest',
      },
      perception: {
        visual: 'Visual',
        aural: 'Aural',
        tactile: 'Tactile',
        environmentUrban: 'Urban',
        environmentDesert: 'Desert',
        environmentForest: 'Forest',
      },
      piloting: {
        groundcraft: 'Groundcraft',
        aircraft: 'Aircraft',
        watercraft: 'Watercraft',
      },
      sorcery: {
        counterspelling: 'Counterspelling',
        ritualSpellcasting: 'Ritual Spellcasting',
        spellcasting: 'Spellcasting',
      },
      stealth: {
        camouflage: 'Camouflage',
        disguise: 'Disguise',
        palming: 'Palming',
        sneaking: 'Sneaking',
      },
      tasking: {
        compiling: 'Compiling',
        decompiling: 'Decompiling',
        registering: 'Registering',
      },
    },
    addDialog: {
      title: 'Add Skill',
    },
    updateDialog: {
      title: 'Edit Skill',
    },
  },
  lifestyle: {
    primaryLifestyle: 'Primary Lifestyle',
    idsAndLicenses: 'IDs & Licenses',
    nuyen: 'Nuyen',
  },
  spells: {
    addDialog: {
      title: 'Add Spell',
    },
    updateDialog: {
      title: 'Edit Spell',
    },
    tradition: 'Tradition',
    drain: 'Drain',
    category: 'Category',
    range: 'Range',
    duration: 'Duration',
    kind: 'Kind',
    kinds: {
      physical: 'Physical',
      mana: 'Mana',
    },
    categories: {
      health: 'Health',
      combat: 'Combat',
      illusion: 'Illusion',
      manipulation: 'Manipulation',
      detection: 'Detection',
    },
    ranges: {
      touch: 'Touch',
      los: 'Line Of Sight',
      losArea: 'Line Of Sight (Area)',
      special: 'Special',
    },
    durations: {
      instant: 'Instant',
      sustained: 'Sustained',
      temporary: 'Temporary',
      permanent: 'Permanent',
    },
    durationMnemonics: {
      instant: 'I',
      sustained: 'S',
      temporary: 'T',
      permanent: 'P',
    },
    rangeMnemonics: {
      touch: 'T',
      los: 'LOS',
      losArea: 'LOS (A)',
      special: 'S',
    },
  },
  complexForms: {
    fading: 'Fading',
    duration: 'Duration',
    addDialog: {
      title: 'Add Complex Form',
    },
    updateDialog: {
      title: 'Edit Complex Form',
    },
    durations: {
      instant: 'Instant',
      sustained: 'Sustained',
      permanent: 'Permanent',
    },
    durationMnemonics: {
      instant: 'I',
      sustained: 'S',
      permanent: 'P',
    },
  },
  vehicles: {
    model: 'Model',
    seats: 'Seats',
    handlingStreet: 'Handling (Street)',
    handlingOffroad: 'Handling (Offroad)',
    acceleration: 'Acceleration',
    speed: 'Speed Interval',
    topSpeed: 'Top Speed',
    body: 'Body',
    armor: 'Armor',
    pilot: 'Pilot',
    sensor: 'Sensor',
  },
  legal: {
    title: 'Imprint',
    developerNotice: 'Developed and hosted by',
    licenseInfo: 'The Topps Company, Inc. has sole ownership of the names, logo, '
      + 'artwork, marks, photographs, sounds, audio, video and/or any proprietary '
      + 'material used in connection with the game Shadowrun. The Topps Company, '
      + 'Inc. has granted permission to Marcus Ilgner to use such names, logos, '
      + 'artwork, marks and/or any proprietary materials for promotional and '
      + 'informational purposes on its website but does not endorse, and is not '
      + 'affiliated with Marcus Ilgner in any official capacity whatsoever.',
  },
  tour: {
    skip: 'Skip tour',
    previous: 'Back',
    next: 'Next',
    stop: 'Finish tour',
    step1: {
      title: 'Welcome...',
      content: 'to a customizable digital character sheet for your Shadowrun 6 character',
    },
    step2: {
      title: 'The main menu',
      content: 'is located here. You can use it to switch the character sheet into edit mode '
        + 'and back. You can also save and load your character sheet here and change the '
        + ' settings',
    },
    step3: {
      title: 'When edit mode is active',
      content: 'You can add more boxes to the sheet',
    },
    step4: {
      title: 'License',
    },
  },
};
