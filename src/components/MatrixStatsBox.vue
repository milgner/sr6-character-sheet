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
          value="10"
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
      </v-col>      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Datenverarbeitung"
          type="number"
          value="7"
        />
      </v-col>      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Firewall"
          type="number"
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
          auto-grow
          dense
          rows="3"
          value="Ausnutzen, Panzerung, Tarnkappe, Blackout, Babymonitor, Schmöker, Editieren"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <label>Matrixzustandsmonitor</label>
        <v-rating
          length="10"
          :value="matrixHealth"
          full-icon="mdi-tablet-dashboard"
          empty-icon="mdi-tablet"
          size="32"
          dense
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';

@Component({
  components: { TextInput },
})
export default class MatrixStatsBox extends Vue {
  static label = 'Matrixwerte';

  matrixHealth = 10;
}
</script>
