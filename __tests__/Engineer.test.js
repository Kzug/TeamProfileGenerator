const Engineer = require("../lib/Engineer");

const testGithub = "JohnDoe";

describe("Engineer", () => {
  test("should return true", () => {
    const testEngineer = new Engineer(testGithub);

    expect(testEngineer.github).toEqual(testGithub);
  });
});
