<template>
  <data-table-with-dialog
    :headers="headers"
    :items="items"
    :show-add-button="!editMode"
    item-key="id"
    scope="spells"
  >
    <template v-slot:item.category="{ item }">
      {{ $t(`spells.categories.${item.category}`) }}
    </template>
    <template v-slot:item.range="{ item }">
      {{ displayRange(item) }}
    </template>
    <template v-slot:item.duration="{ item }">
      {{ displayDuration(item) }}
    </template>
    <template v-slot:item.kind="{ item }">
      {{ displayKind(item) }}
    </template>

    <template v-slot="{ item }">
      <v-row>
        <v-col cols="8">
          <v-text-field
            :label="$t('name')"
            dense
            v-model="item.name"
          />
        </v-col>
        <v-col cols="4">
          <v-select
            :items="spellCategories"
            :label="$t('spells.category')"
            dense
            v-model="item.category"
          />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="3">
          <v-select
            :items="spellRanges"
            :label="$t('spells.range')"
            dense
            v-model="item.range"
          />
        </v-col>
        <v-col cols="3">
          <v-select
            :items="spellDurations"
            :label="$t('spells.duration')"
            dense
            v-model="item.duration"
          />
        </v-col>
        <v-col cols="3">
          <v-select
            dense
            :items="spellKinds"
            v-model.number="item.kind"
            :label="$t('spells.kind')"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            :label="$t('spells.drain')"
            dense
            type="number"
            v-model.number="item.drain"
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
import {
  SpellCategory, SpellDuration, SpellKind, SpellRange,
} from '@/model';
import { Spell } from '@/store/SpellsStore';

@Component({
  components: { DataTableWithDialog },
  computed: mapModelLike('spells', ['items']),
})
export default class SpellsBox extends Vue {
  @Prop(Boolean) readonly editMode: boolean | undefined;

  static defaultHeight = 5;

  static optional = true;

  spellKinds = translatedEnumOptions(SpellKind, 'spells.kinds');

  spellCategories = translatedEnumOptions(SpellCategory, 'spells.categories');

  spellRanges = translatedEnumOptions(SpellRange, 'spells.ranges');

  spellDurations = translatedEnumOptions(SpellDuration, 'spells.durations');

  displayDuration(spell: Spell) {
    return this.$t(`spells.durationMnemonics.${reversedEnum(SpellDuration)[spell.duration]}`)
      .toString();
  }

  displayRange(spell: Spell) {
    return this.$t(`spells.rangeMnemonics.${reversedEnum(SpellRange)[spell.range]}`).toString();
  }

  displayKind(spell: Spell) {
    return this.spellKinds.find((e) => e.value === spell.kind)!!.text.toString()[0];
  }

  displayCategory(spell: Spell) {
    return this.spellCategories.find((e) => e.value === spell.category)!!.text.toString();
  }

  get headers() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('spells.category'),
      align: 'start',
      sortable: true,
      value: 'category',
    }, {
      text: this.$t('spells.kind'),
      align: 'start',
      sortable: true,
      value: 'kind',
    }, {
      text: this.$t('spells.range'),
      align: 'start',
      sortable: true,
      value: 'range',
    }, {
      text: this.$t('spells.duration'),
      align: 'start',
      sortable: false,
      value: 'duration',
    }, {
      text: this.$t('spells.drain'),
      align: 'end',
      sortable: false,
      value: 'drain',
    },
    ];
  }
}

</script>
