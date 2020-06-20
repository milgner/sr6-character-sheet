<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    scope="equipment"
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
    </v-row>
  </data-table-with-dialog>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DataTableWithDialog from '@/components/DataTableWithDialog.vue';
import { mapModelLike } from '@/store/util';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('equipment', ['items']),
})
export default class EquipmentBox extends Vue {
  get headers() {
    return [
      {
        text: this.$t('equipment.name'),
        value: 'name',
      },
      {
        text: this.$t('rating'),
        value: 'rating',
      },
    ];
  }
}
</script>
