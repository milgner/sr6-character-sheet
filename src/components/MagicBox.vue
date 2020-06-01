<template>
  <sheet-box label="Zauber / Erzeugnisse / Rituale / Komplexe Formen" />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class MagicBox extends Vue {

}
</script>
