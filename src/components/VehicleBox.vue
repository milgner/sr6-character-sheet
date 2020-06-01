<template>
  <sheet-box label="Fahrzeug" />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class VehicleBox extends Vue {

}
</script>
