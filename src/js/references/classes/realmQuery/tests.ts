import Query from ".";

describe('Test the realm db query', () => {
  const query = new Query;

  // -------------------------------------------------
  // 1 test
  // -------------------------------------------------

  test('simple where', () => {
    query.clear();
    query.where('name', 'rafael');

    expect(query.print()).toBe('name = \'rafael\'');
  });

  // -------------------------------------------------
  // 2 test
  // -------------------------------------------------

  test('simple where and', () => {
    query.clear();
    query.where('name', 'rafael').where('age', '>', '18');

    expect(query.print()).toBe('name = \'rafael\' AND age > \'18\'');
  });

  // -------------------------------------------------
  // 2 test
  // -------------------------------------------------

  test('composite where', () => {
    query.clear();
    query.where(['name', 'rafael']);

    expect(query.print()).toBe('name = \'rafael\'');
  });

  // -------------------------------------------------
  // 3 test
  // -------------------------------------------------

  test('composite where and', () => {
    query.clear();
    query.where([['name', 'rafael'], ['age', '>', '18']]);

    expect(query.print()).toBe('name = \'rafael\' AND age > \'18\'');
  });

  // -------------------------------------------------
  // 4 test
  // -------------------------------------------------

  test('simple where or', () => {
    query.clear();
    query.where('name', 'rafael').orWhere('age', '>', '18');

    expect(query.print()).toBe('name = \'rafael\' OR age > \'18\'');
  });

  // -------------------------------------------------
  // 5 test
  // -------------------------------------------------

  test('composite where or', () => {
    query.clear();
    query.where(['name', 'rafael']).orWhere(['age', '>', '18']);

    expect(query.print()).toBe('name = \'rafael\' OR age > \'18\'');
  });

  // -------------------------------------------------
  // 6 test
  // -------------------------------------------------

  test('simple where and or', () => {
    query.clear();
    query.where('name', 'rafael').where('sex', 'male').orWhere('age', '>', '18');

    expect(query.print()).toBe('name = \'rafael\' AND sex = \'male\' OR age > \'18\'');
  });

  // -------------------------------------------------
  // 7 test
  // -------------------------------------------------

  test('composite where and or', () => {
    query.clear();
    query.where([['name', 'rafael'], ['sex', 'male']]).orWhere(['age', '>', '18']);

    expect(query.print()).toBe('name = \'rafael\' AND sex = \'male\' OR age > \'18\'');
  });

  // -------------------------------------------------
  // 8 test
  // -------------------------------------------------

  test('test number values', () => {
    query.clear();
    query.where('age', 18);

    expect(query.print()).toBe('age = 18');
  });
});