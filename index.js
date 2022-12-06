const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML')
const path = require("path");
const Manager = require('./lib/manager');
const myTeamArray = [];

// const engineerQuestions;

// const internQuestions;

const managerQuestions = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the manager's name?",
      name: 'name',
    },
    {
      type: 'input',
      message: "What is their employee ID?",
      name: 'id',
    },
    {
      type: 'input',
      message: "What is their email address?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is their office number?",
      name: 'office',
    },
    {
      type: 'list',
      message: "What type of employee would you like to add next?",
      choices: ["Engineer", "Intern", "There are no more employees"],
      name: 'employee',
    },
  ])
.then((response) =>{
  Manager();
const manager = new Manager(response.office);
createEmployee(response.employee)
})
};

const createEmployee = (employeeType) => {
  if (employeeType === "There are no more employees") {
    return console.log( "You are finished" );
  } else if (employeeType === "Engineer"){
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is their employee ID?",
        name: 'id',
      },
      {
        type: 'input',
        message: "What is their email address?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What is their office number?",
        name: 'office',
      },
      {
        type: 'list',
        message: "What type of employee would you like to add next?",
        choices: ["Engineer", "Intern", "There are no more employees"],
        name: 'employee',
      },
    ])
  //   .then((response) =>{
  //     Engineer();
  //   const manager = new Manager(response.office);
  //   createEmployee(response.employee)
  // })
}
}


// .then((response) => {
//   console.log(response);
//   writeToFile("index.html", generateHTML({ ...response }));
// });

// function writeToFile(fileName, data) {
//   fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }