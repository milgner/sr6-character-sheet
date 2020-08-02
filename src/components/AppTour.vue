<template>
  <v-tour
    name="appTour"
    :steps="steps"
    :callbacks="callbacks"
    :options="tourOptions"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class AppTour extends Vue {
  @Prop(Function) readonly toggleEditMode: Function | undefined;

  saveTourDone() {
    this.$store.commit('tourDone');
  }

  data() {
    return {
      tourOptions: {
        labels: {
          buttonSkip: this.$i18n.t('tour.skip'),
          buttonPrevious: this.$i18n.t('tour.previous'),
          buttonNext: this.$i18n.t('tour.next'),
          buttonStop: this.$i18n.t('tour.stop'),
        },
      },
      steps: [
        {
          target: 'body',
          header: {
            title: this.$i18n.t('tour.step1.title'),
          },
          content: this.$i18n.t('tour.step1.content'),
        },
        {
          target: '#main-menu',
          params: {
            placement: 'left',
          },
          header: {
            title: this.$i18n.t('tour.step2.title'),
          },
          content: this.$i18n.t('tour.step2.content'),
        },
        {
          target: '#add-box-placeholder',
          before: () => this.toggleEditMode!!(true),
          header: {
            title: this.$i18n.t('tour.step3.title'),
          },
          content: this.$i18n.t('tour.step3.content'),
        },
        {
          before: () => this.toggleEditMode!!(false),
          target: 'body',
          header: {
            title: this.$i18n.t('tour.step4.title'),
          },
          content: this.$i18n.t('legal.licenseInfo'),
        },
      ],
      callbacks: {
        onSkip: this.saveTourDone,
        onFinish: this.saveTourDone,
      },
    };
  }

  mounted() {
    if (this.$store.state.tourDone) {
      return;
    }
    this.$tours.appTour.start();
  }
}
</script>

<style scoped>

</style>
