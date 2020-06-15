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
          :layout.sync="layout"
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
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          <v-select>Schalala</v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Hinzufügen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<style lang="scss">
  .vue-grid-item,.vue-resizable .vue-resizable-handle {
    padding-right: 0 !important;
  }
</style>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Component from 'vue-class-component';
import VueGridLayout from 'vue-grid-layout';

import SheetBox from '@/components/boxes/SheetBox.vue';


@Component({
  components: {
    SheetBox,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  computed: mapState([
    'layout',
  ]),
})
export default class App extends Vue {
  dialog = false;
}

</script>
