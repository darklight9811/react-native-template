export default function bindProxy(model: any) {
  const handler = {
    get: (instance: any, name: string | symbol) => {
      // ignore symbols
      if (typeof name === 'symbol') {
        return;
      }

      // check for properties
      if ((instance as any)[name]) {
        return (instance as any)[name];
      }

      // check injectables
      const injections = model.injectables.filter((item: any) => !!item[name]);

      // we only allow functions to be called, not retrieve data
      if (injections.length && Object.prototype.toString.call((injections[0] as any)[name]) === '[object Function]') {
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
