<template>
  <div>
    <label>{{ label }}</label>
    <div class="d-flex">
      <v-rating
        :length="maxValue"
        :value="currentValue"
        :full-icon="fullIcon"
        :empty-icon="emptyIcon"
        size="32"
        dense
        @input="onRatingChanged"
      />
      <div @mouseenter="mouseEnterChipArea"
           @mouseleave="mouseLeaveChipArea">
        <v-chip @click="clearDamage" v-if="showModifierChip">{{ damageModifier }}</v-chip>
        <v-icon dense size="32" @click="clearDamage" v-else>mdi-cancel</v-icon>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const StatusTrackerProps = Vue.extend({
  props: {
    maxValue: Number,
    value: Number,
    label: String,
    fullIcon: String,
    emptyIcon: String,
    damageModifier: Number,
  },
});

@Component
export default class StatusTracker extends StatusTrackerProps {
  currentValue = this.value

  showModifierChip = true

  mouseEnterChipArea() {
    this.showModifierChip = this.currentValue === 0;
  }

  mouseLeaveChipArea() {
    this.showModifierChip = true;
  }

  clearDamage() {
    this.currentValue = 0;
    this.$emit('input', 0);
  }

  onRatingChanged(newValue: number) {
    this.currentValue = newValue;
    this.$emit('input', newValue);
  }
}
</script>
