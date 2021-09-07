<template>
  <text-input
    :label="$t('spells.tradition')"
    type="string"
    v-model="tradition"
  />
</template>
<script>
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';
import { mapModelLike } from '@/store/util';
import Vue from 'vue';

@Component({
  components: { TextInput },
  computed: mapModelLike('spells', ['tradition']),
})
export default class SpellsBox extends Vue {
}
</script>

<style lang="scss" scoped>
  .v-text-field {
    max-width: max-content;
  }
</style>
