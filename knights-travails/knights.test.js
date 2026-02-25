import { knightMoves } from "./knights";
import { isWithinBoard } from "./knights"

describe("knightMoves", () => {
  test("should return the start square if start and end are the same", () => {
    expect(knightMoves([0, 0], [0, 0])).toEqual([[0, 0]]);
  });

  test("should find a path for a single move", () => {
    const path = knightMoves([0, 0], [1, 2]);
    expect(path).toEqual([
      [0, 0],
      [1, 2],
    ]);
  });

  test("should find the shortest path from [0, 0] to [3, 3]", () => {
    const path = knightMoves([0, 0], [3, 3]);
    // path could be [[0,0], [1,2], [3,3]] or [[0,0], [2,1], [3,3]]
    expect(path.length).toBe(3);
    expect(path[0]).toEqual([0, 0]);
    expect(path[path.length - 1]).toEqual([3, 3]);
  });

  test("should find a path from one corner to the opposite corner", () => {
    const path = knightMoves([0, 0], [7, 7]);
    // usually takes 6 moves (7 squares total)
    expect(path.length).toBe(7);
  });
});

