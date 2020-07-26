<template>
  <span class="reverse">{{ reversedEmail }}</span>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class ObfuscatedEmail extends Vue {
  @Prop(String) readonly email: string | undefined;

  get reversedEmail() {
    return this.email!!.split('').reverse().join('');
  }
}
</script>

<style scoped>
  span.reverse {
    unicode-bidi: bidi-override;
    direction: rtl;
  }
</style>
