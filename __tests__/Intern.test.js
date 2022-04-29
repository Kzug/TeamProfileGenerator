const Intern = require("../lib/Intern");

const testInternId = "123";
const testInternName = "George";
const testInternEmail = "George@george.com";
const testSchool = "ABC School";

describe("Intern", () => {
  test("should return true", () => {
    const testIntern = new Intern(
      testInternName,
      testInternId,
      testInternEmail,
      testSchool
    );

    expect(testIntern.school).toEqual(testSchool);
  });
});
