const Engineer = require("../lib/Engineer");

const engineerName = "Dwight Shrute";
const engineerId = "001";
const engineerEmail = "beatsbears@galactica.com";
const testGithub = "github/DShrute";

describe("Engineer", () => {
  test("should return true", () => {
    const testEngineer = new Engineer(
      engineerId,
      engineerName,
      engineerEmail,
      testGithub
    );

    expect(testEngineer.name).toEqual(engineerName);
    expect(testEngineer.id).toEqual(engineerId);
    expect(testEngineer.email).toEqual(engineerEmail);
    expect(testEngineer.github).toEqual(testGithub);
  });
});
