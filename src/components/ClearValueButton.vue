<template>
  <div
    @mouseenter="mouseEnterChipArea"
    @mouseleave="mouseLeaveChipArea"
  >
    <v-chip
      @click="$emit('click')"
      v-if="showModifierChip"
    >
      {{ value }}
    </v-chip>
    <v-icon
      dense
      size="32"
      @click="$emit('click')"
      v-else
    >
      mdi-cancel
    </v-icon>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ClearValueButton extends Vue {
  @Prop(Number) readonly value: number | undefined;

  showModifierChip = true

  mouseEnterChipArea() {
    this.showModifierChip = this.value === 0;
  }

  mouseLeaveChipArea() {
    this.showModifierChip = true;
  }
}
</script>

<style scoped>

</style>
