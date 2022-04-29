const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email, "Engineer");
    this.github = github;
  }

  getGithub() {
    console.log(this.github);
  }
  getRole() {
    console.log("INHERITED ROLE: ", this.role);
    return this.role;
  }
}

const engineerQ = ["Enter engineer's github"];

const NewEngineer = new Engineer(123, "Bob", "bob@bob.com", "github.com/bob");
console.log(NewEngineer.getRole());

module.exports = Engineer;
