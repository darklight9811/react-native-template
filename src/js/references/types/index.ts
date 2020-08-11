// Interfaces
import typeInterface from '../interfaces/type.interface';

// types
import id from './id';
import cpf from './cpf';

// list
export const list = {
  id,
  cpf,
} as {[key: string]: typeInterface};

// method to generate field
export default (name: string, overwrite: Object = {}): typeInterface => {
  return {...list[name], ...overwrite};
};
