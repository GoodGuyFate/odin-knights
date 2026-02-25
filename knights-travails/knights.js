export function knightMoves(start, end) {
  let queue = [{ position: start, path: [start] }];
  let visited = new Set();
  visited.add(start.join(","));

  while (queue.length > 0) {
    const { position, path } = queue.shift();

    if (position[0] === end[0] && position[1] === end[1]) {
      return path;
    }

    const nextMoves = getLegalMoves(position);

    nextMoves.forEach((move) => {
      const moveStr = move.join(",");
      if (!visited.has(moveStr)) {
        visited.add(moveStr);
        queue.push({
          position: move,
          path: [...path, move],
        });
      }
    });
  }
}

const isWithinBoard = (x, y) => {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
};

const getLegalMoves = ([x, y]) => {
  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  return offsets
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([nx, ny]) => isWithinBoard(nx, ny));
};

const path = knightMoves([3,3], [3,4]);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`)
path.forEach(pos => console.log(pos));
