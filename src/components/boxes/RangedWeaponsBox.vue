<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    item-key="id"
    scope="rangedWeapons"
  >
    <template v-slot:item.damage="{ item }">
      {{ displayDamage(item) }}
    </template>
    <template v-slot:item.ammo="{ item }">
      {{ displayAmmo(item) }}
    </template>

    <template v-slot="{ item }">
      <v-row>
        <v-col cols="8">
          <v-text-field
            dense
            :label="$t('name')"
            v-model="item.name"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            dense
            :label="$t('rangedWeapons.mode')"
            v-model="item.mode"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
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
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            v-model.number="item.ammoCount"
            :label="$t('rangedWeapons.ammoCount')"
          />
        </v-col>
        <v-col cols="4">
          <v-select
            :label="$t('rangedWeapons.ammoType')"
            :items="ammoTypes"
            v-model="item.ammoType"
            dense
          />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            v-model.number="item.close"
            :label="$t('rangedWeapons.ranges.close')"
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            v-model.number="item.near"
            :label="$t('rangedWeapons.ranges.near')"
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            v-model.number="item.medium"
            :label="$t('rangedWeapons.ranges.medium')"
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            v-model.number="item.far"
            :label="$t('rangedWeapons.ranges.far')"
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            v-model.number="item.extreme"
            :label="$t('rangedWeapons.ranges.extreme')"
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

import { reversedEnum, translatedEnumOptions } from '@/i18n';
import { AmmoType, DamageType } from '@/model';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('rangedWeapons', ['items']),
})
export default class RangedWeaponsBox extends Vue {
  static defaultHeight = 5;

  damageTypes = translatedEnumOptions(DamageType, 'weapons.damageTypes');

  ammoTypes = translatedEnumOptions(AmmoType, 'rangedWeapons.ammoTypes');

  displayDamage(weapon: any) {
    const damageMnemo = this.$t(`weapons.damageTypes.${reversedEnum(DamageType)[weapon.damageType]}`).toString()[0];
    return `${weapon.damageValue}${damageMnemo}`;
  }

  displayAmmo(weapon: any) {
    const ammoTypeMnemo = this.$t(`rangedWeapons.ammoTypeMnemonics.${reversedEnum(AmmoType)[weapon.ammoType]}`).toString()[0];
    return `${weapon.ammoCount}${ammoTypeMnemo}`;
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
      text: this.$t('rangedWeapons.mode'),
      align: 'start',
      sortable: false,
      value: 'mode',
    }, {
      text: this.$t('rangedWeapons.ranges.close'),
      align: 'end',
      sortable: false,
      value: 'close',
    }, {
      text: this.$t('rangedWeapons.ranges.near'),
      align: 'end',
      sortable: false,
      value: 'near',
    }, {
      text: this.$t('rangedWeapons.ranges.medium'),
      align: 'end',
      sortable: false,
      value: 'medium',
    }, {
      text: this.$t('rangedWeapons.ranges.far'),
      align: 'end',
      sortable: false,
      value: 'far',
    }, {
      text: this.$t('rangedWeapons.ranges.extreme'),
      align: 'end',
      sortable: false,
      value: 'extreme',
    }, {
      text: this.$t('rangedWeapons.ammo'),
      align: 'end',
      sortable: false,
      value: 'ammo',
    },
    ];
  }
}
</script>
