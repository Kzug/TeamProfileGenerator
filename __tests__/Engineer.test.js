const Engineer = require("../lib/Engineer");

const engineerName = "Dwight Shrute";
const engineerId = "001";
const engineerEmail = "beatsbears@galactica.com";
const testGithub = "github/DShrute";

describe("Engineer name", () => {
  test("should return true", () => {
    const testEngineer = new Engineer(
      engineerName,
      testGithub,
      engineerId,
      engineerEmail
    );

    expect(testEngineer.getName()).toEqual(engineerName);
  });
});

describe("Engineer id", () => {
  test("should return true", () => {
    const testEngineer = new Engineer(
      engineerName,
      testGithub,
      engineerId,
      engineerEmail
    );

    expect(testEngineer.getId()).toEqual(engineerId);
  });
});

describe("Engineer role", () => {
  test("should return true", () => {
    const testEngineer = new Engineer(
      engineerName,
      testGithub,
      engineerId,
      engineerEmail
    );

    expect(testEngineer.getRole()).toEqual("Engineer");
  });
});
