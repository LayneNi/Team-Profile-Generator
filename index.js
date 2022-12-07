const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML')
const path = require("path");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const myTeamArray = [];

const managerQuestions = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the Manager's name?",
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
const { name, id, email, office } = response
const manager = new Manager(name, id, email, office);
myTeamArray.push(manager);
createEmployee(response.employee)
})
};

// switch (key) {
//   case "Intern":
    
//     break;

//   default:
//     break;
// }

const createEmployee = (employeeType) => {
  if (employeeType === "There are no more employees") {
    console.log(myTeamArray);
    writeToFile("./index.html", generateHTML(myTeamArray));
    return console.log( "You are finished" );
  } else if (employeeType === "Engineer"){
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the Engineer's name?",
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
        message: "What is their github username?",
        name: 'username',
      },
      {
        type: 'list',
        message: "What type of employee would you like to add next?",
        choices: ["Engineer", "Intern", "There are no more employees"],
        name: 'employee',
      },
    ])
    .then((response) =>{
      const { name, id, email, username } = response
      const engineer = new Engineer(name, id, email, username);
      myTeamArray.push(engineer);
      createEmployee(response.employee)
  })
}else if (employeeType === "Intern"){
  inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the Intern's name?",
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
      message: "What school does the Intern attend?",
      name: 'school',
    },
    {
      type: 'list',
      message: "What type of employee would you like to add next?",
      choices: ["Engineer", "Intern", "There are no more employees"],
      name: 'employee',
    },
  ])
  .then((response) =>{
    const { name, id, email, school } = response
    const intern = new Intern(name, id, email, school);
    myTeamArray.push(intern);
    createEmployee(response.employee)
})
}
}

managerQuestions()


// .then((response) => {
//   console.log(response);
// writeToFile("index.html", generateHTML({ ...response }));
// });

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, 'utf-8')
}