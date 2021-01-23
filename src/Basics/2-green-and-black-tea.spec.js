const { getGreen, getBlack } = require('./2-green-and-black-tea');

const _27_green_tea = [
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
];

const _14_black_tea = [
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
  'blackTea',
];
test('should output amount of black and green tea', () => {
  const blackTea = getBlack();
  const greenTea = getGreen();
  expect(greenTea).toEqual(_27_green_tea);
  expect(blackTea).toEqual(_14_black_tea);
});
