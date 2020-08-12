// Types
import _ from '../../types';

export default function buildAttributes(attributes: any) {
  const response: any = {};

  for (const key in attributes) {
    response[key] =
      typeof attributes[key] === 'string' ? _(attributes[key]) : attributes[key];
  }

  return response;
}
