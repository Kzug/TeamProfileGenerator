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

module.exports = Engineer;
