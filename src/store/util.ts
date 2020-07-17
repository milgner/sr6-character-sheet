export function updateAttribute(propName: string) {
  return (state: any, newVal: any) => {
    state[propName] = newVal;
  };
}

export function updateIndexedAttribute(propName: string) {
  return (state: any, [itemId, newVal]: [string, any]) => {
    state.items[itemId][propName] = newVal;
  };
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function propertyUpdater(key: string) {
  return `update${capitalize(key)}`;
}

export function simpleUpdaters(shape: any) {
  return Object.entries(shape).reduce((acc: any, [key]) => {
    acc[propertyUpdater(key)] = updateAttribute(key);
    return acc;
  }, {});
}

export function indexedUpdaters(properties: string[]) {
  return properties.reduce((acc: any, key) => {
    acc[propertyUpdater(key)] = updateIndexedAttribute(key);
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

export function modelLikeIndexed(itemId: string, namespace: string, property: string) {
  return {
    get(): any {
      return (this as any).$store.state[namespace].items[itemId][property];
    },
    set(value: any) {
      (this as any).$store.commit(`${namespace}/${propertyUpdater(property)}`,
        [itemId, value]);
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

export function addPropertiesIndexed(target: object, itemId: string,
  namespace: string, properties: string[]) {
  properties.forEach((e: string) => {
    Object.defineProperty(target, e, modelLikeIndexed(itemId, namespace, e));
  });
}
