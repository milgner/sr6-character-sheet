<template>
  <sheet-box label="Fertigkeiten">
    <v-data-table
      class="skill-list"
      dense
      :headers="headers"
      :items="items"
      item-key="name"
      disable-pagination
      hide-default-footer
    />
  </sheet-box>
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
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class SkillsBox extends Vue {
  headers = [{
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
  }, {
    text: 'Typ',
    align: 'end',
    sortable: true,
    value: 'type',
  }]

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
      name: 'Cracken',
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
      name: 'Combatbiking',
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
}
</script>
