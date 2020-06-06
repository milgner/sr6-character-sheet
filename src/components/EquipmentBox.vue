<template>
  <v-data-table
    class="equipment-list"
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
export default class EquipmentBox extends Vue {
  static label = 'Ausrüstung';

  headers = [
    {
      name: 'Gegenstand',
      value: 'name',
    },
    {
      name: 'Stufe',
      value: 'rating',
    },
  ]

  items = [
    {
      name: 'Kommlink Erika Elite (D2/F1)',
      rating: 4,
    },
    {
      name: 'Kleidung, gut, elektrochrom, AR Feedback',
    },
    {
      name: 'AR-Handschuhe',
      rating: 3,
    },
    {
      name: 'Satellitenverbindung',
      rating: 4,
    },
    {
      name: 'SIM-Modul',
      rating: 3,
    },
    {
      name: 'Subvokales Mikrofon',
      rating: 3,
    },
    {
      name: 'Datenwanze',
      rating: 2,
    },
    {
      name: 'White-Noise-Generator',
      rating: 3,
    },
    {
      name: 'Wanzenscanner',
      rating: 3,
    },
    {
      name: 'Shopsoft (Programme)',
      rating: 3,
    },
    {
      name: 'Credsticks (10x Standard, 3x Silber)',
    },
    {
      name: 'Kiste: Elektronik, Mechanik',
    },
    {
      name: 'Medikit + Nachfüllpack',
    },
    {
      name: 'Vitalmonitor',
    },
    {
      name: 'Erste-Hilfe-Set x5',
    },
    {
      name: 'Zen (x20)',
    },
    {
      name: 'Kontaktlinsen (Smartlink, Bildverbindung)',
      rating: 3,
    },
  ]
}
</script>
