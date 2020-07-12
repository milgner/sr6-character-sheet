<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :show-add-button="!editMode"
    item-key="id"
    scope="meleeWeapons"
  >
    <template v-slot:item.damage="{ item }">
      {{ displayDamage(item) }}
    </template>
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
        <v-col cols="4">
          <v-text-field
            dense
            type="number"
            v-model.number="item.damageValue"
            :label="$t('weapons.damage')"
          />
        </v-col>
        <v-col cols="4">
          <v-select
            :label="$t('weapons.damageType')"
            :items="damageTypes"
            v-model="item.damageType"
            dense
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            dense
            type="number"
            v-model.number="item.close"
            :label="$t('rangedWeapons.ranges.close')"
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
import { reversedEnum, translatedEnumOptions } from '@/i18n';
import { DamageType } from '@/model';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('meleeWeapons', ['items']),
})
export default class MeleeWeaponsBox extends Vue {
  @Prop(Boolean) readonly editMode: boolean | undefined;

  static defaultHeight = 5;

  static optional = true;

  damageTypes = translatedEnumOptions(DamageType, 'weapons.damageTypes');

  displayDamage(weapon: any) {
    const damageMnemo = this.$t(`weapons.damageTypes.${reversedEnum(DamageType)[weapon.damageType]}`).toString()[0];
    return `${weapon.damageValue}${damageMnemo}`;
  }

  get headers() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('weapons.damage'),
      align: 'start',
      sortable: false,
      value: 'damage',
    }, {
      text: this.$t('rangedWeapons.ranges.close'),
      align: 'end',
      sortable: false,
      value: 'close',
    }];
  }
}
</script>
