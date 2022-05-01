const Employee = require("../lib/Employee");

const testId = 1;
const testName = "frodo";
const testEmail = "frodo@shire.com";
const testRole = "hobbit";

describe("Employee name", () => {
  test("should return true", () => {
    const testEmployee = new Employee(testId, testName, testEmail, testRole);

    expect(testEmployee.getName()).toEqual(testName);
  });
});

describe("Employee ID", () => {
  test("should return true", () => {
    const testEmployee = new Employee(testId, testName, testEmail, testRole);

    expect(testEmployee.getId()).toEqual(testId);
  });
});

describe("Employee e-mail", () => {
  test("should return true", () => {
    const testEmployee = new Employee(testId, testName, testEmail, testRole);

    expect(testEmployee.getEmail()).toEqual(testEmail);
  });
});

describe("Employee role", () => {
  test("should return true", () => {
    const testEmployee = new Employee(testId, testName, testEmail, testRole);

    expect(testEmployee.getRole()).toEqual(testRole);
  });
});
