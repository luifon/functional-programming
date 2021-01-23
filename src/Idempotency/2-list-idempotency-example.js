const allWorkers = [
  'Borduchi',
  'Jorge',
  'Guilherme',
  'LF',
  'Pietro',
  'Zambrim',
];

const filterAssociates = (associateName, list) => {
  // TODO change below
  return list;
  // change above
};

const workersOnly = filterAssociates('Jorge', allWorkers);

exports.getWorkersOnly = () => workersOnly;
exports.getAllWorkers = () => allWorkers;
