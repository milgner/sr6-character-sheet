<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    item-key="id"
    :show-add-button="!editMode"
    scope="connections"
    v-slot="{ item }"
  >
    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          :label="$t('name')"
          v-model="item.name"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          dense
          :label="$t('connections.description')"
          v-model="item.description"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          dense
          type="number"
          :label="$t('connections.loyalty')"
          v-model.number="item.loyalty"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          dense
          type="number"
          :label="$t('connections.influence')"
          v-model.number="item.influence"
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
import { Prop } from 'vue-property-decorator';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('connections', ['items']),
})
export default class ConnectionsBox extends Vue {
  static defaultHeight = 8;

  @Prop(Boolean) readonly editMode: boolean | undefined;

  get headers() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('connections.description'),
      align: 'Start',
      sortable: false,
      value: 'description',
    }, {
      text: this.$t('connections.loyalty'),
      align: 'end',
      sortable: false,
      value: 'loyalty',
    }, {
      text: this.$t('connections.influence'),
      align: 'end',
      sortable: false,
      value: 'influence',
    }];
  }
}

</script>
