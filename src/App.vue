<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Shadowrun 6
      </div>

      <v-spacer />
      <v-btn
        fab
        color="secondary accent-2"
        bottom
        absolute
        right
        @click="dialog = !dialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-sheet>
        <grid-layout
          @layout-updated="onLayoutUpdated"
          :layout="layout"
          :col-num="12"
          :row-height="30"
          :vertical-compact="true"
        >
          <grid-item
            v-for="item in layout"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :key="item.i"
            drag-allow-from=".v-card__title"
          >
            <sheet-box
              :type="item.type"
              bind="props"
              :height="item.h * 40 - 15"
            />
          </grid-item>
        </grid-layout>
      </v-sheet>
    </v-content>
    <add-box-dialog :active="dialog"
                    :boxes="availableBoxes"
                    @close="onDialogClosed"
                    @input="onBoxAddSubmitted"
                    v-if="availableBoxes"/>
  </v-app>
</template>
<style lang="scss">
  .vue-grid-item,.vue-resizable .vue-resizable-handle {
    padding-right: 0 !important;
  }
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueGridLayout from 'vue-grid-layout';

import SheetBox from '@/components/boxes/SheetBox.vue';
import AddBoxDialog from '@/components/AddBoxDialog.vue';
import { BoxType } from '@/store';
import { Watch } from 'vue-property-decorator';

@Component({
  components: {
    AddBoxDialog,
    SheetBox,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
})
export default class App extends Vue {
  dialog = false;

  layout = [];

  created() {
    this.layout = this.layoutFromStore;
  }

  get layoutFromStore() {
    return this.$store.state.layout;
  }

  set layoutFromStore(layout) {
    this.$store.commit('updateLayout', layout);
  }

  @Watch('layoutFromStore')
  onLayoutFromStoreChanged(val: any, oldVal: any) {
    if (val) {
      this.layout = JSON.parse(JSON.stringify(this.layoutFromStore));
    }
  }

  get availableBoxes() {
    return this.$store.getters.availableBoxes.map((boxName: string) => ({
      text: this.$t(`boxes.${boxName}`),
      value: boxName,
    }));
  }

  onLayoutUpdated(newLayout: any) {
    this.$store.commit('updateLayout', newLayout);
  }

  onBoxAddSubmitted(boxType: BoxType) {
    this.$store.commit('addBox', boxType);
  }

  onDialogClosed() {
    this.dialog = false;
  }
}

</script>
