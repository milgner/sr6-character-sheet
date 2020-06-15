<template>
  <v-row
    style="padding: 0; margin: 0;"
    v-if="!unavailable"
  >
    <v-col
      cols="12"
      sm="7"
      style="padding: 0; margin: 0;"
    >
      <text-input
        :label="label"
        type="number"
        :value="base"
        :readonly="readonly || baseReadOnly"
        @input="baseChanged"
      />
    </v-col>
    <v-col
      cols="12"
      sm="5"
      style="padding: 0; margin: 0;"
    >
      <text-input
        prefix="+"
        append-icon="mdi-dice-d6-outline"
        :value="dice"
        type="number"
        :readonly="readonly"
        @input="diceChanged"
      />
    </v-col>
  </v-row>
  <v-skeleton-loader
    v-else
    boilerplate
    type="list-item"
  />
</template>
<style lang="scss">

</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';

const InitiativeInputProps = Vue.extend({
  props: {
    label: String,
    base: Number,
    dice: Number,
    unavailable: Boolean,
    readonly: Boolean,
    baseReadOnly: Boolean,
  },
});

@Component({
  components: { TextInput },
})
export default class InitiativeInput extends InitiativeInputProps {
  baseChanged(value: string) {
    this.$emit('baseValue', Number.parseInt(value, 10));
  }

  diceChanged(value: string) {
    this.$emit('diceValue', Number.parseInt(value, 10));
  }
}
</script>
