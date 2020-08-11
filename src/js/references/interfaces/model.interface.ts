// Interfaces
import typeInterface from './type.interface';

export default interface modelInterface {
  name: string;
  attributes: {
    [key: string]: typeInterface;
  };
};
