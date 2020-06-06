<template>
  <div>
    <v-row>
      <v-col md="6">
        <text-input
          label="Primärer Lebensstil"
          value="Squatter"
        />
      </v-col>
      <v-col md="6">
        <text-input label="Nuyen" value="471" />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-textarea
          label="IDs, Lizenzen"
          value="Falsche SIN (4)"
          rows="3"
          hide-details
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
export default class LifestyleBox extends Vue {
  static label = 'IDs / Lebensstile / Währung';
}
</script>
