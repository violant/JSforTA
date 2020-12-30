const circle = require("./calcCircle");

//Task-13-3

describe("Circle functions tests", () => {
  test("check function getCircleLength with 22", () => {
    expect(circle.getCircleLength(22)).toBeCloseTo(138.2, 1);
  });
  test("check function getCircleArea with 9", () => {
    expect(circle.getCircleArea(9)).toBeCloseTo(254.47, 2);
  });

  test('Test the function getCircleLength with no arguments', () => {
    expect(circle.getCircleLength()).toBeNaN();
});
test('Test the function getCircleArea with no arguments', () => {
    expect(circle.getCircleArea()).toBeNaN();
});

  test.each([[22, 138.2]])(
    "check circle length with radius %f is %f",
    (r, expected) => {
      expect(circle.getCircleLength(r)).toBeCloseTo(expected, 1);
    }
  );
  test.each([[9, 254.47]])(
    "check circle area with radius %f is %f",
    (r, expected) => {
      expect(circle.getCircleArea(r)).toBeCloseTo(expected, 2);
    }
  );
});
