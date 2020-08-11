// Interfaces
import UserInterface from './interface';

// Classes
import BaseModel from '../../references/abstractions/model.base';

export default class Model extends BaseModel<UserInterface> {
  protected readonly tableName = 'user';
  protected readonly attributes = {
    id: 'id',
    name: 'string',
    email: 'string',
  };
}
