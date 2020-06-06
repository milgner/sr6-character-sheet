<template>
  <label>Nix magic</label>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class AdeptPowersBox extends Vue {
  static label = 'Adeptenkräfte & Andere Fähigkeiten';
}
</script>
