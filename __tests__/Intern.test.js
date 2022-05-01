const Intern = require("../lib/Intern");

const testInternId = "123";
const testInternName = "George";
const testInternEmail = "George@george.com";
const testSchool = "ABC School";

describe("Intern school", () => {
  test("should return true", () => {
    const testIntern = new Intern(
      testInternName,
      testSchool,
      testInternId,
      testInternEmail
    );

    expect(testIntern.getSchool()).toEqual(testSchool);
  });
});

describe("Intern role", () => {
  test("should return true", () => {
    const testIntern = new Intern(
      testInternName,
      testSchool,
      testInternId,
      testInternEmail
    );

    expect(testIntern.getRole()).toEqual("Intern");
  });
});
