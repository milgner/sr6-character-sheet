<template>
  <div>
    <v-data-table
      class="bodytech-list"
      dense
      :headers="headers"
      :items="items"
      item-key="name"
      disable-pagination
      hide-default-footer
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      @abort="closeDialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          x-small
          v-on="on"
          v-bind="attrs"
          class="add-item"
          @click.stop="openAddItemDialog"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-form
        @submit.prevent="addItemAndCloseDialog"
      >
        <v-card>
          <v-card-title>{{ $t('bodytech.addDialog.title') }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  dense
                  :label="$t('bodytech.name')"
                  v-model="newItem.name"
                />
              </v-col>
              <v-col cols="2">
                <v-text-field
                  dense
                  type="number"
                  :label="$t('bodytech.rating')"
                  v-model="newItem.rating"
                />
              </v-col>
              <v-col cols="2">
                <v-text-field
                  dense
                  :label="$t('attributes.ess')"
                  v-model="newItem.essence"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  dense
                  :label="$t('bodytech.text')"
                  v-model="newItem.notes"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              text
              @click="closeDialog"
            >
              {{ $t('dialogs.close') }}
            </v-btn>
            <v-btn
              type="submit"
              text
            >
              {{ editingItem !== null ? $t('dialogs.update') : $t('dialogs.add') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>
<style>
  .v-btn.add-item {
    position: fixed;
    right: -1em;
    top: -1em;
    z-index: 1000;
  }

  .v-dialog {
    max-width: 600px;
  }
</style>
<script lang="ts">
import Vue from 'vue';
import { mapModelLike } from '@/store/util';
import Component from 'vue-class-component';

const BodytechBoxProps = Vue.extend({
  computed: {
    ...mapModelLike('bodytech', ['items']),
  },
});

@Component
export default class BodytechBox extends BodytechBoxProps {
  dialog = false;

  editingItem = null;

  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      newItem: { ...this.$store.getters['bodytech/newItem'] },
    };
  }

  closeDialog() {
    this.dialog = false;
    this.editingItem = null;
  }

  openAddItemDialog() {
    this.editingItem = null;
    this.$data.newItem = { ...this.$store.getters['bodytech/newItem'] };
    this.dialog = true;
  }

  addItemAndCloseDialog() {
    if (this.editingItem !== null) {
      this.$store.commit('bodytech/updateItem',
        { id: this.editingItem, data: this.$data.newItem });
    } else {
      this.$store.commit('bodytech/addItem', this.$data.newItem);
    }
    this.closeDialog();
  }

  editItem(item: any) {
    this.editingItem = item.id;
    this.$data.newItem = { ...item };
    this.dialog = true;
  }

  deleteItem(item: any) {
    this.$store.commit('bodytech/removeItem', item.id);
  }

  get headers() {
    return [{
      text: this.$t('bodytech.name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('bodytech.rating'),
      align: 'start',
      sortable: false,
      value: 'rating',
    }, {
      text: this.$t('bodytech.text'),
      align: 'start',
      sortable: false,
      value: 'notes',
    }, {
      text: this.$t('attributes.ess'),
      align: 'end',
      sortable: true,
      value: 'essence',
    },
    { text: '', value: 'actions', sortable: false },
    ];
  }
}

</script>
