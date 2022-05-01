const inquirer = require("inquirer");
const fs = require("fs");

// modules:
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//arrays
const managers = [];
const engineers = [];
const interns = [];

function initManagerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter your office number",
        name: "officeNumber",
      },
      {
        type: "input",
        message: "Enter your employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter your e-mail address",
        name: "email",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.officeNumber,
        answer.id,
        answer.email
      );
      managers.push(manager);
      initQuestionLoop();
    });
}

function initQuestionLoop() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add a team member?",
        name: "type",
        choices: ["Engineer", "Intern", "No, my team is complete."],
      },
    ])
    .then((answer) => {
      const employeeType = answer.type;
      if (employeeType === "Engineer") {
        initEngineerQuestions();
      } else if (employeeType === "Intern") {
        initInternQuestions();
      } else {
        let managerCards = managers.map((manager) => {
          return `
          <div class="card text-white bg-danger mb-3" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Manager: ${manager.name}</h5>
          <h6>Office Number: ${manager.officeNumber}</h6>
          <h6>ID: ${manager.id}</h6>
          <h6><a href = "mailto:${manager.email}">${manager.email}</a></h6>
          </div>
          </div>
          `;
        });
        let engineerCards = engineers.map((engineer) => {
          return `
          <div class="card text-white bg-success mb-3" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Engineer: ${engineer.name}</h5>
          <h6><a href = "https://github.com/${engineer.github}">Github</a></h6>
          <h6>ID: ${engineer.id}</h6>
          <h6><a href = "mailto:${engineer.email}">${engineer.email}</a></h6>
          </div>
          </div>
          `;
        });
        let internCards = interns.map((intern) => {
          return `
          <div class="card text-white bg-warning mb-3" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Intern: ${intern.name}</h5>
          <h6>School: ${intern.school}</h6>
          <h6>ID: ${intern.id}</h6>
          <h6><a href = "mailto:${intern.email}">${intern.email}</a></h6>
          </div>
          </div>
          `;
        });
        generateHTML(managerCards, engineerCards, internCards);
      }
    });
}

function initEngineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineer's name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter engineer's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter engineer's e-mail address",
        name: "email",
      },
      {
        type: "input",
        message: "Enter engineer's github username",
        name: "github",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.github,
        answer.id,
        answer.email
      );
      engineers.push(engineer);
      initQuestionLoop();
    });
}

function initInternQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern's name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter intern's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter intern's e-mail address",
        name: "email",
      },
      {
        type: "input",
        message: "Enter intern's school",
        name: "school",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.school,
        answer.id,
        answer.email
      );
      interns.push(intern);
      initQuestionLoop();
    });
}

initManagerQuestions();

const generateHTML = (managerCards, engineerCards, internCards) => {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container card-group">
   ${managerCards}
   ${engineerCards}
   ${internCards}
  </div>
</div>
</body>
</html>`;

  fs.writeFile("index.html", html, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
};
