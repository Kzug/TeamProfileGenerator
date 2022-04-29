const Manager = require("../lib/Manager");

const managerName = "Michael Scott";
const managerId = "1";
const managerOfficeNum = "4";
const managerEmail = "bestboss@dundermifflin.com";

describe("Manager", () => {
  test("should return true", () => {
    const testManager = new Manager(
      managerId,
      managerName,
      managerEmail,
      managerOfficeNum
    );

    expect(testManager.name).toEqual(managerName);
    expect(testManager.id).toEqual(managerId);
    expect(testManager.email).toEqual(managerEmail);
    expect(testManager.officeNumber).toEqual(managerOfficeNum);
  });
});
