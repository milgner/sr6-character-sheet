<template>
  <div>
    <label>{{ label }}</label>
    <div class="d-flex">
      <clear-value-button
        @click="clearDamage"
        :value="damageModifier"
      />
      <v-rating
        :length="maxValue"
        :value="currentValue"
        :full-icon="fullIcon"
        :empty-icon="emptyIcon"
        size="32"
        dense
        @input="onRatingChanged"
      />
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ClearValueButton from '@/components/ClearValueButton.vue';

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
@Component({
  components: { ClearValueButton },
})
export default class StatusTracker extends StatusTrackerProps {
  currentValue = this.value

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
