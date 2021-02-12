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

  globalMenu: {
    edit: {
      on: 'Bearbeitungsmodus aktivieren',
      off: 'Bearbeitungsmodus deaktivieren',
    },
    save: 'Speichern',
    load: 'Laden',
    settings: 'Einstellungen',
    legal: 'Rechtliches',
  },

  settings: {
    title: 'Einstellungen',
    locale: 'Sprache',
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
    MeleeWeaponsBox: 'Nahkampfwaffen',
    AdeptPowersBox: 'Adeptenkräfte',
    ComplexFormsBox: 'Komplexe Formen',
    VehicleBox: 'Fahrzeug',
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
    spentKarma: 'Investiertes Karma',
    totalKarma: 'Gesamtkarma',
    characterTypes: {
      mundane: 'Mundan',
      awakenedMage: 'Magier',
      awakenedTechnomancer: 'Technomancer',
    },
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
  adeptPowers: {
    addDialog: {
      title: 'Adeptenkraft hinzufügen',
    },
    updateDialog: {
      title: 'Adeptenkraft bearbeiten',
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
    modes: {
      SS: 'EM',
      BF: 'SM',
      SA: 'HA',
      FA: 'AM',
    },
    updateDialog: {
      title: 'Fernkampfwaffe bearbeiten',
    },
  },
  meleeWeapons: {
    addDialog: {
      title: 'Nahkampfwaffe hinzufügen',
    },
    updateDialog: {
      title: 'Nahkampfwaffe bearbeiten',
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
    skillRating: {
      fluid: 'Gelernt',
      native: 'Muttersprache',
      specialized: 'Spezialisiert',
      expert: 'Experte',
    },
    skillRatingMnemonics: {
      specialized: 'S',
      expert: 'E',
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
      sorcery: 'Hexerei',
      stealth: 'Heimlichkeit',
      tasking: 'Tasken',
      exoticWeapons: 'Exotische Waffen',
    },
    specializations: {
      astral: {
        astralCombat: 'Astralkampf',
        astralSignatures: 'Astrale Signaturen',
        emotionalStates: 'Gefühlszustände',
        spiritTypes: 'Geisterarten',
      },
      athletics: {
        archery: 'Projektilwaffen',
        climbing: 'Klettern',
        flying: 'Fliegen',
        escaping: 'Entfesseln',
        sprinting: 'Sprinten',
        swimming: 'Schwimmen',
        throwing: 'Werfen',
      },
      biotech: {
        biotechnology: 'Biotechnologie',
        cybertechnology: 'Cybertechnologie',
        firstAid: 'Erste Hilfe',
        medicine: 'Medizin',
      },
      closeCombat: {
        blades: 'Klingenwaffen',
        clubs: 'Knüppel',
        unarmedCombat: 'Waffenloser Kampf',
      },
      con: {
        acting: 'Schauspielerei',
        disguise: 'Verkleiden',
        impersonation: 'Verkörperung',
        performance: 'Vorführung',
      },
      conjuring: {
        banishing: 'Verbannen',
        summoning: 'Herbeirufen',
      },
      cracking: {
        cyberCombat: 'Matrixkampf',
        electronicWarfare: 'Elektronische Kriegsführung',
        hacking: 'Hacken',
      },
      electronics: {
        computer: 'Computer',
        software: 'Software',
        hardware: 'Hardware',
      },
      enchanting: {
        alchemy: 'Alchemie',
        artificing: 'Fokusherstellung',
        disenchanting: 'Entzaubern',
      },
      engineering: {
        aeronauticsMechanic: 'Luftfahrtmechanik',
        armorer: 'Waffenbau',
        automotiveMechanic: 'Fahrzeugmechanik',
        demolitions: 'Sprengstoff',
        gunnery: 'Geschütze',
        industrialMechanic: 'Industriemechanik',
        lockpicking: 'Schlösser Knacken',
        nauticalMechanic: 'Seefahrtmechanik',
      },
      firearms: {
        automatics: 'Maschinengewehre',
        longarms: 'Scharfschützengewehre',
        pistols: 'Pistolen',
        rifles: 'Gewehre',
        shotguns: 'Schrotflinten',
      },
      influence: {
        etiquette: 'Gebräuche',
        instruction: 'Unterrichten',
        intimidation: 'Einschüchtern',
        leadership: 'Führung',
        negotiation: 'Verhandlung',
      },
      outdoors: {
        navigation: 'Navigation',
        survival: 'Überleben',
        tracking: 'Spurenlesen',
        environmentUrban: 'Stadt',
        environmentDesert: 'Wüste',
        environmentForest: 'Wald',
      },
      perception: {
        visual: 'Sicht',
        aural: 'Gehör',
        tactile: 'Berührung',
        environmentUrban: 'Stadt',
        environmentDesert: 'Wüste',
        environmentForest: 'Wald',
      },
      piloting: {
        groundcraft: 'Bodenfahrzeuge',
        aircraft: 'Luftfahrzeuge',
        watercraft: 'Wasserfahrzeuge',
      },
      sorcery: {
        counterspelling: 'Antimagie',
        ritualSpellcasting: 'Ritualmagie',
        spellcasting: 'Spruchzauberei',
      },
      stealth: {
        camouflage: 'Tarnung',
        disguise: 'Verkleiden',
        palming: 'Fingerfertigkeit',
        sneaking: 'Schleichen',
      },
      tasking: {
        compiling: 'Kompilieren',
        decompiling: 'Dekompilieren',
        registering: 'Registrieren',
      },
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
  complexForms: {
    fading: 'Schwund',
    duration: 'Dauer',
    addDialog: {
      title: 'Komplexe Form hinzufügen',
    },
    updateDialog: {
      title: 'Komplexe Form bearbeiten',
    },
    durations: {
      instant: 'Sofort',
      sustained: 'Aufrechterhalten',
      permanent: 'Permanent',
    },
    durationMnemonics: {
      instant: 'S',
      sustained: 'A',
      permanent: 'P',
    },
  },
  vehicles: {
    model: 'Modell',
    seats: 'Sitze',
    handlingStreet: 'Handling (Straße)',
    handlingOffroad: 'Handling (Offroad)',
    acceleration: 'Beschleunigung',
    speed: 'Geschwindigkeitsintervall',
    topSpeed: 'Höchstgeschwindigkeit',
    body: 'Rumpf',
    armor: 'Panzerung',
    pilot: 'Pilot',
    sensor: 'Sensor',
  },
  legal: {
    title: 'Impressum',
    developerNotice: 'Entwickelt und gehosted von',
    imprint: 'Marcus Ilgner<br/>Kölner Str. 98<br/>53840 Troisdorf',
    authorEmail: 'mail@marcusilgner.com',
    licenseInfo: 'Shadowrun-Logo und Inhalte mit freundlicher Genehmigung von Pegasus '
+ 'Spiele unter Lizenz von Catalyst Game Labs und Topps Company, Inc. '
+ '© 2020 Topps Company, Inc. Alle Rechte vorbehalten. Shadowrun ist '
+ 'eine eingetragene Handelsmarke von Topps Company, Inc.',
  },
  tour: {
    skip: 'Tour überspringen',
    previous: 'Zurück',
    next: 'Weiter',
    stop: 'Tour beenden',
    step1: {
      title: 'Willkommen...',
      content: 'zum digitalen, anpassbaren Charakterbogen für Shadowrun 6',
    },
    step2: {
      title: 'Das Hauptmenü',
      content: 'befindet sich hier. Von hier aus schaltest Du in den Bearbeitungsmodus '
        + 'und zurück. Ausserdem kannst Du hier den Charakterbogen speichern und laden '
        + 'und weitere Einstellungen vornehmen.',
    },
    step3: {
      title: 'Wenn der Bearbeitungsmodus aktiv ist...',
      content: 'kannst Du hier neue Boxen hinzufügen.',
    },
    step4: {
      title: 'Lizenzinformation',
    },
  },
};
