const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML')
const path = require("path");
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'fullName',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Please provide a short bio for yourself.',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'Please share a link to your LinkedIn profile.',
        name: 'linkedIn',
      },
      {
        type: 'input',
        message: 'Please share a link to your Github profile.',
        name: 'github',
      },
      
])
    .then((response) => {
        console.log(response);
        writeToFile("index.html", generateHTML({ ...response }));
    });

    function writeToFile(fileName, data) {
        fs.writeFileSync(path.join(process.cwd(), fileName), data)
      }