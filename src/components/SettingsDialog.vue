<template>
  <v-dialog
    :value="value"
    @input="$emit('input', false)"
    width="500"
  >
    <v-card>
      <v-card-title class="headline grey lighten-2">
        {{ $i18n.t('settings.title') }}
      </v-card-title>

      <v-card-text>
        <h4 v-t="'settings.locale'" />
        <locale-selector />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="$emit('input', false)"
          v-t="'dialogs.close'"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import ObfuscatedEmail from '@/components/ObfuscatedEmail.vue';
import LocaleSelector from './LocaleSelector.vue';

@Component({
  components: {
    LocaleSelector,
  },
})
export default class SettingsDialog extends Vue {
  @Prop(Boolean) readonly value: boolean | undefined;
}
</script>
