const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, officeNumber, id, email) {
    super(id, name, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
