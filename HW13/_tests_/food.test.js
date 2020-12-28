const foods = require("./foods");
const min = 12;
const max = 40;

describe("Foods tests", () => {
    test("Test length is 3", () => {
      expect(foods(foods.food,min,max)).toHaveLength(3);
    });
    test("Test length is 3", () => {
        expect(foods(foods.food,min,max)).toHaveProperty({ kind: 'pepper', price: 27 });
      });
  });
  