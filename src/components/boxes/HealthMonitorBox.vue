<template>
  <v-container>
    <v-row>
      <v-col>
        <status-tracker
          :max-value="maxPhysicalDamage"
          :damage-modifier="physicalDamageModifier"
          dense
          empty-icon="mdi-heart-outline"
          full-icon="mdi-heart"
          label="Körperlich"
          size="32"
          v-model.number="physicalDamage"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <status-tracker
          :max-value="maxStunDamage"
          :damage-modifier="stunDamageModifier"
          dense
          empty-icon="mdi-head-heart-outline"
          full-icon="mdi-head-heart"
          label="Betäubung"
          size="32"
          v-model.number="stunDamage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import StatusTracker from '@/components/StatusTracker.vue';
import { mapGetters } from 'vuex';
import { mapModelLike } from '@/store/util';

@Component({
  components: { StatusTracker },
  computed: {
    ...mapModelLike('healthMonitor', [
      'stunDamage',
      'physicalDamage',
    ]),
    ...mapGetters('healthMonitor', [
      'maxPhysicalDamage',
      'maxStunDamage',
      'physicalDamageModifier',
      'stunDamageModifier',
    ]),
  },
})
export default class HealthMonitorBox extends Vue {
}
</script>
