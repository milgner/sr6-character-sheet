<template>
  <v-text-field
    v-if="!unavailable"
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
<!--  <v-skeleton-loader-->
<!--    v-else-->
<!--    boilerplate-->
<!--    type="list-item"-->
<!--  />-->
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
    unavailable: Boolean,
  },
});

@Component
export default class TextInput extends TextInputProps {

}
</script>
