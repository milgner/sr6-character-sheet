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
        :value="baseValue"
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
        :value="dieValue"
        type="number"
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
    value: String,
    unavailable: Boolean,
  },
});

const matcher = /^(\d+)\s*\+(\d)[dw]6$/;

@Component({
  components: { TextInput },
})
export default class InitiativeInput extends InitiativeInputProps {
  get baseValue() {
    return this.$props.value?.match(matcher)[1];
  }

  get dieValue() {
    return this.$props.value?.match(matcher)[2];
  }
}
</script>
