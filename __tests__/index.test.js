// Code to show file structure. Should be changed according to the assignment
// import { subtract } from "../index";

// test("subtract 2 - 1 to equal 1", () => {
//   expect(subtract(2, 1)).toBe(1);
// });

const index = require('../index');

test("subtract 2 - 1 to equal 1", () => {
  expect(index(2, 1)).toBe(1);
});
