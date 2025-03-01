function seed(a, b, c) {
  let x=[a, b, c];
  return x[a, b, c];
}

function same([x, y], [j, k]) {

  if ([x, y] === [j, k]) return true;
  if ([x, y] == null || [j, k] == null) return false;
  if ([x, y].length !== [j, k].length) return false;

  for (var i = 0; i < a.length; ++i) {
    if ([x, y][i] !== [j, k][i]) return false;
  }
  return true;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  
  if(this===cell){
    return this;
  }
  else {
    return false;
  }

}

const printCell = (cell, state) => {};

const corners = (state = []) => {};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;