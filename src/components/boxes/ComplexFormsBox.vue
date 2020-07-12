<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :show-add-button="!editMode"
    item-key="id"
    scope="complexForms"
  >
    <template v-slot:item.duration="{ item }">
      {{ displayDuration(item) }}
    </template>

    <template v-slot="{ item }">
      <v-row>
        <v-col cols="12">
          <v-text-field
            :label="$t('name')"
            dense
            v-model="item.name"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-select
            :items="complexFormsDurations"
            :label="$t('complexForms.duration')"
            dense
            v-model="item.duration"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('complexForms.fading')"
            dense
            type="number"
            v-model.number="item.fading"
          />
        </v-col>
      </v-row>
    </template>
  </data-table-with-dialog>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import DataTableWithDialog from '@/components/DataTableWithDialog.vue';
import { mapModelLike } from '../../store/util';
import { reversedEnum, translatedEnumOptions } from '../../i18n';
import { ComplexFormDuration } from '../../model';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('complexForms', ['items']),
})
export default class ComplexFormsBox extends Vue {
  @Prop(Boolean) readonly editMode: boolean | undefined;

  static defaultHeight = 5;

  static optional = true;

  complexFormsDurations = translatedEnumOptions(ComplexFormDuration, 'complexForms.durations');

  displayDuration(complexForm: any) {
    return this.$t(`complexForms.durationMnemonics.${reversedEnum(ComplexFormDuration)[complexForm.duration]}`)
      .toString();
  }

  get headers() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('complexForms.duration'),
      align: 'start',
      sortable: false,
      value: 'duration',
    }, {
      text: this.$t('complexForms.fading'),
      align: 'end',
      sortable: true,
      value: 'fading',
    },
    ];
  }
}

</script>
