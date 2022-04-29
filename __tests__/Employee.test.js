const Employee = require("../lib/Employee");

const testId = 1;
const testName = "frodo";
const testEmail = "frodo@shire.com";

describe("Employee", () => {
  test("should return true", () => {
    const testEmployee = new Employee(testId, testName, testEmail);

    expect(testEmployee.name).toEqual(testName);
  });
});
