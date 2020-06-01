<template>
  <sheet-box label="IDs / Lebensstile / Währung" />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SheetBox from '@/components/SheetBox.vue';

@Component({
  components: { SheetBox },
})
export default class LifestyleBox extends Vue {

}
</script>
