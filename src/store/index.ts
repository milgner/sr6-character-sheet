import Vue from 'vue';
import Vuex from 'vuex';
import PersonalDataBox from "@/components/boxes/PersonalDataBox.vue";
import AttributesBox from "@/components/boxes/AttributesBox.vue";
import SkillsBox from "@/components/boxes/SkillsBox.vue";
import LifestyleBox from "@/components/boxes/LifestyleBox.vue";
import FightSummaryBox from "@/components/boxes/FightSummaryBox.vue";
import HealthMonitorBox from "@/components/boxes/HealthMonitorBox.vue";
import FeatBox from "@/components/boxes/FeatBox.vue";
import ConnectionsBox from "@/components/boxes/ConnectionsBox.vue";
import RangedWeaponsBox from "@/components/boxes/RangedWeaponsBox.vue";
import BodytechBox from "@/components/boxes/BodytechBox.vue";
import EquipmentBox from "@/components/boxes/EquipmentBox.vue";
import ArmorBox from "@/components/boxes/ArmorBox.vue";
import MatrixStatsBox from "@/components/boxes/MatrixStatsBox.vue";
import PersonalData from "@/store/PersonalDataStore";

Vue.use(Vuex);

export default new Vuex.Store({
  //strict: process.env.NODE_ENV !== 'production',
  state: {
    layout: [
      {
        x: 0, y: 0, w: 6, h: 6, i: 0, height: 90, type: PersonalDataBox,
        data: {},
      },
      {
        x: 0, y: 6, w: 6, h: 9, i: 1, type: AttributesBox,
        data: {},
      }, {
        x: 0, y: 15, w: 6, h: 12, i: 2, type: SkillsBox,
          data: {},
      }, {
        x: 0, y: 26, w: 6, h: 6, i: 3, type: LifestyleBox,
          data: {},
      }, {
        x: 6, y: 0, w: 6, h: 3, i: 4, type: FightSummaryBox,
          data: {},
      }, {
        x: 6, y: 3, w: 6, h: 6, i: 5, type: HealthMonitorBox,
          data: {},
      }, {
        x: 6, y: 8, w: 6, h: 7, i: 6, type: FeatBox,
          data: {},
      }, {
        x: 6, y: 19, w: 6, h: 6, i: 7, type: ConnectionsBox,
          data: {},
      }, {
        x: 0, y: 23, w: 6, h: 5, i: 8, type: RangedWeaponsBox,
          data: {},
      }, {
        x: 0, y: 34, w: 6, h: 4, i: 9, type: BodytechBox,
          data: {},
      }, {
        x: 6, y: 38, w: 6, h: 15, i: 10, type: EquipmentBox,
          data: {},
      }, {
        x: 0, y: 38, w: 6, h: 5, i: 12, type: ArmorBox,
          data: {},
      }, {
        x: 6, y: 22, w: 6, h: 8, i: 13, type: MatrixStatsBox,
          data: {},
      },
    ]
  },
  mutations: {
    addBox (state, boxType) {
      let x = 0
      const maxY = state.layout.reduce((a, e) => {
        const y = e.y + e.h;
        if (y > a) {
          x = e.x;
          return y;
        } else {
          return a;
        }
      }, 0);
      state.layout.push({
        x: x,
        y: maxY,
        h: boxType.defaultHeight,
        i: state.layout.length + 1,
        w: 6,
        type: boxType,
        data: {},
      })
    }
  },
  actions: {
  },
  modules: {
    personalData: PersonalData,
  },
});
