const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, school, id, email) {
    super(id, name, email, "Intern");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
