<template>
  <v-dialog
    v-model="value"
    width="500"
  >
    <v-card>
      <v-card-title class="headline grey lighten-2">
        {{ $i18n.t('legal.title') }}
      </v-card-title>

      <v-card-text>
        <h4 v-t="'legal.developerNotice'" />
        <p v-html="$t('legal.imprint')" />
        <p><obfuscated-email :email="$i18n.t('legal.authorEmail')" /></p>
        <p>{{ $i18n.t('legal.licenseInfo') }}</p>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="$emit('input', false)"
        >
          Alles klar!
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import ObfuscatedEmail from '@/components/ObfuscatedEmail.vue';

@Component({
  components: {
    ObfuscatedEmail,
  },
})
export default class LegalInfoDialog extends Vue {
  @Prop(Boolean) readonly value: boolean | undefined;
}
</script>
