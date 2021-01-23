const { getFixedValues, getIncrementer } = require('./3-declare-dependencies');

test('should not change fixedValues', () => {
  const fValue = getFixedValues();
  const incrementer = getIncrementer();

  expect(fValue).toBe(4);
  expect(incrementer).toBe(5);
});
