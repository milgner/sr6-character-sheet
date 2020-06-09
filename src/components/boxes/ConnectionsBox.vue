<template>
  <v-data-table
    class="connections-list"
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
export default class ConnectionsBox extends Vue {
  static label = 'Connections';

  headers = [{
    text: 'Name',
    align: 'start',
    sortable: true,
    value: 'name',
  }, {
    text: 'Beschreibung',
    align: 'Start',
    sortable: false,
    value: 'description',
  }, {
    text: 'Loyalität',
    align: 'end',
    sortable: false,
    value: 'loyalty',
  }, {
    text: 'Einfluss',
    align: 'end',
    sortable: false,
    value: 'influence',
  }]

  items = [
    {
      name: 'Todd',
      description: 'Mr. Johnson',
      loyalty: 1,
      influence: 2,
    },
    {
      name: 'Sallie',
      description: 'Schieber',
      loyalty: 2,
      influence: 3,
    },
    {
      name: 'Auguste',
      description: 'Drogendealer',
      loyalty: 3,
      influence: 2,
    },
    {
      name: 'Sam',
      description: 'Barkeep',
      loyalty: 2,
      influence: 1,
    },
  ]
}

</script>
