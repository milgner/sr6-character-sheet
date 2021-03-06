<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        {{ characterName }}
      </div>

      <v-spacer />
      <v-speed-dial
        id="main-menu"
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
        <menu-fab
          :color="editMode ? 'secondary accent-2' : 'primary accent-2'"
          icon="mdi-pencil-outline"
          :tooltip="$i18n.t(`globalMenu.edit.${editMode ? 'off' : 'on'}`)"
          @click="toggleEditMode"
        />
        <menu-fab
          color="primary"
          icon="mdi-arrow-down-bold-hexagon-outline"
          :tooltip="$i18n.t('globalMenu.save')"
          @click="onSaveClicked"
        />
        <menu-fab
          color="primary"
          icon="mdi-arrow-up-bold-hexagon-outline"
          :tooltip="$i18n.t('globalMenu.load')"
          @click="onLoadClicked"
        />
        <menu-fab
          color="secondary"
          icon="mdi-cog"
          :tooltip="$i18n.t('globalMenu.settings')"
          @click="onSettingsClicked"
        />
        <menu-fab
          color="secondary"
          :tooltip="$i18n.t('globalMenu.legal')"
          icon="mdi-gavel"
          @click="onLegalClicked"
        />
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
              :item-id="item.itemId"
              @remove="removeBox(item)"
            />
          </grid-item>
          <grid-item
            id="add-box-placeholder"
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
                  @click="dialog = 'addBox'"
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
      :active="dialog == 'addBox'"
      :boxes="availableBoxes"
      @close="onDialogClosed"
      @input="onBoxAddSubmitted"
      v-if="availableBoxes"
    />
    <legal-info-dialog
      :value="dialog == 'legal'"
      @input="onDialogClosed"
    />
    <settings-dialog
      :value="dialog == 'settings'"
      @input="onDialogClosed"
    />
    <app-tour :toggle-edit-mode="toggleEditMode" />
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
// eslint-disable-next-line
// @ts-ignore
import VueGridLayout from 'vue-grid-layout';

import SheetBox from '@/components/boxes/SheetBox.vue';
import AddBoxDialog from '@/components/AddBoxDialog.vue';
import { BoxState, BoxType } from '@/store/TypeDefs';
import { Watch } from 'vue-property-decorator';
import MenuFab from '@/components/MenuFab.vue';
import LegalInfoDialog from '@/components/LegalInfoDialog.vue';
import SettingsDialog from '@/components/SettingsDialog.vue';
import AppTour from '@/components/AppTour.vue';

// since it's not possible to get notified when cancel is clicked
// and spamming the DOM is not a good idea, re-use the input
let loadFileInput: HTMLInputElement | undefined;

const PLACEHOLDER_BOX_WIDTH = 6;
const PLACEHOLDER_BOX_HEIGHT = 5;

@Component({
  components: {
    AppTour,
    SettingsDialog,
    MenuFab,
    AddBoxDialog,
    SheetBox,
    LegalInfoDialog,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
})
export default class App extends Vue {
  dialog: null | 'addBox' | 'settings' | 'legal' = null;

  fab = false;

  editMode = false;

  layout: BoxState[] = [];

  // adds a "add box placeholder" box while edit mode is active
  editModePlaceholderProps: BoxState = {
    type: 'AddBoxPlaceholder',
    i: '99999',
    h: PLACEHOLDER_BOX_HEIGHT,
    x: 0,
    y: 0,
    w: PLACEHOLDER_BOX_WIDTH,
    itemId: undefined,
  };

  // lifecycle method, invoked by Vue
  created() {
    this.layout = this.layoutFromStore;
    this.updatePlaceholderBoxState();
  }

  updatePlaceholderBoxState() {
    if (this.layout === undefined) { return; }
    const [x, y] = this.$store.getters.minimumCoordinates(PLACEHOLDER_BOX_WIDTH,
      PLACEHOLDER_BOX_HEIGHT);
    this.editModePlaceholderProps.x = x;
    this.editModePlaceholderProps.y = y;
  }

  get characterName() {
    return this.$store.state.personalData.name;
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

  toggleEditMode(isOn: boolean | undefined) {
    if (isOn === undefined) {
      this.editMode = !this.editMode;
    } else {
      this.editMode = !!isOn;
    }
  }

  onLayoutUpdated(newLayout: any) {
    this.layoutFromStore = newLayout;
    this.updatePlaceholderBoxState();
  }

  onBoxAddSubmitted(boxType: BoxType) {
    this.$store.dispatch('addBox', boxType);
  }

  onSaveClicked() {
    this.$store.dispatch('downloadState');
  }

  onLegalClicked() {
    this.dialog = 'legal';
  }

  onSettingsClicked() {
    this.dialog = 'settings';
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
    this.dialog = null;
  }

  removeBox(item: BoxState) {
    const idx = this.layoutFromStore.findIndex((e: BoxState) => e.i === item.i);
    if (idx > -1) {
      if (item.itemId !== undefined) {
        this.$store.dispatch('removeRepeatedBox', [item.type, item.itemId]);
      }
      this.layoutFromStore.splice(idx, 1);
      this.$store.commit('updateLayout', this.layoutFromStore);
    }
  }
}

</script>
