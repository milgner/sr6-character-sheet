<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.bod')"
          type="number"
          v-model.number="bod"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.wil')"
          type="number"
          v-model.number="wil"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="4"
      >
        <text-input
          :label="$t('attributes.ess')"
          :rules="[rules.essence, rules.notNegative]"
          v-model.number="ess"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.agi')"
          type="number"
          v-model.number="agi"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.log')"
          type="number"
          v-model.number="log"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          v-if="isMage"
          :label="$t('attributes.mag')"
          type="number"
          v-model.number="mag"
          :rules="[rules.notNegative]"
        />
        <text-input
          v-if="isTechnomancer"
          :label="$t('attributes.res')"
          type="number"
          v-model.number="res"
          :rules="[rules.notNegative]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.rea')"
          type="number"
          v-model.number="rea"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.int')"
          type="number"
          v-model.number="int"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <!-- TODO: commit changes to store -->
        <initiative-input
          :label="$t('attributes.ini')"
          :base="iniBase"
          base-read-only
          :dice="iniDice"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.str')"
          type="number"
          v-model.number="str"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.cha')"
          type="number"
          v-model.number="cha"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <initiative-input
          :label="$t('attributes.matrixIni')"
          :base="matrixIniBase"
          :dice="matrixIniDice"
          :unavailable="this.$store.getters['attributes/matrixIniBase'] === null"
          readonly
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="4"
      >
        <text-input
          :label="$t('attributes.edg')"
          type="number"
          v-model.number="edg"
          :rules="[rules.notNegative]"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <v-slider
          step="1"
          ticks="always"
          tick-size="4"
          min="0"
          max="7"
          v-model.number="currentEdge"
          dense
          hide-details
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <initiative-input
          :label="$t('attributes.astralIni')"
          :base="astralIniBase"
          :dice="astralIniDice"
          readonly
          :unavailable="this.$store.getters['attributes/astralIniBase'] === null"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.composure')"
          type="number"
          readonly
          :value="composure"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.judgeIntentions')"
          type="number"
          readonly
          :value="judgeIntentions"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <text-input
          :label="$t('attributes.memory')"
          type="number"
          readonly
          :value="memory"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <text-input
          :label="$t('attributes.carryLift')"
          type="number"
          readonly
          :value="carryLift"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <text-input
          :label="$t('attributes.movement')"
          v-model.number="movement"
          :rules="[rules.notNegative]"
        />
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">

</style>
<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/TextInput.vue';
import InitiativeInput from '@/components/InitiativeInput.vue';
import { mapModelLike } from '@/store/util';
import { mapGetters } from 'vuex';
import { CharacterType } from '@/model';

const AttributesBoxProps = Vue.extend({
  components: { InitiativeInput, TextInput },
  computed: {
    ...mapGetters('attributes', [
      'composure',
      'carryLift',
      'judgeIntentions',
      'memory',
      'iniBase',
      'astralIniBase',
      'astralIniDice',
      'matrixIniDice',
      'matrixIniBase',
    ]),
    ...mapModelLike('attributes', [
      'bod',
      'agi',
      'rea',
      'str',
      'wil',
      'log',
      'int',
      'cha',
      'edg',
      'ess',
      'mag',
      'res',
      'iniDice',
      'movement',
      'currentEdge',
    ]),
  },
});

export default class AttributesBox extends AttributesBoxProps {
  static defaultHeight = 10;

  rules = {
    essence: (value: string) => /^\d([\\.,]\d{1,2})?$/.test(value) || 'Ungültiger Wert',
    notNegative: (value: string) => {
      const parsed = Number.parseInt(value, 10);
      return (Number.isInteger(parsed) && parsed >= 0) || 'Ungültiger Wert';
    },
  }

  get isMage() {
    return this.$store.state.personalData.characterType === CharacterType.awakenedMage;
  }

  get isTechnomancer() {
    return this.$store.state.personalData.characterType === CharacterType.awakenedTechnomancer;
  }
}

</script>
