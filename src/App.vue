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
            @resize="resizeItem"
            drag-allow-from=".v-card__title"
          >
            <sheet-box
              :type="item.type"
              bind="props"
              :height="item.height"
            />
          </grid-item>
        </grid-layout>
      </v-sheet>
    </v-content>
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
import PersonalDataBox from '@/components/boxes/PersonalDataBox.vue';
import VueGridLayout from 'vue-grid-layout';
import SkillsBox from '@/components/boxes/SkillsBox.vue';
import AttributesBox from '@/components/boxes/AttributesBox.vue';
import LifestyleBox from '@/components/boxes/LifestyleBox.vue';
import FightSummaryBox from '@/components/boxes/FightSummaryBox.vue';
import HealthMonitorBox from '@/components/boxes/HealthMonitorBox.vue';
import FeatBox from '@/components/boxes/FeatBox.vue';
import ConnectionsBox from '@/components/boxes/ConnectionsBox.vue';
import RangedWeaponsBox from '@/components/boxes/RangedWeaponsBox.vue';
import BodytechBox from '@/components/boxes/BodytechBox.vue';
import EquipmentBox from '@/components/boxes/EquipmentBox.vue';
import ArmorBox from '@/components/boxes/ArmorBox.vue';
import MatrixStatsBox from '@/components/boxes/MatrixStatsBox.vue';

import SheetBox from '@/components/boxes/SheetBox.vue';

const testLayout = [
  {
    x: 0, y: 0, w: 6, h: 6, i: 0, height: 90, type: PersonalDataBox,
  },
  {
    x: 0, y: 6, w: 6, h: 9, i: 1, type: AttributesBox,
  }, {
    x: 0, y: 15, w: 6, h: 12, i: 2, type: SkillsBox,
  }, {
    x: 0, y: 26, w: 6, h: 6, i: 3, type: LifestyleBox,
  }, {
    x: 6, y: 0, w: 6, h: 3, i: 4, type: FightSummaryBox,
  }, {
    x: 6, y: 3, w: 6, h: 6, i: 5, type: HealthMonitorBox,
  }, {
    x: 6, y: 8, w: 6, h: 7, i: 6, type: FeatBox,
  }, {
    x: 6, y: 19, w: 6, h: 6, i: 7, type: ConnectionsBox,
  }, {
    x: 0, y: 23, w: 6, h: 5, i: 8, type: RangedWeaponsBox,
  }, {
    x: 0, y: 34, w: 6, h: 4, i: 9, type: BodytechBox,
  }, {
    x: 6, y: 38, w: 6, h: 15, i: 10, type: EquipmentBox,
  }, {
  //   x: 6, y: 24, w: 6, h: 3, i: 11, type: MeleeWeaponsBox,
  // }, {
    x: 0, y: 38, w: 6, h: 5, i: 12, type: ArmorBox,
  }, {
    x: 6, y: 22, w: 6, h: 8, i: 13, type: MatrixStatsBox,
  // }, {
  //   x: 6, y: 31, w: 6, h: 5, i: 14, type: VehicleBox,
  // }, {
  //   x: 6, y: 36, w: 6, h: 6, i: 15, type: MagicBox,
  // }, {
  //   x: 6, y: 42, w: 6, h: 6, i: 16, type: AdeptPowersBox,
  },
// eslint-disable-next-line no-param-reassign,no-return-assign
].map((i) => { i.height = i.h * 40 - 15; return i; });

@Component({
  components: {
    SheetBox,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
})
export default class App extends Vue {
  layout = testLayout

  // eslint-disable-next-line class-methods-use-this
  resizeItem(i: any, newH: number, newW: number, newHPx: number, newWPx: number) {
    // eslint-disable-next-line no-param-reassign
    testLayout[i].height = (newH * 40) - 15;
  }
}

</script>
