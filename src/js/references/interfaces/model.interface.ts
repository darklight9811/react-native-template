// Interfaces
import typeInterface from './type.interface';

export default interface modelInterface<T = Object> {
  getAttributes: () => {[key: string]: typeInterface | string};
  getTableName: () => string;

  getFields: () => T;
  toJson: () => string;
};
