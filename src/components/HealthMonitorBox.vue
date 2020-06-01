<template>
  <sheet-box label="Zustandsmonitor">
    <v-container>
      <v-row>
        <v-col>
          <label>Körperlich</label>
          <v-rating length="10"
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
                    full-icon="mdi-head-heart"
                    empty-icon="mdi-head-heart-outline"
                    size="32"
                    dense
          />
        </v-col>
      </v-row>
    </v-container>
  </sheet-box>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class HealthMonitorBox extends Vue {

}
</script>
