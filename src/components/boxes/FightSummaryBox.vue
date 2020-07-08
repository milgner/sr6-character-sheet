<template>
  <v-row>
    <v-col
      cols="6"
    >
      <text-input
        :label="$t('attributes.attackUnarmed')"
        type="number"
        v-model.number="attackUnarmed"
      />
    </v-col>
    <v-col
      cols="6"
    >
      <text-input
        :label="$t('attributes.defense')"
        type="number"
        v-model.number="defense"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';
import { mapModelLike } from '@/store/util';

@Component({
  components: { TextInput },
  computed: mapModelLike('attributes', ['attackUnarmed', 'defense']),
})
export default class FightSummaryBox extends Vue {
  static defaultHeight = 3;
}
</script>
