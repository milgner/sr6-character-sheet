export default {
  name: 'Name',
  rating: 'Stufe',
  notes: 'Anmerkung',
  dicePool: '# Würfel',

  dialogs: {
    add: 'Hinzufügen',
    close: 'Schließen',
    update: 'Aktualisieren',
  },

  defaultFilename: 'Namenloser Charakter',

  boxes: {
    PersonalDataBox: 'Persönliche Daten',
    AttributesBox: 'Attribute',
    SkillsBox: 'Fertigkeiten',
    RangedWeaponsBox: 'Fernkampfwaffen',
    LifestyleBox: 'IDs /  Lebensstile / Währung',
    FightSummaryBox: 'Wichtige Kampf-Infos',
    HealthMonitorBox: 'Zustandsmonitor',
    FeatBox: 'Vor- und Nachteile',
    ConnectionsBox: 'Connections',
    MatrixStatsBox: 'Matrixwerte',
    EquipmentBox: 'Ausrüstung',
    BodytechBox: 'Bodytech',
    ArmorBox: 'Panzerung',
    SpellsBox: 'Zaubersprüche',
  },
  attribute: 'Attribut',
  attributes: {
    str: 'Stärke',
    bod: 'Konstitution',
    agi: 'Geschicklichkeit',
    rea: 'Reaktion',
    wil: 'Willenskraft',
    log: 'Logik',
    int: 'Intuition',
    cha: 'Charisma',
    edg: 'Edge',
    ess: 'Essenz',
    ini: 'Initiative',
    astralIni: 'Astrale Initiative',
    matrixIni: 'Matrix-Initiative',
    mag: 'Magie',
    res: 'Resonanz',
    composure: 'Selbstbeherrschung',
    judgeIntentions: 'Menschenkenntnis',
    memory: 'Erinnerungsvermögen',
    carryLift: 'Heben/Tragen',
    movement: 'Bewegung',
    defense: 'Verteidigungswert',
    attackUnarmed: 'Angriffswert waffenlos',
  },
  personalData: {
    name: 'Name / Primärer Deckname',
    metaType: 'Metatyp',
    ethnicity: 'Ethnizität',
    age: 'Alter',
    gender: 'Geschlecht',
    height: 'Größe',
    weight: 'Gewicht',
    reputation: 'Reputation',
    searchWarrantLevel: 'Fahndungsstufe',
    availableKarma: 'Karma',
    totalKarma: 'Gesamtkarma',
  },
  matrix: {
    simHot: 'Heisses SIM',
    attack: 'Angriff',
    sleaze: 'Schleicher',
    dataProcessing: 'Datenverarbeitung',
    firewall: 'Firewall',
    deviceName: 'Gerät',
    deviceRating: 'Stufe',
    programs: 'Programme',
    noPrograms: 'Keine Programme',
    damageMonitor: 'Matrixzustandsmonitor',
    availablePrograms: {
      babyMonitor: 'Babymonitor',
      browse: 'Schmöker',
      configurator: 'Konfigurator',
      edit: 'Editieren',
      encryption: 'Verschlüsselung',
      search: 'Suche',
      signalScrub: 'Signalreiniger',
      toolbox: 'Toolbox',
      virtualMachine: 'Virtuelle Maschine',
      armor: 'Panzerung',
      track: 'Aufspüren',
      biofeedback: 'Biofeedback',
      biofeedbackFilter: 'Biofeedbackfilter',
      exploit: 'Ausnutzen',
      blackout: 'Blackout',
      defuse: 'Entschärfen',
      decryption: 'Enschlüsselung',
      lockdown: 'Fessel',
      fork: 'Gabel',
      chipGuard: 'Splitterschutz',
      stealth: 'Tarnkappe',
      overclock: 'Übertakten',
    },
  },
  bodytech: {
    addDialog: {
      title: 'Bodytech hinzufügen',
    },
    updateDialog: {
      title: 'Bodytech bearbeiten',
    },
  },
  armor: {
    noData: 'Keine Panzerung angelegt',
    addDialog: {
      title: 'Panzerung hinzufügen',
    },
    updateDialog: {
      title: 'Panzerung bearbeiten',
    },
  },
  equipment: {
    name: 'Gegenstand',
    addDialog: {
      title: 'Ausrüstung hinzufügen',
    },
    updateDialog: {
      title: 'Ausrüstung bearbeiten',
    },
  },
  feats: {
    type: 'Art',
    advantage: 'Vorteil',
    disadvantage: 'Nachteil',
    addDialog: {
      title: 'Vor-/Nachteil hinzufügen',
    },
    updateDialog: {
      title: 'Vor-/Nachteil bearbeiten',
    },
  },
  connections: {
    description: 'Beschreibung',
    loyalty: 'Loyalität',
    influence: 'Einfluss',
    addDialog: {
      title: 'Kontakt hinzufügen',
    },
    updateDialog: {
      title: 'Kontakt bearbeiten',
    },
  },
  weapons: {
    damage: 'Schaden',
    damageType: 'Schadensart',
    damageTypes: {
      physical: 'Körperlich',
      stun: 'Geistig',
    },
  },
  rangedWeapons: {
    mode: 'Modus',
    ammo: 'Munition',
    ammoType: 'Munitions-Zufuhr',
    ammoCount: 'Mag.-Größe',
    ranges: {
      close: 'Sehr nah',
      near: 'Nah',
      medium: 'Mittel',
      far: 'Weit',
      extreme: 'Extrem',
    },
    ammoTypes: {
      breakAction: 'Kipplauf',
      clip: 'Streifen',
      drum: 'Trommel',
      muzzleLoader: 'Vorderlader',
      internal: 'Intern',
      cylinder: 'Zylinder',
      belt: 'Gürtel',
    },
    ammoTypeMnemonics: {
      breakAction: 'kl',
      clip: 's',
      drum: 't',
      muzzleLoader: 'vl',
      internal: 'i',
      cylinder: 'z',
      belt: 'g',
    },
    addDialog: {
      title: 'Fernkampfwaffe hinzufügen',
    },
    updateDialog: {
      title: 'Fernkampfwaffe bearbeiten',
    },
  },
  skills: {
    level: 'Stufe',
    actionSkills: 'Aktionsfertigkeiten',
    knowledgeSkills: 'Wissensfertigkeiten',
    types: {
      action: 'Aktionsfertigkeit',
      language: 'Sprache',
      knowledge: 'Wissensfertigkeit',
    },
    languageRating: {
      fluid: 'Gelernt',
      native: 'Muttersprache',
      specialized: 'Spezialisiert',
      expert: 'Experte',
    },
    skills: {
      astral: 'Astral',
      athletics: 'Athletik',
      biotech: 'Biotech',
      closeCombat: 'Nahkampf',
      con: 'Überreden',
      conjuring: 'Beschwören',
      cracking: 'Cracken',
      electronics: 'Elektronik',
      enchanting: 'Verzaubern',
      engineering: 'Mechanik',
      firearms: 'Feuerwaffen',
      influence: 'Einfluss',
      outdoors: 'Natur',
      perception: 'Wahrnehmung',
      piloting: 'Steuern',
      sorcery: 'Verzaubern',
      stealth: 'Heimlichkeit',
      tasking: 'Tasken',
      exoticWeapons: 'Exotische Waffen',
    },
    addDialog: {
      title: 'Fertigkeit hinzufügen',
    },
    updateDialog: {
      title: 'Fertigkeit bearbeiten',
    },
  },
  lifestyle: {
    primaryLifestyle: 'Primärer Lebensstil',
    idsAndLicenses: 'IDs & Lizenzen',
    nuyen: 'Nuyen',
  },
  spells: {
    addDialog: {
      title: 'Zauberspruch hinzufügen',
    },
    updateDialog: {
      title: 'Zauberspruch bearbeiten',
    },
    drain: 'Entzug',
    category: 'Kategorie',
    range: 'Reichweite',
    duration: 'Dauer',
    kind: 'Art',
    kinds: {
      physical: 'Physisch',
      mana: 'Mana',
    },
    categories: {
      health: 'Heilung',
      combat: 'Kampf',
      illusion: 'Illusion',
      manipulation: 'Manipulation',
      detection: 'Wahrnehmung',
    },
    ranges: {
      touch: 'Berührung',
      los: 'Blickfeld',
      losArea: 'Blickfeld (Flächenwirkung)',
      special: 'Speziell',
    },
    durations: {
      instant: 'Sofort',
      sustained: 'Aufrechterhalten',
      temporary: 'Zeitlich Begrenzt',
      permanent: 'Permanent',
    },
    durationMnemonics: {
      instant: 'S',
      sustained: 'A',
      temporary: 'ZB',
      permanent: 'P',
    },
    rangeMnemonics: {
      touch: 'B',
      los: 'BF',
      losArea: 'BF (F)',
      special: 'S',
    },
  },
};
