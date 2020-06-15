<template>
  <div>
    <v-data-table
      class="bodytech-list"
      dense
      :headers="headers"
      :items="items"
      item-key="name"
      disable-pagination
      hide-default-footer
    />
    <v-btn fab x-small><v-icon>mdi-plus</v-icon></v-btn>
  </div>
</template>
<style scoped>
  .v-btn {
    position: fixed;
    right: -1em;
    top: -1em;
    z-index: 1000;
  }
</style>
<script lang="ts">
import Vue from 'vue';
import { mapModelLike } from '@/store/util';

const BodytechBoxProps = Vue.extend({
  computed: {
    ...mapModelLike('bodytech', ['items']),
  },
});

export default class BodytechBox extends BodytechBoxProps {
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
}

</script>
