<template>
  <v-container>
    <v-row>
      <v-col>
        <text-input
          :label="$t('vehicles.model')"
          v-model="model"
        />
      </v-col>
      <v-col>
        <text-input
          :label="$t('vehicles.handlingStreet')"
          v-model.number="handlingStreet"
        />
      </v-col>
      <v-col>
        <text-input
          :label="$t('vehicles.handlingOffroad')"
          v-model.number="handlingOffroad"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.acceleration')"
          v-model.number="acceleration"
        />
      </v-col>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.speed')"
          v-model.number="speed"
        />
      </v-col>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.topSpeed')"
          v-model.number="topSpeed"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.body')"
          v-model.number="body"
        />
      </v-col>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.armor')"
          v-model.number="armor"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.pilot')"
          v-model.number="pilot"
        />
      </v-col>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.sensor')"
          v-model.number="sensor"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <text-input
          type="number"
          :label="$t('vehicles.seats')"
          v-model.number="seats"
        />
      </v-col>
      <v-col>
        <text-input
          :label="$t('notes')"
          v-model="notes"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { addPropertiesIndexed } from '@/store/util';
import { Prop } from 'vue-property-decorator';
import TextInput from '@/components/TextInput.vue';

@Component({
  components: { TextInput },
})
export default class VehicleBox extends Vue {
  static defaultHeight = 7;

  static repeatableStore = 'vehicles';

  static optional = true;

  @Prop(String) readonly itemId: string | undefined;

  created() {
    addPropertiesIndexed(this,
      this.itemId!!,
      'vehicles',
      ['model',
        'handlingStreet',
        'handlingOffroad',
        'armor',
        'body',
        'sensor',
        'pilot',
        'acceleration',
        'seats',
        'speed',
        'topSpeed',
        'notes']);
  }
}
</script>
