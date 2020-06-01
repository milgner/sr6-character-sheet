<template>
  <sheet-box label="Persönliche Daten">
    <v-container>
      <v-row>
        <v-col>
          <text-input label="Name / Primärer Deckname" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <text-input label="Metatyp" />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <text-input label="Ethnizität" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <text-input label="Alter" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <text-input label="Geschlecht" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <text-input label="Größe" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <text-input label="Gewicht" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <text-input label="Reputation" />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <text-input label="Fahndungsstufe" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <text-input label="Karma" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <text-input label="Gesamtkarma" />
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <text-input label="Sonstiges" />
        </v-col>
      </v-row>
    </v-container>
  </sheet-box>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox, TextInput },
})
export default class PersonalDataBox extends Vue {

}
</script>
