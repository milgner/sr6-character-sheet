<template>
  <v-text-field
    :label="label"
    :rules="rules"
    :type="type"
    :prefix="prefix"
    :suffix="suffix"
    :value="value"
    :append-icon="appendIcon"
    :prepend-icon="prependIcon"
    dense
    hide-details
  />
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const TextInputProps = Vue.extend({
  props: {
    label: String,
    type: String,
    rules: Array,
    prefix: String,
    suffix: String,
    appendIcon: String,
    prependIcon: String,
    value: String,
  },
});

@Component
export default class TextInput extends TextInputProps {

}
</script>
