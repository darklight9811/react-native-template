// Utilities
import buildModel from '../references/utilities/buildModel';

// Models
import user from './user';

// This should be the single point of true of models
// available in the app
let list: any = {
  user: user,
  user2: user,
  user3: user,
  user4: user,
  user5: user,
  user6: user,
};

list = buildModel(list);

// Method to get the model
export default (key: string) => new list[key]();
