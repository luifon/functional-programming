const allWorkers = [
  'Borduchi',
  'Jorge',
  'Guilherme',
  'LF',
  'Pietro',
  'Zambrim',
];

const filterAssociates = (associateName, list) => {
  return list.filter((a) => a.localeCompare(associateName));
};

const workersOnly = filterAssociates('Jorge', allWorkers);

console.log('Workers only:', workersOnly);
console.log('All workers:', allWorkers);
