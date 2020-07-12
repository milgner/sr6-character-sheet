<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :show-add-button="!editMode"
    item-key="id"
    scope="adeptPowers"
  >
    <template v-slot="{ item }">
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
        <v-col cols="3">
          <v-text-field
            dense
            type="number"
            v-model.number="item.rating"
            :label="$t('rating')"
          />
        </v-col>
        <v-col cols="9">
          <v-text-field
            :label="$t('notes')"
            dense
            v-model="item.notes"
          />
        </v-col>
      </v-row>
    </template>
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
  computed: mapModelLike('adeptPowers', ['items']),
})
export default class AdeptPowersBox extends Vue {
  static defaultHeight = 5;

  static optional = true;

  @Prop(Boolean) readonly editMode: boolean | undefined;

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
    }];
  }
}
</script>
