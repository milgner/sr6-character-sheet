export function updateAttribute(propName: string) {
  return (state: any, newVal: any) => {
    state[propName] = newVal;
  };
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function propertyUpdater(key: string) {
  return `update${capitalize(key)}`;
}

export function simpleUpdaters(shape: any) {
  return Object.entries(shape).reduce((acc: any, [key, value]) => {
    acc[propertyUpdater(key)] = updateAttribute(key);
    return acc;
  }, {});
}

export function modelLike(namespace: string, property: string) {
  return {
    get(): any {
      return (this as any).$store.state[namespace][property];
    },
    set(value: any) {
      (this as any).$store.commit(`${namespace}/${propertyUpdater(property)}`, value);
    },
  };
}

export function mapModelLike(namespace: string, properties: string[]) {
  return properties.reduce((a: any, e) => {
    /* eslint-disable no-param-reassign */
    a[e] = modelLike(namespace, e);
    return a;
  }, {});
}
