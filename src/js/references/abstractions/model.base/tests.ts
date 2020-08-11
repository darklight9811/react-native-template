// Components
import ModelBase from './index';
import buildAttributes from '../../utilities/buildAttributes';
import buildProxy from '../../utilities/buildProxy';
import buildModel from '../../utilities/buildModel';

describe("Base model tests", () => {
  // -------------------------------------------------
  // 1 test
  // -------------------------------------------------
  
  test('abstraction works', () => {
    // No crashes
    expect(!!ModelBase).toBeTruthy();
  });
  
  // -------------------------------------------------
  // 2 test
  // -------------------------------------------------
  
  test('inheritance works', () => {
    class Model extends ModelBase {
      protected tableName = 'user';
      protected attributes = {};
    }
  
    // No crashes
    expect(!!Model).toBeTruthy();
  
    // No crash when instancing
    const user = new Model();
    expect(!!user).toBeTruthy();
  
    // Table name retrievable
    expect(user.getTableName()).toEqual('user');
  
    // Attributes retrievable
    expect(user.getAttributes()).toEqual({});
  });
  
  // -------------------------------------------------
  // 3 test
  // -------------------------------------------------
  
  test('attribute casting works', () => {
    class Model extends ModelBase {
      protected tableName = 'user';
      protected attributes = {};
    }
    const user = new Model;
  
    // Filter models based on attributes
    const newattributes = buildAttributes(user.getAttributes());
  
    // No crashes
    expect(!!newattributes).toBeTruthy();
  
    // Initialized
    expect(newattributes).toEqual({});
  });
  
  // -------------------------------------------------
  // 4 test
  // -------------------------------------------------
  
  test('proxy casting works', () => {
    class Model extends ModelBase {
      protected tableName = 'user';
      protected attributes = {};
    }
  
    // Filter models based on attributes
    const proxied = buildProxy(Model);
  
    // No crashes
    expect(!!proxied).toBeTruthy();
  });
  
  // -------------------------------------------------
  // 5 test
  // -------------------------------------------------
  
  test('proxy and attribute casting', () => {
    class Model extends ModelBase {
      protected tableName = 'user';
      protected attributes = {};
    }
  
    // Build attributes and proxy model
    const built = buildModel({model:Model});
  
    // No crashes
    expect(!!built).toBeTruthy();
  
    // Can instance
    const user = new Model;
    expect(!!user).toBeTruthy();
  });
  
  // -------------------------------------------------
  // 6 test
  // -------------------------------------------------
  
  test('injection test', () => {
    class Model extends ModelBase {
      protected tableName = 'user';
      protected attributes = {};
    }
  
    // Create injection
    Model.inject({test: function () { return 'true'; }});
  
    // Proxy model
    const proxied = buildProxy(Model);
  
    // No crashes
    expect(!!proxied).toBeTruthy();
  
    // Inject worked
    const instance = new proxied;
    expect(instance.test()).toEqual('true');
  });
});