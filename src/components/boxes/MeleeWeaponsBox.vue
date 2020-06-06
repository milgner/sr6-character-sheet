<template>
  <v-data-table
    class="melee-weapons-list"
    dense
    :headers="headers"
    :items="items"
    item-key="name"
    disable-pagination
    hide-default-footer
    no-data-text="Keine Nahkampfwaffe verfügbar"
  />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
})
export default class MeleeWeaponsBox extends Vue {
  static label = 'Nahkampfwaffen';

  headers = [{
    text: 'Name',
    align: 'start',
    sortable: true,
    value: 'name',
  }, {
    text: 'DV',
    align: 'start',
    sortable: true,
    value: 'damage',
  }, {
    text: 'Entfernung',
    align: 'end',
    sortable: true,
    value: 'distance',
  }]

  items = []
}
</script>
