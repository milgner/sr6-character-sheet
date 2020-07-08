<template>
  <v-dialog :value="active" @input="onStateChanged">
    <v-form @submit.prevent="onBoxAddSubmitted">
      <v-card>
        <v-card-text>
          <v-select :items="boxes" v-model="currentValue"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text type="submit">{{ $t('dialogs.add') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class AddBoxDialog extends Vue {
  @Prop(Boolean) readonly active: boolean | undefined;

  @Prop(Array) readonly boxes: any[] | undefined;

  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      currentValue: null,
    };
  }

  onStateChanged(state: boolean) {
    if (state === false) {
      this.$emit('close');
    }
  }

  onBoxAddSubmitted() {
    this.$emit('input', this.$data.currentValue);
    this.$emit('close');
  }
}
</script>

<style scoped>

</style>
