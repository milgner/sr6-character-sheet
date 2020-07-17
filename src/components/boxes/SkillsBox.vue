<template>
  <v-tabs grow>
    <v-tabs-slider />
    <v-tab>Aktionsfertigkeiten</v-tab>
    <v-tab>Wissensfertigkeiten</v-tab>
    <v-tab-item>
      <data-table-with-dialog
        :headers="activeHeaders"
        :items="actionSkills"
        :show-add-button="!editMode"
        item-key="id"
        scope="skills"
      >
        <template v-slot="{ item }">
          <v-row>
            <v-col cols="9">
              <v-select
                :items="availableSkillsDecorated(item)"
                v-model="item.name"
                dense
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                dense
                type="number"
                v-model.number="item.rating"
              />
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.name="{ item }">
          {{ translateActionSkill(item.name) }}
        </template>
        <template v-slot:item.attribute="{ item }">
          {{ attributeForActionSkill(item.name) }}
        </template>
        <template v-slot:item.dicePool="{ item }">
          {{ dicePoolForActionSkill(item) }}
        </template>
      </data-table-with-dialog>
    </v-tab-item>
    <v-tab-item>
      <data-table-with-dialog
        :headers="knowledgeHeaders"
        :items="knowledgeSkills"
        :show-add-button="!editMode"
        item-key="id"
        scope="skills"
      >
        <template v-slot:item.rating="{ item }">
          {{ translateKnowledgeSkillRating(item) }}
        </template>
        <template v-slot="{ item }">
          <v-row>
            <v-col cols="12">
              <v-select
                :items="nonActionSkillTypes"
                v-model="item.type"
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-text-field
                dense
                v-model="item.name"
              />
            </v-col>
            <v-col
              cols="4"
            >
              <v-select
                dense
                v-model="item.rating"
                :disabled="isKnowledgeSkill(item.type)"
                :items="languageSkillRatings"
              />
            </v-col>
          </v-row>
        </template>
      </data-table-with-dialog>
    </v-tab-item>
  </v-tabs>
</template>
<style lang="scss">
  .skill-list {
    tbody {
      font-size: 50%;
    }
  }
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { mapModelLike } from '@/store/util';
import DataTableWithDialog from '@/components/DataTableWithDialog.vue';
import { translatedEnumOptions } from '@/i18n';
import {
  ActionSkill, CharacterSkill, LanguageSkillRating, SkillType, ActionSkillDescriptions, Attribute,
} from '@/model';
import { Prop } from 'vue-property-decorator';

@Component({
  components: { DataTableWithDialog },
  computed: {
    ...mapGetters('skills', ['availableActionSkills', 'knowledgeSkills', 'actionSkills']),
    ...mapModelLike('skills', ['items']),
  },
})
export default class SkillsBox extends Vue {
  static defaultHeight = 10;

  @Prop(Boolean) readonly editMode: boolean | undefined;

  get activeHeaders() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: false,
      value: 'name',
    }, {
      text: this.$t('rating'),
      align: 'end',
      sortable: false,
      value: 'rating',
    }, {
      text: this.$t('attribute'),
      align: 'start',
      sortable: false,
      value: 'attribute',
    }, {
      text: this.$t('dicePool'),
      align: 'end',
      sortable: false,
      value: 'dicePool',
    }];
  }

  get knowledgeHeaders() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sortable: true,
      value: 'name',
    }, {
      text: this.$t('skills.level'),
      align: 'start',
      sortable: true,
      value: 'rating',
    }];
  }

  get nonActionSkillTypes() {
    return [
      {
        text: this.$t('skills.types.knowledge'),
        value: SkillType.knowledge,
      }, {
        text: this.$t('skills.types.language'),
        value: SkillType.language,
      },
    ];
  }

  languageSkillRatings = translatedEnumOptions(LanguageSkillRating, 'skills.languageRating');

  skillType = SkillType;

  attributeForActionSkill(skill: ActionSkill) {
    const attribute = ActionSkillDescriptions[skill].mainAttribute;
    return this.$t(`attributes.${attribute}`);
  }

  dicePoolForActionSkill(skill: CharacterSkill) {
    const attribute = ActionSkillDescriptions[skill.name as ActionSkill].mainAttribute;
    const attributeValue = this.$store.state.attributes[attribute];
    return skill.rating + attributeValue;
  }

  translateKnowledgeSkillRating(skill: CharacterSkill) {
    if (skill.type !== this.skillType.language) {
      return '';
    }
    return this.$t(`skills.languageRating.${skill.rating}`);
  }

  translateActionSkill(skill: ActionSkill) {
    return this.$t(`skills.skills.${skill}`);
  }

  isKnowledgeSkill(skill: SkillType) {
    return skill === this.skillType.knowledge;
  }

  availableSkillsDecorated(skill: CharacterSkill) {
    const currentSkill = skill.id === null ? [] : [
      {
        text: this.translateActionSkill(skill.name as ActionSkill),
        value: skill.name,
      },
    ];
    return currentSkill.concat(this.$store.getters['skills/availableActionSkills'].map((actionSkill: ActionSkill) => ({
      text: this.translateActionSkill(actionSkill),
      value: actionSkill,
    })));
  }
}
</script>
