<template>
  <v-container>
    <v-row>
      <v-col>
        <label>Körperlich</label>
        <v-rating length="10"
                  :value="bodyHealth"
                  full-icon="mdi-heart"
                  empty-icon="mdi-heart-outline"
                  size="32"
                  dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <label>Betäubung</label>
        <v-rating length="11"
                  :value="mentalHealth"
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

@Component({
})
export default class HealthMonitorBox extends Vue {
  static label = 'Zustandsmonitor';

  bodyHealth = 10;

  mentalHealth = 11;
}
</script>
