// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// TODO
// The tea4GreenTeamFCC variable should hold 27 cups of green tea for the team.
// The tea4GreenTeamFCC variable should hold cups of green tea.
// The tea4BlackTeamFCC variable should hold 13 cups of black tea.
// The tea4BlackTeamFCC variable should hold cups of black tea.

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
