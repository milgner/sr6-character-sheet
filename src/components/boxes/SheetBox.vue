<template>
  <v-card
    class="sheet-box"
    :height="height"
  >
    <v-btn
      v-show="showRemoveButton"
      fab
      x-small
      class="remove-sheet-box"
      @click.stop="onRemoveClicked"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-card-title>{{ $t(`boxes.${type}`) }}</v-card-title>
    <v-container>
      <component
        :is="componentType"
        v-bind="{ editMode: editMode }"
      />
    </v-container>
  </v-card>
</template>
<style lang="scss">
  .sheet-box {
    overflow: auto;

    .v-btn.remove-sheet-box {
      position: fixed;
      right: -1em;
      top: -1em;
      z-index: 1000;
    }

    .v-card__title {
      padding-bottom: 0;
    }

    .container {
      padding-top: 0;

      .row {
        padding-left: 12px;
        padding-right: 12px;
      }

      .col, .col-auto, .col-xl,
      .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6,
      .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto,
      .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6,
      .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1,
      .col-md,
      .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6,
      .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1,
      .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7,
      .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1,
      .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6,
      .col-5, .col-4, .col-3, .col-2, .col-1 {
        padding: 4px 6px;
      }
    }
  .v-input__control {
    label {
      font-size: 70%
    }

  input[type="text"] {
      font-size: 90%
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const boxes = require('@/components/boxes').default;

const SheetBoxProps = Vue.extend({
  props: {
    height: [String, Number],
    editMode: Boolean,
    type: {
      type: String,
      validator(value: string) {
        return Object.keys(boxes).includes(value);
      },
    },
  },
});

@Component
export default class SheetBox extends SheetBoxProps {
  get componentType() {
    return (boxes as any)[this.$props.type];
  }

  get showRemoveButton() {
    return this.$props.editMode && this.componentType.optional;
  }

  onRemoveClicked() {
    this.$emit('remove');
  }
}

</script>
