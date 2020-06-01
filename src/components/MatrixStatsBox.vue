<template>
  <sheet-box label="Matrixwerte">
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Angriff"
          type="number"
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
        />
      </v-col>      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          label="Datenverarbeitung"
          type="number"
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
        <text-input label="Geräte/GS" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea label="Programme" auto-grow dense rows="3" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <label>Matrixzustandsmonitor</label>
        <v-rating length="10"
                  full-icon="mdi-tablet-dashboard"
                  empty-icon="mdi-tablet"
                  size="32"
                  dense
        />
      </v-col>
    </v-row>
  </sheet-box>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';
import TextInput from '@/components/TextInput.vue';

@Component({
  components: { SheetBox, TextInput },
})
export default class MatrixStatsBox extends Vue {

}
</script>
