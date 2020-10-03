<template>
  <v-container>
    <v-row v-if="editMode">
      <v-col cols="12">
        <v-select
          :items="characterTypes"
          v-model="characterType"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <text-input
          :label="$t('personalData.name')"
          v-model="name"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <text-input
          :label="$t('personalData.metaType')"
          v-model="metaType"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <text-input
          :label="$t('personalData.ethnicity')"
          v-model="ethnicity"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input
          :label="$t('personalData.age')"
          type="number"
          v-model.number="age"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input
          :label="$t('personalData.gender')"
          v-model="gender"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input
          :label="$t('personalData.height')"
          v-model="height"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <text-input
          :label="$t('personalData.weight')"
          v-model="weight"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('personalData.reputation')"
          type="number"
          v-model.number="reputation"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('personalData.searchWarrantLevel')"
          type="number"
          v-model.number="searchWarrantLevel"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('personalData.spentKarma')"
          type="number"
          v-model.number="spentKarma"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="3"
      >
        <text-input
          :label="$t('personalData.totalKarma')"
          type="number"
          v-model.number="totalKarma"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/TextInput.vue';
import { mapModelLike } from '@/store/util';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { translatedEnumOptions } from '@/i18n';
import { CharacterType } from '@/model';

@Component({
  components: { TextInput },
  computed: {
    ...mapModelLike(
      'personalData', [
        'name',
        'ethnicity',
        'metaType',
        'age',
        'gender',
        'height',
        'weight',
        'reputation',
        'searchWarrantLevel',
        'spentKarma',
        'totalKarma',
        'characterType',
      ],
    ),
  },
})
export default class PersonalDataBox extends Vue {
  static defaultHeight = 6;

  @Prop(Boolean) readonly editMode: boolean | undefined;

  characterTypes = translatedEnumOptions(CharacterType, 'personalData.characterTypes');
}
</script>
