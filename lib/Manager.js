const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

const managerQ = ["What is your office number?"];

module.exports = Manager;
