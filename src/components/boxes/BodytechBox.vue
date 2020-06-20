<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    scope="bodytech"
    item-key="id"
    v-slot="{ item }"
  >
    <v-row>
      <v-col cols="8">
        <v-text-field
          dense
          :label="$t('name')"
          v-model="item.name"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          dense
          type="number"
          :label="$t('rating')"
          v-model.number="item.rating"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          dense
          :label="$t('attributes.ess')"
          v-model.number="item.essence"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          :label="$t('notes')"
          v-model="item.notes"
        />
      </v-col>
    </v-row>
  </data-table-with-dialog>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapModelLike } from '@/store/util';
import Component from 'vue-class-component';
import DataTableWithDialog from '@/components/DataTableWithDialog.vue';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('bodytech', ['items']),
})
export default class BodytechBox extends Vue {
  get headers() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('rating'),
      align: 'start',
      sortable: false,
      value: 'rating',
    }, {
      text: this.$t('notes'),
      align: 'start',
      sortable: false,
      value: 'notes',
    }, {
      text: this.$t('attributes.ess'),
      align: 'end',
      sortable: true,
      value: 'essence',
    },
    ];
  }
}

</script>
