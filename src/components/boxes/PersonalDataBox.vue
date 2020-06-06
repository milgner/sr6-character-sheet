<template>
  <div>
    <v-row>
      <v-col>
        <text-input label="Name / Primärer Deckname" value="Fizzbuzz (Xavier Devereaux)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <text-input label="Metatyp" value="Mensch" />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <text-input label="Ethnizität" value="Kaukasisch" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input label="Alter" value="25" />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input label="Geschlecht" value="männlich"/>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input label="Größe" value="1.74m" />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input label="Gewicht" value="63m" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input label="Reputation" value="0" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input label="Fahndungsstufe" value="0" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input label="Karma" value="0" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input label="Gesamtkarma" value="0" />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/TextInput.vue';

const PersonalDataBoxProps = Vue.extend({
  components: { TextInput },
});

export default class PersonalDataBox extends PersonalDataBoxProps {
  static label = 'Persönliche Daten';
}

</script>
