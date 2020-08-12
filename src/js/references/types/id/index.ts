// Packages
import {v4 as uuid} from 'uuid';

// Types
import typeInterface from '../../interfaces/type.interface';

// generate default uuid
const generate = (value: any) => (value ? value : uuid());

export default {
  // -------------------------------------------------
  // Values
  // -------------------------------------------------
  name: 'id',
  required: true,
  type: 'string',
  primary: true,
  length: 11,

  // -------------------------------------------------
  // Methods
  // -------------------------------------------------

  onSave: generate,
  onRetrieve: generate,
} as typeInterface;
