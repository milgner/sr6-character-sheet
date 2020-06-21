<template>
  <div>
    <v-row>
      <v-col md="6">
        <text-input
          :label="$t('lifestyle.primaryLifestyle')"
          v-model="primaryLifestyle"
        />
      </v-col>
      <v-col md="6">
        <text-input
          :label="$t('lifestyle.nuyen')"
          v-model="nuyen"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-textarea
          :label="$t('lifestyle.idsAndLicenses')"
          v-model="idsAndLicenses"
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
import { mapModelLike } from '@/store/util';

@Component({
  components: { TextInput },
  computed: mapModelLike('lifestyle', ['primaryLifestyle', 'nuyen', 'idsAndLicenses']),
})
export default class LifestyleBox extends Vue {
}
</script>
