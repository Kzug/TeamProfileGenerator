class Employee {
  constructor(id, name, email, role = "Employee") {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    console.log(`Id: ${this.id}`);
  }

  getEmail() {
    console.log(`Email: ${this.email}`);
  }

  getRole() {
    return this.role;
  }
}

const teamMembers = [];

module.exports = Employee;
