<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :table-options="sortOptions"
    scope="feats"
    item-key="id"
    :show-add-button="!editMode"
  >
    <template v-slot:item.type="{ item }">
      {{ translateFeatType(item.type) }}
    </template>
    <template v-slot="{ item }">
      <v-row>
        <v-col cols="12">
          <v-select
            :items="featTypeOptions"
            v-model="item.type"
          />
        </v-col>
      </v-row>
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
            :label="$t('notes')"
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
import { FeatType } from '@/model';
import VueI18n from 'vue-i18n';
import { translatedEnumOptions } from '@/i18n';
import { Prop } from 'vue-property-decorator';

import TranslateResult = VueI18n.TranslateResult;

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('feats', ['items']),
})
export default class FeatBox extends Vue {
  static defaultHeight = 7;

  featTypeOptions = translatedEnumOptions(FeatType, 'feats');

  sortOptions = { sortBy: ['type', 'name'] };

  @Prop(Boolean) readonly editMode: boolean | undefined;

  get headers() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('notes'),
      align: 'start',
      sortable: false,
      value: 'notes',
    }, {
      text: this.$t('feats.type'),
      align: 'start',
      sortable: true,
      value: 'type',
    }];
  }

  translateFeatType(type: FeatType): TranslateResult {
    return this.$t(`feats.${type}`);
  }
}
</script>
