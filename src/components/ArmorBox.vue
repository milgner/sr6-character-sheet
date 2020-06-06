<template>
  <v-data-table
    class="armor-list"
    dense
    :headers="headers"
    :items="items"
    item-key="name"
    no-data-text="Keine Rüstüng angelegt"
    disable-pagination
    hide-default-footer
  />
</template>
<script lang="ts">
import Vue from 'vue';

const ArmorBoxProps = Vue.extend({
});

export default class ArmorBox extends ArmorBoxProps {
  static label = 'Panzerung';

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
  }]

  items = [
    {
      name: 'Gefütterter Mantel',
      rating: 3,
      notes: '',
    },
  ]
}

</script>
