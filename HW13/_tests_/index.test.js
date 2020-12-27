const index = require("./index");
const circle = require("./calcCircle")

// task 13-1

describe("Adding tests", () => {
  test("add 0.2 to 0.1 is 0.3", () => {
    expect(index(0.2, 0.1)).toBe(0.3);
  });
});

//task 13-2
describe("Array testd", () => {
  test("Check for admin element in array", () => {
    expect(index.userList.includes("admin")).toBe(true);
  });
  test("Check for first element in array is Nick", () => {
    expect(index.userList[0]).toBe(`Nick`);
  });
  test("Check for last element in array is new_user_2", () => {
    expect(index.userList[index.userList.length - 1]).toBe(`new_user_2`);
  });

  test("Check for array length is 5", () => {
    expect(index.userList.length).toBe(5);
  });

  test("Check for 3rd element type is string", () => {
    expect(typeof index.userList[2]).toBe("string");
  });

  test("Check for 8th element is not present", () => {
    expect(index.userList[8]).toBe(undefined);
  });
});

//Task-13-3

describe("Circle functions tests", () => {
    test("check function getCircleLength with 22", () => {
      expect(circle.getCircleLength(22).toFixed(1)).toBe("138.2");
    });
    test("check function getCircleArea with 9", () => {
        expect(circle.getCircleArea(9).toFixed(2)).toBe("254.47");
      });
  });