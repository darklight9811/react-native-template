// Utilities
import buildProxy from './buildProxy';
import buildAttributes from './buildAttributes';

export default function buildModel(list: any) {
  const response: any = {};

  for (const key in list) {
    response[key] = list[key];

    // We need to instance model because some things only appear in instance mode
    const model = new response[key];

    // Build its attributes
    response[key].attributes = buildAttributes(model.getAttributes());

    // Build model with injection proxy
    response[key] = buildProxy(response[key]);
  }

  return response;
}
