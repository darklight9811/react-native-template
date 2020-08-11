// Components
import ModelBase from './index';
import buildAttributes from '../../utilities/buildAttributes';
import buildProxy from '../../utilities/buildProxy';

// -------------------------------------------------
// First test
// -------------------------------------------------

test('abstraction works', () => {
  // No crashes
  expect(!!ModelBase).toBeTruthy();
});

// -------------------------------------------------
// Second test
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
// Third test
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
// Fourth test
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