<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
      md="6"
    >
      <text-input
        label="Angriffswert waffenlos"
        type="number"
        value="7"
      />
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="6"
    >
      <text-input
        label="Verteidigungswert"
        type="number"
        value="7"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TextInput from '@/components/TextInput.vue';

@Component({
  components: { TextInput },
})
export default class FightSummaryBox extends Vue {
}
</script>
