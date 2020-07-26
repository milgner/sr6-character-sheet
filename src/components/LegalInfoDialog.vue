<template>
  <v-dialog
    v-model="value"
    width="500"
  >
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Rechtliches
      </v-card-title>

      <v-card-text>
        <h3>Impressum</h3>

        <h4>Entwickelt und gehosted von:</h4>
        <p>
          Marcus Ilgner<br>
          Kölner Str. 98<br>
          53840 Troisdorf<br>
          <br>
          <obfuscated-email email="mail@marcusilgner.com" />
        </p>
        <h4>The Shadowrun trademark:</h4>
        <p>
          The Topps Company, Inc. has sole ownership of the names, logo, artwork, marks,
          photographs, sounds, audio, video and/or any proprietary material used in connection with
          the game Shadowrun.<br>
          The Topps Company, Inc. has granted permission to Marcus Ilgner to use such names, logos,
          artwork, marks and/or any proprietary materials for promotional and informational purposes
          on its website but does not endorse, and is not affiliated with Marcus Ilgner in any
          official capacity whatsoever.
        </p>
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
