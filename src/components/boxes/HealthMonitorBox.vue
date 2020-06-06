<template>
  <v-container>
    <v-row>
      <v-col>
        <status-tracker
          label="Körperlich"
          :value="bodyHealth"
          :max-value="maxBodyHealth"
          full-icon="mdi-heart"
          empty-icon="mdi-heart-outline"
          size="32"
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <status-tracker
          label="Betäubung"
          :value="mentalHealth"
          :max-value="maxMentalHealth"
          full-icon="mdi-head-heart"
          empty-icon="mdi-head-heart-outline"
          size="32"
          dense
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import StatusTracker from '@/components/StatusTracker.vue';

@Component({
  components: { StatusTracker },
})
export default class HealthMonitorBox extends Vue {
  static label = 'Zustandsmonitor';

  maxBodyHealth = 10

  bodyHealth = 10;

  maxMentalHealth = 11;

  mentalHealth = 11;
}
</script>
