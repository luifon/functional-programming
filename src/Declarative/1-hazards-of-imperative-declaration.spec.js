const { getFinalTabs } = require('./1-hazards-of-imperative-declaration');

const fTabs = [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab',
];

test('should be a certain array at the end', () => {
  const tabs = getFinalTabs().tabs;

  expect(tabs).toEqual(fTabs);
});
