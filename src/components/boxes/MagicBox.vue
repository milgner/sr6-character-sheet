<template>
  <label>Magic!</label>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
})
export default class MagicBox extends Vue {
  static label = 'Zauber / Erzeugnisse / Rituale / Komplexe Formen';
}
</script>
