// Types
import typeInterface from '../../interfaces/type.interface';

export default {
  // -------------------------------------------------
  // Values
  // -------------------------------------------------
  name: 'cpf',
  required: true,
  type: 'string',
  length: 11,

  // -------------------------------------------------
  // Methods
  // -------------------------------------------------
  onSave: (value: any) => value.replace(/(-|\.)/, ''),
} as typeInterface;
