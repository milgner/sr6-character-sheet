<template>
  <v-tabs grow>
    <v-tabs-slider />
    <v-tab>Aktionsfertigkeiten</v-tab>
    <v-tab>Wissensfertigkeiten</v-tab>
    <v-tab-item>
      <v-data-table
        class="skill-list"
        dense
        :headers="activeHeaders"
        :items="activeItems"
        item-key="name"
        disable-pagination
        hide-default-footer
      />
    </v-tab-item>
    <v-tab-item>
      <v-data-table
        class="skill-list knowledge"
        dense
        :headers="knowledgeHeaders"
        :items="knowledgeItems"
        item-key="name"
        disable-pagination
        hide-default-footer
      />
    </v-tab-item>
  </v-tabs>
</template>
<style lang="scss">
  .skill-list {
    tbody {
      font-size: 50%;
    }
  }
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
})
export default class SkillsBox extends Vue {
  static label = 'Fertigkeiten';

  activeHeaders = [{
    text: 'Name',
    align: 'start',
    sortable: true,
    value: 'name',
  }, {
    text: 'Wert',
    align: 'end',
    sortable: false,
    value: 'rating',
  }, {
    text: 'Attribut',
    align: 'start',
    sortable: true,
    value: 'attribute',
  }]

  knowledgeHeaders = [
    {
      text: 'Name',
      align: 'start',
      sortable: true,
      value: 'name',
    },
  ]

  items = [
    {
      name: 'Athletik',
      rating: 1,
      attribute: 'STR',
      type: 'Aktion',
    },
    {
      name: 'Biotech',
      rating: 3,
      attribute: 'LOG',
      type: 'Aktion',
    },
    {
      name: 'Cracken (Hacken +2)',
      rating: 6,
      attribute: 'LOG',
      type: 'Aktion',
    },
    {
      name: 'Einfluss',
      rating: 1,
      attribute: 'CHA',
      type: 'Aktion',
    },
    {
      name: 'Elektronik',
      rating: 3,
      attribute: 'LOG',
      type: 'Aktion',
    },
    {
      name: 'Feuerwaffen',
      rating: 3,
      attribute: 'GES',
      type: 'Aktion',
    },
    {
      name: 'Heimlichkeit',
      rating: 1,
      attribute: 'GES',
      type: 'Aktion',
    },
    {
      name: 'Mechanik',
      rating: 1,
      attribute: 'LOG',
      type: 'Aktion',
    },
    {
      name: 'Natur',
      rating: 1,
      attribute: 'INT',
      type: 'Aktion',
    },
    {
      name: 'Steuern',
      rating: 1,
      attribute: 'REA',
      type: 'Aktion',
    },
    {
      name: 'Überreden',
      rating: 1,
      attribute: 'CHA',
      type: 'Aktion',
    },
    {
      name: 'Wahrnehmung',
      rating: 2,
      attribute: 'INT',
      type: 'Aktion',
    },
    {
      name: 'Englisch',
      rating: 'N',
      attribute: 'INT',
      type: 'Sprache',
    },
    {
      name: 'Französisch',
      rating: 'Experte',
      type: 'Sprache',
    },
    {
      name: 'Hackergruppen',
      type: 'Wissen',
    },
    {
      name: 'Tech-Konzerne',
      type: 'Wissen',
    },
    {
      name: 'Sicherheitssysteme',
      type: 'Wissen',
    },
    {
      name: 'Strassen von Toronto',
      type: 'Wissen',
    },
    {
      name: 'Virtuelle Nachtclubs',
      type: 'Wissen',
    },
    {
      name: 'Polizeikonzerne',
      type: 'Wissen',
    },
  ]

  get activeItems() {
    return this.items.filter((i) => i.type === 'Aktion');
  }

  get knowledgeItems() {
    return this.items.filter((i) => i.type !== 'Aktion');
  }
}
</script>
