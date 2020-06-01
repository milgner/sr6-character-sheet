<template>
  <sheet-box label="Panzerung" />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class ArmorBox extends Vue {

}
</script>
