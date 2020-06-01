<template>
  <sheet-box label="Vor- und Nachteile">
    <v-data-table
      class="connections-list"
      dense
      :headers="headers"
      :items="items"
      item-key="name"
      disable-pagination
      hide-default-footer
    />
  </sheet-box>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class FeatBox extends Vue {
  headers = [{
    text: 'Name',
    align: 'start',
    sortable: true,
    value: 'name',
  }, {
    text: 'Anmerkungen',
    align: 'start',
    sortable: false,
    value: 'notes',
  }, {
    text: 'Art',
    align: 'start',
    sortable: true,
    value: 'type',
  }]

  items = [
    {
      name: 'Analytischer Geist',
      notes: '1 Bonus-Edge f. Proben mit Logik',
      type: 'Vorteil',
    },
    {
      name: 'Härtung',
      notes: '1 Edge f. Widerstand gg. Matrixschaden',
      type: 'Vorteil',
    },
    {
      name: 'Willensstark',
      notes: 'Edge-Boost Proben mit WIL kosten -1',
      type: 'Vorteil',
    },
    {
      name: 'Beidhändigkeit',
      notes: '',
      type: 'Vorteil',
    },
    {
      name: 'Allergie',
      notes: 'Erdbeeren, -4 auf Proben',
      type: 'Nachteil',
    },
    {
      name: 'Abhängigkeit',
      notes: 'Zen, 3 Tage',
      type: 'Nachteil',
    },
  ]
}
</script>
