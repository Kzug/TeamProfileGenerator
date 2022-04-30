const inquirer = require("inquirer");
const fs = require("fs");

// modules:
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//arrays
const managers = [];
// let managerCards = []; Should I make this a global variable?
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
        name: "officeNum",
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
        answer.officeNum,
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
        managerCards = managers.map((manager) => {
          return `
          <div>
          <h1>${manager.name}</h1>
          <h2>${manager.officeNum}</h2>
          <h2>${manager.id}</h2>
          <h2>${manager.email}</h2>
          </div>
          `;
        });
        engineerCards = engineers.map((engineer) => {
          return `
          <div>
          <h1>${engineer.name}</h1>
          <h2>${engineer.github}</h2>
          <h2>${engineer.id}</h2>
          <h2>${engineer.email}</h2>
          </div>
          `;
        });
        internCards = interns.map((intern) => {
          return `
          <div>
          <h1>${intern.name}</h1>
          <h2>${intern.school}</h2>
          <h2>${intern.id}</h2>
          <h2>${intern.email}</h2>
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
        message: "Enter engineer's github",
        name: "github",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
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
        answer.id,
        answer.email,
        answer.school
      );
      interns.push(intern);
      initQuestionLoop();
    });
}

initManagerQuestions();

// pass this function managerCards, engineerCards, internCards...then:
// ${managerCards.map((card) => {
//   return card;
// })}
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
  <div class="container">
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
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     // hint hint
//     const inquirerEmployee = new Employee(
//       answers.id,
//       answers.name,
//       answers.email
//     );
//     console.log(inquirerEmployee);

//add a loop to one of the prompts
