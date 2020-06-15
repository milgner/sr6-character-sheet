<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('matrix.attack')"
          type="number"
          v-model="attack"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('matrix.sleaze')"
          type="number"
          v-model="sleaze"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('matrix.dataProcessing')"
          type="number"
          v-model="dataProcessing"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('matrix.firewall')"
          type="number"
          v-model="firewall"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <text-input
          :label="$t('matrix.deviceName')"
          v-model="deviceName"
        />
      </v-col>
      <v-col cols="4">
        <text-input
          :label="$t('matrix.deviceRating')"
          v-model="deviceRating"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-combobox
          :delimiters="[',']"
          :items="availablePrograms"
          :label="$t('matrix.programs')"
          :no-data-text="$t('matrix.noPrograms')"
          auto-grow
          chips
          deletable-chips
          dense
          hide-details
          hide-selected
          multiple
          rows="3"
          small-chips
          v-model="programs"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <status-tracker
          :label="$t('matrix.damageMonitor')"
          :max-value="totalHealth"
          :damage-modifier="damageModifier"
          v-model="damage"
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
import { mapGetters } from 'vuex';
import { mapModelLike } from '@/store/util';

@Component({
  components: { StatusTracker, TextInput },
  computed: {
    ...mapGetters('matrix', ['totalHealth', 'damageModifier']),
    ...mapModelLike('matrix', [
      'simHot',
      'attack',
      'sleaze',
      'dataProcessing',
      'firewall',
      'deviceName',
      'deviceRating',
      'programs',
      'damage',
    ]),
  },
})
export default class MatrixStatsBox extends Vue {
  get availablePrograms() {
    // const installedPrograms = this.$store.state.matrix.programs;
    return Object.values(this.$t('matrix.availablePrograms'));
    //      .filter((e: string) => installedPrograms.indexOf(e) > -1);
  }
}
</script>
