<template>
  <v-row style="padding: 0; margin: 0;">
    <v-col
      cols="12"
      sm="7"
      style="padding: 0; margin: 0;"
    >
      <text-input
        :label="label"
        type="number"
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
        type="number"
      />
    </v-col>
  </v-row>
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
  },
});

@Component({
  components: { TextInput },
})
export default class InitiativeInput extends InitiativeInputProps {

}
</script>
