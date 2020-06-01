<template>
  <sheet-box label="Bodytech">
    <v-data-table
      class="bodytech-list"
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
export default class BodytechBox extends Vue {
  headers = [{
    text: 'Name',
    align: 'start',
    sortable: true,
    value: 'name',
  }, {
    text: 'Stufe',
    align: 'start',
    sortable: false,
    value: 'rating',
  }, {
    text: 'Anmerkung',
    align: 'start',
    sortable: false,
    value: 'notes',
  }, {
    text: 'Essenz',
    align: 'end',
    sortable: true,
    value: 'essence',
  }]

  items = [
    {
      name: 'Cyberbuchse',
      rating: 4,
      notes: 'D/F 7/6, Matrix-Ini +2',
      essence: 2.3,
    }, {
      name: 'Zerebralbooster',
      rating: 2,
      notes: 'LOG +2',
      essence: 0.4,
    },
  ]
}
</script>
