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
      <v-chip>{{ damageModifier }}</v-chip>
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
  },
});

@Component
export default class StatusTracker extends StatusTrackerProps {
  currentValue = this.value

  get damageModifier() {
    return Math.ceil((this.maxValue - this.currentValue) / -3);
  }

  onRatingChanged(newValue: number) {
    this.currentValue = newValue;
  }
}
</script>
