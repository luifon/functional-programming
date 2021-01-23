const {
  getWorkersOnly,
  getAllWorkers,
} = require('./2-list-idempotency-example');

const _unf = ['Borduchi', 'Jorge', 'Guilherme', 'LF', 'Pietro', 'Zambrim'];

const _fun = ['Borduchi', 'Guilherme', 'LF', 'Pietro', 'Zambrim'];

test('lists should be', () => {
  const allWorkers = getAllWorkers();
  expect(allWorkers).toEqual(_unf);
  const workersOnly = getWorkersOnly();
  expect(workersOnly).toEqual(_fun);
});
