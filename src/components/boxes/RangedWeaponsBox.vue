<template>
  <v-data-table
    class="ranged-weapons-list"
    dense
    :headers="headers"
    :items="items"
    item-key="name"
    disable-pagination
    hide-default-footer
  />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
})
export default class RangedWeaponsBox extends Vue {
  headers = [{
    text: 'Name',
    align: 'start',
    sortable: true,
    value: 'name',
  }, {
    text: 'Schaden',
    align: 'start',
    sortable: false,
    value: 'dv',
  }, {
    text: 'Modus',
    align: 'start',
    sortable: false,
    value: 'mode',
  }, {
    text: 'Sehr nah',
    align: 'end',
    sortable: false,
    value: 'close',
  }, {
    text: 'Nah',
    align: 'end',
    sortable: false,
    value: 'near',
  }, {
    text: 'Mittel',
    align: 'end',
    sortable: false,
    value: 'medium',
  }, {
    text: 'Weit',
    align: 'end',
    sortable: false,
    value: 'far',
  }, {
    text: 'Extrem',
    align: 'end',
    sortable: false,
    value: 'extreme',
  }, {
    text: 'Ammo',
    align: 'end',
    sortable: false,
    value: 'ammo',
  },
  ]

  items = [
    {
      name: 'Ares Predator VI',
      dv: '3K',
      mode: 'HM/SM',
      close: 10,
      near: 10,
      medium: 8,
      far: 0,
      extreme: 0,
      ammo: '15s',
    },
  ]
}
</script>
