import ModelBase from "../../abstractions/model.base";
import Query from ".";
import buildModel from "../../utilities/build/Model";

describe('Test the query through a model', () => {
  // Start class
  class Model extends ModelBase {
    protected readonly tableName = 'user';
    protected readonly attributes = {
      id: 'id',
      name: 'string',
      email: 'string',
    };
  }

  // Inject query
  Model.inject(new Query());

  // Proxy it
  const Proxied = buildModel([Model])[0];

  // Instance class
  const user = new Proxied();

  // -------------------------------------------------
  // 1 test
  // -------------------------------------------------

  test('injection works', () => {  
    // No crashes
    expect(user).toBeDefined();
  });

  // -------------------------------------------------
  // 2 test
  // -------------------------------------------------

  test('where method is found', () => {
    const method = user.where("test", "=", "you");

    expect(method).toBeDefined();
  });
});