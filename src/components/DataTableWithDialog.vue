<template>
  <div>
    <v-data-table
      :headers="allHeaders"
      :item-key="name"
      :items="items"
      class="action-table"
      dense
      disable-pagination
      hide-default-footer
    >
      <template #item.actions="{ item }">
        <v-icon
          dense
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          dense
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
      <template #activator="{ on, attrs }">
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
          <v-card-title>{{ dialogTitle }}</v-card-title>
          <v-card-text>
            <slot :item="itemData" />
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
<style lang="scss">
  .v-btn.add-item {
    position: fixed;
    right: -1em;
    top: -1em;
    z-index: 1000;
  }

  .v-dialog {
    max-width: 600px;
  }

  .action-table tbody td:last-of-type {
    width: 72px;
  }
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class DataTableWithDialog extends Vue {
  @Prop(Array) readonly items: any[] | undefined;

  @Prop(Array) readonly headers: any[] | undefined;

  @Prop(String) readonly itemKey: string | undefined;

  @Prop(String) readonly scope: string | undefined;

  // eslint-disable-next-line class-methods-use-this
  data() {
    return {
      dialog: false,
      itemData: {},
      editingItem: null,
    };
  }

  get allHeaders() {
    return [...this.$props.headers, { text: '', value: 'actions', sortable: false }];
  }

  get dialogTitle() {
    if (this.$data.editingItem !== null) {
      return this.$t(`${this.scope}.updateDialog.title`);
    }
    return this.$t(`${this.scope}.addDialog.title`);
  }

  closeDialog() {
    this.$data.dialog = false;
    this.$data.editingItem = null;
  }

  openAddItemDialog() {
    const data = this.$data;
    data.editingItem = null;
    Object.entries(this.$store.getters[`${this.scope}/newItem`]).forEach(([k, v]) => {
      data.itemData[k] = v;
    });
    data.dialog = true;
  }

  addItemAndCloseDialog() {
    if (this.$data.editingItem !== null) {
      this.$store.commit(`${this.scope}/updateItem`,
        { id: this.$data.editingItem, data: this.$data.itemData });
    } else {
      this.$store.commit(`${this.scope}/addItem`, this.$data.itemData);
    }
    this.closeDialog();
  }

  editItem(item: any) {
    this.$data.editingItem = item.id;
    Object.assign(this.$data.itemData, item);
    this.$data.dialog = true;
  }

  deleteItem(item: any) {
    this.$store.commit(`${this.scope}/removeItem`, item.id);
  }
}
</script>

<style scoped>

</style>
