const Manager = require("../lib/Manager");

const managerName = "Michael Scott";
const managerId = "1";
const managerOfficeNumber = "4";
const managerEmail = "bestboss@dundermifflin.com";

describe("Manager role", () => {
  test("should return true", () => {
    const testManager = new Manager(
      managerName,
      managerOfficeNumber,
      managerId,
      managerEmail
    );

    expect(testManager.getRole()).toEqual("Manager");
  });
});

describe("Manager office number", () => {
  test("should return true", () => {
    const testManager = new Manager(
      managerName,
      managerOfficeNumber,
      managerId,
      managerEmail
    );

    expect(testManager.officeNumber).toEqual(managerOfficeNumber);
  });
});
