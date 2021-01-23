const {
  getFixedValues,
  getIncrementer,
} = require('./2-avoid-mutations-and-side-effects');

test('should not change fixedValues', () => {
  const fValue = getFixedValues();
  const incrementer = getIncrementer();

  expect(fValue).toBe(4);
  expect(incrementer).toBe(5);
});
