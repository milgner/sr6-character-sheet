<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        small
        v-bind="attrs"
        v-on="on"
        :color="color"
        @click="$emit('click')"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>
<script lang="ts">
import {
  Component, Emit, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class MenuFab extends Vue {
  @Prop(String) readonly color: string | undefined;

  @Prop(String) readonly icon: string | undefined;

  @Prop(String) readonly tooltip: string | undefined;
}
</script>
