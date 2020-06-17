export default {
  name: 'Name',
  rating: 'Stufe',
  notes: 'Anmerkung',

  dialogs: {
    add: 'Hinzufügen',
    close: 'Schließen',
    update: 'Aktualisieren',
  },

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
  },
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
};
