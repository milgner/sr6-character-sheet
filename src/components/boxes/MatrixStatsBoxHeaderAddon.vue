<template>
  <v-switch
    :label="translatedSimMode(simHot)"
    type="string"
    v-model="simHot"
    hide-details
    dense
  />
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { mapModelLike } from '@/store/util';
import Vue from 'vue';

@Component({
  components: { },
  computed: mapModelLike('matrix', ['simHot']),
})
export default class MatrixStatsBoxHeaderAddon extends Vue {
  translatedSimMode(isHot: boolean): string {
    const key = isHot ? 'hot' : 'cold';
    return this.$i18n.t(`matrix.simModes.${key}`).toString();
  }
}
</script>

<style lang="scss" scoped>
.v-input--selection-controls.v-input {
  margin-top: 0;
  padding-top: 0;
}
</style>
