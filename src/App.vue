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
      <v-speed-dial
        direction="bottom"
        open-on-hover
        right
        top
        transition="slide-y-transition"
        v-model="fab"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            fab
            color="secondary"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          small
          :color="editMode ? 'secondary accent-2' : 'primary accent-2'"
          @click="editMode = !editMode"
        >
          <v-icon>
            mdi-pencil-outline
          </v-icon>
        </v-btn>
        <v-btn
          fab
          small
          color="primary"
          @click="onSaveClicked"
        >
          <v-icon>
            mdi-arrow-down-bold-hexagon-outline
          </v-icon>
        </v-btn>
        <v-btn
          fab
          small
          color="primary"
          @click="onLoadClicked"
        >
          <v-icon>
            mdi-arrow-up-bold-hexagon-outline
          </v-icon>
        </v-btn>
      </v-speed-dial>
    </v-app-bar>

    <v-main>
      <v-sheet>
        <grid-layout
          @layout-updated="onLayoutUpdated"
          :layout="layout"
          :col-num="12"
          :row-height="30"
          :vertical-compact="true"
          :is-draggable="editMode"
          :is-resizable="editMode"
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
              :edit-mode="editMode"
              @remove="removeBox(item)"
            />
          </grid-item>
          <grid-item
            v-show="editMode"
            v-bind="editModePlaceholderProps"
            key="addBoxPlaceholder"
            static
          >
            <v-card
              outlined
              :height="editModePlaceholderProps.h * 40 - 15"
              class="d-flex justify-center"
            >
              <v-card-actions>
                <v-btn
                  fab
                  large
                  @click="dialog = true"
                >
                  <v-icon large>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </grid-item>
        </grid-layout>
      </v-sheet>
    </v-main>
    <add-box-dialog
      :active="dialog"
      :boxes="availableBoxes"
      @close="onDialogClosed"
      @input="onBoxAddSubmitted"
      v-if="availableBoxes"
    />
  </v-app>
</template>
<style lang="scss">
  .vue-grid-item,.vue-resizable .vue-resizable-handle {
    padding-right: 0 !important;
  }

  .placeholder-card {
    display: flex;
  }
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueGridLayout from 'vue-grid-layout';

import SheetBox from '@/components/boxes/SheetBox.vue';
import AddBoxDialog from '@/components/AddBoxDialog.vue';
import { BoxState, BoxType } from '@/store';
import { Watch } from 'vue-property-decorator';

// since it's not possible to get notified when cancel is clicked
// and spamming the DOM is not a good idea, re-use the input
let loadFileInput: HTMLInputElement | undefined;

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

  fab = false;

  editMode = false;

  layout: BoxState[] = [];

  // adds a "add box placeholder" box while edit mode is active
  editModePlaceholderProps: BoxState = {
    type: 'AddBoxPlaceholder',
    i: '99999',
    h: 5,
    x: 0,
    y: 0,
    w: 6,
  };

  // lifecycle method, invoked by Vue
  created() {
    this.layout = this.layoutFromStore;
    this.updatePlaceholderBoxState();
  }

  updatePlaceholderBoxState() {
    if (this.layout === undefined) { return; }
    const [x, y] = this.$store.getters.minimumCoordinates;
    this.editModePlaceholderProps.x = x;
    this.editModePlaceholderProps.y = y;
  }

  get layoutFromStore() {
    return this.$store.state.layout;
  }

  set layoutFromStore(layout) {
    this.$store.commit('updateLayout', layout);
  }

  @Watch('layoutFromStore')
  onLayoutFromStoreChanged(val: any) {
    if (val) {
      this.layout = JSON.parse(JSON.stringify(this.layoutFromStore));
      this.updatePlaceholderBoxState();
    }
  }

  get availableBoxes() {
    return this.$store.getters.availableBoxes.map((boxName: string) => ({
      text: this.$t(`boxes.${boxName}`),
      value: boxName,
    }));
  }

  onLayoutUpdated(newLayout: any) {
    this.layoutFromStore = newLayout;
    this.updatePlaceholderBoxState();
  }

  onBoxAddSubmitted(boxType: BoxType) {
    this.$store.commit('addBox', boxType);
  }

  onSaveClicked() {
    this.$store.dispatch('downloadState');
  }

  onLoadClicked() {
    if (loadFileInput === undefined) {
      loadFileInput = document.createElement('input');
      const store = this.$store;
      loadFileInput.setAttribute('type', 'file');
      loadFileInput.setAttribute('accept', '.sr6,application/json');
      loadFileInput.addEventListener('change', (inputEvent) => {
        const fileList = (inputEvent as any).target!.files;
        if (fileList.length === 0) {
          return;
        }
        const reader = new FileReader();
        reader.addEventListener('load', (loadEvent: any) => {
          store.replaceState(JSON.parse(loadEvent!.target!.result));
        });
        reader.readAsText(fileList[0]);
      });
    }
    loadFileInput.click();
  }

  onDialogClosed() {
    this.dialog = false;
  }

  removeBox(item: BoxState) {
    const idx = this.layoutFromStore.findIndex((e: BoxState) => e.i === item.i);
    if (idx > -1) {
      this.layoutFromStore.splice(idx, 1);
      this.$store.commit('updateLayout', this.layoutFromStore);
    }
  }
}

</script>
