export default function bindProxy(model: any) {
  const handler = {
    get: (instance: any, name: string | symbol) => {
      // ignore symbols
      if (typeof name === 'symbol') {
        return;
      }

      // check for attributes
      if ((instance as any)[name]) {
        return (instance as any)[name];
      }

      // check for properties
      if ((instance as any)[name]) {
        return (instance as any)[name];
      }

      // check injectables
      const injections = model.injectables.filter((item: any) => !!item[name]);

      if (injections.length) {
        return (injections[0] as any)[name];
      }

      // check attributes
      if (instance.attributes[name]) {
        return (instance.attributesValue as any)[name];
      }
    },
    set: (instance: any, name: string | symbol, value: any) => {
      // ignore symbols
      if (typeof name === 'symbol') {
        return true;
      }

      // check for self
      if ((instance as any)[name]) {
        (instance as any)[name] = value;
        return true;
      }

      // set attribute
      if (instance.attributes[name]) {
        (instance.attributesValue as any)[name] = value;
        return true;
      }

      return true;
    },
  };

  return new Proxy(model, {
    construct: (target) => new Proxy(new target(), handler),
  });
}
