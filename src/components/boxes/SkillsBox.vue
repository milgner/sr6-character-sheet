<template>
  <v-tabs grow>
    <v-tabs-slider />
    <v-tab v-t="'skills.actionSkills'" />
    <v-tab v-t="'skills.knowledgeSkills'" />
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
          <v-row>
            <v-col>
              <v-simple-table
                dense
                v-if="item.name"
              >
                <template slot="default">
                  <thead>
                    <tr>
                      <th />
                      <th>{{ $t('skills.skillRating.specialized') }}</th>
                      <th>{{ $t('skills.skillRating.expert') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="specialization in skillSpecializations(item)"
                      :key="specialization.name"
                    >
                      <td>{{ specialization.label }}</td>
                      <td>
                        <v-switch
                          dense
                          multiple="false"
                          v-model="item.specialization"
                          :value="specialization.name"
                        />
                      </td>
                      <td>
                        <v-switch
                          dense
                          multiple="false"
                          v-model="item.expertise"
                          :value="specialization.name"
                        />
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.name="{ item }">
          {{ actionSkillLabel(item) }}
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
  },
})
export default class SkillsBox extends Vue {
  static defaultHeight = 10;

  @Prop(Boolean) readonly editMode: boolean | undefined;

  get activeHeaders() {
    return [{
      text: this.$t('name'),
      align: 'start',
      sort: (a: ActionSkill, b: ActionSkill) => {
        const nameA = this.translateActionSkill(a);
        const nameB = this.translateActionSkill(b);
        return nameA.localeCompare(nameB);
      },
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

  skillSpecializations(skill: CharacterSkill): { name: string; label: string }[] {
    if (skill.name === undefined || skill.name.length === 0) { return []; }
    const { specializations } = ActionSkillDescriptions[skill.name as ActionSkill];
    return specializations.map((s: string) => ({
      name: s,
      label: this.specializationLabel(skill.name as ActionSkill, s),
    }));
  }

  specializationLabel(skill: ActionSkill, specialization: string): string {
    return this.$i18n.t(`skills.specializations.${skill}.${specialization}`).toString();
  }

  actionSkillLabel(skill: CharacterSkill): string {
    const skillName = this.translateActionSkill(skill.name as ActionSkill);
    const i18nSpecName = (s: string) => this.specializationLabel(skill.name as ActionSkill, s);
    const specializationLabels = [];
    if (skill.specialization) {
      const mnemonic = this.$i18n.t('skills.skillRatingMnemonics.specialized');
      specializationLabels.push(`${mnemonic}: ${i18nSpecName(skill.specialization)}`);
    }
    if (skill.expertise) {
      const mnemonic = this.$i18n.t('skills.skillRatingMnemonics.expert');
      specializationLabels.push(`${mnemonic}: ${i18nSpecName(skill.expertise)}`);
    }
    if (specializationLabels.length > 0) {
      return `${skillName} (${specializationLabels.join(', ')})`;
    }
    return skillName;
  }

  languageSkillRatings = translatedEnumOptions(LanguageSkillRating, 'skills.skillRating');

  skillType = SkillType;

  attributeForActionSkill(skill: ActionSkill): string {
    const attribute = ActionSkillDescriptions[skill].mainAttribute;
    return this.translateAttribute(attribute).toString();
  }

  translateAttribute(attribute: Attribute): string {
    return this.$t(`attributes.${attribute}`).toString();
  }

  dicePoolForActionSkill(skill: CharacterSkill): string {
    const skillProps = ActionSkillDescriptions[skill.name as ActionSkill];
    const attributeValue = this.$store.state.attributes[skillProps.mainAttribute];
    if (skill.rating < 1) {
      return (skillProps.untrained ? attributeValue - 1 : 0).toString();
    }
    const baseValue = skill.rating + attributeValue;
    const bonuses = [];
    if (skill.specialization) {
      bonuses.push('+2');
    }
    if (skill.expertise) {
      bonuses.push('+3');
    }
    if (bonuses.length > 0) {
      return `${baseValue} (${bonuses.join('/')})`;
    }
    return baseValue.toString();
  }

  translateKnowledgeSkillRating(skill: CharacterSkill): string {
    if (skill.type !== this.skillType.language) {
      return '';
    }
    return this.$t(`skills.skillRating.${skill.rating}`).toString();
  }

  translateActionSkill(skill: ActionSkill): string {
    return this.$t(`skills.skills.${skill}`).toString();
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
