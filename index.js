const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')
const empArr = []

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        id: 'id',
        message: 'What is your workid? (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your workId!');
            return false;
          }
        }
      },
      {
        type: 'input',
        email: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        role: 'role',
        message: 'What is your current role',
        choices: ['Manager', 'Engineer']
      },

    ])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email)
        empArr.push(manager)
    })
    }

