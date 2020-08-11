// Utilities
import buildProxy from './buildProxy';
import buildAttributes from './buildAttributes';

export default function buildModel(list: any) {
  const response: any = {};

  for (const key in list) {
    response[key] = list[key];

    // Build its attributes
    response[key].attributes = buildAttributes(response[key].getAttributes());

    // Build model with injection proxy
    response[key] = buildProxy(response[key]);
  }

  return response;
}
