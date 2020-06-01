<template>
  <sheet-box label="Wichtige Kampf-Infos">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <text-input
          label="Angriffswert waffenlos"
          type="number"
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
export default class FightSummaryBox extends Vue {

}
</script>
