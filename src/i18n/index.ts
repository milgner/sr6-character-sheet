import Vue from 'vue';
import VueI18n from 'vue-i18n';

import de from './de';
import en from './en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de', // mostly for imprint
  messages: {
    de, en,
  },
});
export default i18n;

export function reversedEnum(enumClass: Record<string, string>) {
  return Object.entries(enumClass).reduce((a: any, [k, v]) => {
    // eslint-disable-next-line no-param-reassign
    a[v] = k;
    return a;
  }, {});
}

export function translatedEnumOptions(enumClass: Record<string, unknown>, scope: string) {
  return Object.entries(enumClass).map(([k, v]) => ({
    value: v,
    text: i18n.t(`${scope}.${k}`),
  }));
}
