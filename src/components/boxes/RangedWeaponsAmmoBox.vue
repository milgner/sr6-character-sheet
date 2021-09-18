<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :table-options="sortOptions"
    scope="rangedWeaponsAmmo"
    :show-add-button="!editMode"
    item-key="id"
  >
    <template v-slot:item.weaponClass="{ item }">
      {{ translatedWeaponClass(item) }}
    </template>
    <template v-slot:item.type="{ item }">
      {{ translatedType(item) }}
    </template>
    <template v-slot="{ item }">
      <v-row>
        <v-col cols="4">
          <v-select
            :label="$t('rangedWeaponsAmmo.weaponClass')"
            :items="weaponClasses"
            v-model="item.weaponClass"
            dense
          />
        </v-col>
        <v-col cols="4">
          <v-select
            v-if="isRegularWeapon(item)"
            :label="$t('rangedWeaponsAmmo.type')"
            :items="ammoTypes"
            v-model="item.type"
            dense
          />
          <v-select
            v-if="isGrenade(item)"
            :label="$t('rangedWeaponsAmmo.type')"
            :items="grenadeTypes"
            v-model="item.type"
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            dense
            type="number"
            :label="$t('amount')"
            v-model.number="item.amount"
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
import { translatedEnumOptions } from '@/i18n';
import {
  AmmoType,
  GrenadeType,
  RangedWeaponsAmmo,
  WeaponClass,
} from '@/store/RangedWeaponsAmmoStore';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('rangedWeaponsAmmo', ['items']),
})
export default class RangedWeaponsAmmoBox extends Vue {
  static defaultHeight = 4;

  @Prop(Boolean) readonly editMode: boolean | undefined;

  ammoTypes = translatedEnumOptions(AmmoType, 'rangedWeaponsAmmo.types');

  grenadeTypes = translatedEnumOptions(GrenadeType, 'rangedWeaponsAmmo.grenadeTypes');

  sortOptions = { sortBy: ['weaponClass', 'type'] };

  translatedType(item: RangedWeaponsAmmo) {
    let i18nPrefix: string;
    if (item.weaponClass === WeaponClass.grenade) {
      i18nPrefix = 'grenadeTypes';
    } else {
      i18nPrefix = 'types';
    }
    return this.$i18n.t(`rangedWeaponsAmmo.${i18nPrefix}.${item.type}`);
  }

  weaponClasses = translatedEnumOptions(WeaponClass, 'rangedWeaponsAmmo.weaponClasses')

  translatedWeaponClass(item: RangedWeaponsAmmo) {
    return this.$i18n.t(`rangedWeaponsAmmo.weaponClasses.${item.weaponClass}`);
  }

  // eslint-disable-next-line class-methods-use-this
  isRegularWeapon(item: RangedWeaponsAmmo): boolean {
    return item.weaponClass !== WeaponClass.grenade;
  }

  // eslint-disable-next-line class-methods-use-this
  isGrenade(item: RangedWeaponsAmmo): boolean {
    return item.weaponClass === WeaponClass.grenade;
  }

  get headers() {
    return [
      {
        text: this.$t('rangedWeaponsAmmo.weaponClass'),
        value: 'weaponClass',
      },
      {
        text: this.$t('rangedWeaponsAmmo.type'),
        value: 'type',
      },
      {
        text: this.$t('amount'),
        value: 'amount',
      },
    ];
  }
}
</script>
