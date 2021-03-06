<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :show-add-button="!editMode"
    item-key="id"
    scope="rangedWeapons"
  >
    <template v-slot:item.damage="{ item }">
      {{ displayDamage(item) }}
    </template>
    <template
      v-slot:item.modes="{ item }"
    >
      <div v-if="item && item.modes && item.modes.length === 1">
        {{ item.modes[0] }}
      </div>
      <div v-else-if="item && item.modes">
        <v-select
          :value="item.currentMode"
          dense
          @input="updateCurrentWeaponMode(item, $event)"
          :items="translatedModes(item.modes)"
        />
      </div>
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
        <v-col
          cols="4"
        >
          <v-btn-toggle
            multiple
            dense
            mandatory
            v-model="item.modes"
          >
            <v-btn
              x-small
              value="SS"
              :disabled="item.modes && item.modes.indexOf('SA') > -1"
            >
              {{ $t('rangedWeapons.modes.SS') }}
            </v-btn>
            <v-btn
              x-small
              value="SA"
              @click="enableSSForSA(item)"
            >
              {{ $t('rangedWeapons.modes.SA') }}
            </v-btn>
            <v-btn
              x-small
              value="BF"
            >
              {{ $t('rangedWeapons.modes.BF') }}
            </v-btn>
            <v-btn
              x-small
              value="FA"
            >
              {{ $t('rangedWeapons.modes.FA') }}
            </v-btn>
          </v-btn-toggle>
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
            :label="$t('rangedWeapons.ammoFeedType')"
            :items="ammoFeedTypes"
            v-model="item.ammoFeedType"
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
<style type="text/css">
.v-input > .v-input__control > .v-text-field__details {
  display: none;
}
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DataTableWithDialog from '@/components/DataTableWithDialog.vue';
import { mapModelLike } from '@/store/util';

import { reversedEnum, translatedEnumOptions } from '@/i18n';
import { AmmoFeedType, DamageType } from '@/model';
import { Prop } from 'vue-property-decorator';
import { WeaponMode } from '@/store/RangedWeaponsStore';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('rangedWeapons', ['items']),
})
export default class RangedWeaponsBox extends Vue {
  @Prop(Boolean) readonly editMode: boolean | undefined;

  static defaultHeight = 5;

  static optional = true;

  damageTypes = translatedEnumOptions(DamageType, 'weapons.damageTypes');

  ammoFeedTypes = translatedEnumOptions(AmmoFeedType, 'rangedWeapons.ammoFeedTypes');

  displayDamage(weapon: any) {
    const damageMnemo = this.$t(`weapons.damageTypes.${reversedEnum(DamageType)[weapon.damageType]}`).toString()[0];
    return `${weapon.damageValue}${damageMnemo}`;
  }

  displayAmmo(weapon: any) {
    const ammoFeedTypeMnemo = this.$t(`rangedWeapons.ammoFeedTypeMnemonics.${reversedEnum(AmmoFeedType)[weapon.ammoFeedType]}`).toString()[0];
    return `${weapon.ammoCount}${ammoFeedTypeMnemo}`;
  }

  translatedModes(modes: WeaponMode[]): any[] {
    return modes.map((mode) => ({ value: mode, text: this.$i18n.t(`rangedWeapons.modes.${mode}`) }));
  }

  updateCurrentWeaponMode(item: any, value: WeaponMode) {
    this.$store.commit('rangedWeapons/updateItem',
      { id: item.id, data: { ...item, currentMode: value } });
  }

  // eslint-disable-next-line class-methods-use-this
  enableSSForSA(item: any) {
    if (item.modes.indexOf(WeaponMode.SS) === -1 && item.modes.indexOf(WeaponMode.SA) === -1) {
      item.modes.push(WeaponMode.SS);
    }
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
      value: 'modes',
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
