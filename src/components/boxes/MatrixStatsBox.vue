<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Angriff"
          type="number"
          value="6"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Schleicher"
          type="number"
          value="5"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Datenverarbeitung"
          type="number"
          value="7"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Firewall"
          type="number"
          value="6"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <text-input
          label="Geräte/GS"
          value="MCT 360 / 3"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          label="Programme"
          hide-details
          auto-grow
          dense
          rows="3"
          value="Ausnutzen, Panzerung, Tarnkappe, Blackout, Babymonitor, Schmöker, Editieren"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <status-tracker
          label="Matrixzustandsmonitor"
          :max-value="matrixMaxHealth"
          :value="matrixDamage"
          full-icon="mdi-tablet-dashboard"
          empty-icon="mdi-tablet"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';
import StatusTracker from '@/components/StatusTracker.vue';

@Component({
  components: { StatusTracker, TextInput },
})
export default class MatrixStatsBox extends Vue {
  static label = 'Matrixwerte';

  matrixMaxHealth = 10;

  matrixDamage = 0;
}
</script>
