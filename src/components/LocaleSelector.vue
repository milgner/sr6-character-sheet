<template>
  <div class="locale-selector">
    <v-select
      :value="$i18n.locale"
      :items="locales"
      @change="onLocaleChanged"
      item-text="label"
      item-value="iso"
    >
      <template
        slot="item"
        slot-scope="data"
      >
        <img
          class="flag-icon"
          :src="data.item.icon"
          height="15"
        >{{ data.item.label }}
      </template>
    </v-select>
  </div>
</template>
<style scoped>
.flag-icon {
  padding-right: 1em;
}
</style>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-var-requires */
// TODO: find out why import does not work
import { Component, Vue } from 'vue-property-decorator';

const flagDe = require('@/assets/flag-de.svg');
const flagEn = require('@/assets/flag-en.svg');

@Component({})
export default class LocaleSelector extends Vue {
  locales = [
    { iso: 'de', label: 'Deutsch', icon: flagDe },
    { iso: 'en', label: 'English', icon: flagEn },
  ];

  onLocaleChanged(newLocale: string) {
    this.$store.dispatch('setLocale', newLocale);
  }
}
</script>
