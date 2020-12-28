const foods = require("./foods");
const min = 12;
const max = 40;

describe("Foods tests", () => {
  test("Test length is 3", () => {
    expect(foods(foods.food, min, max)).toHaveLength(3);
  });
  test("Test for array has predefined object", () => {
    expect(foods(foods.food, min, max)).toContainEqual({
      kind: "pepper",
      price: 27,
    });
  });

  test("Test for sorted array contains 2nd,3rd,4th objects of initial array", () => {
    expect(foods(foods.food, min, max)).toEqual(
      expect.arrayContaining([foods.food[1], foods.food[2], foods.food[3]])
    );
  });
  test("Test for price of first element is greater than min", () => {
    expect(foods(foods.food, min, max)[0].price).toBeGreaterThan(min);
  });

  test("Test for price of third element is less than max", () => {
    expect(foods(foods.food, min, max)[2].price).toBeLessThan(max);
  });

  test("Test for array doesn't contain lemon object", () => {
    expect(foods(foods.food, min, max)).not.toContainEqual({
      kind: "lemon",
      price: 50,
    });
  });

  test("Test for price of first element is less than price of last element", () => {
    expect(foods(foods.food, min, max)[0].price).toBeLessThan(
      foods(foods.food, min, max)[foods(foods.food, min, max).length - 1].price
    );
  });

  test("Test for 2nd element of sordes array has property kind:banana ", () => {
    expect(foods(foods.food, min, max)[2]).toHaveProperty('kind','banana');
  });
});
