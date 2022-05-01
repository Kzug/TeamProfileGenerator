const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, github, id, email) {
    super(id, name, email, "Engineer");
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
