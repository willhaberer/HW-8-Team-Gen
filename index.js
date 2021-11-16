const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./memberRoles/employee");
const Manager = require("./memberRoles/manager");
const Engineer = require("./memberRoles/engineer");
const Intern = require("./memberRoles/intern");

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managername",
      },
      {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "managerid",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNum",
      },
    ])
    .then((response) => {
      const { managerid, managername, managerEmail, officeNum } = response;
      const manager = new Manager(
        managerid,
        managername,
        managerEmail,
        officeNum
      );
      console.log(manager);
    });
}

function createIE() {
  inquirer.prompt([
    {
      type: "list",
      message: "What is the employee's role?",
      name: "role",
      choices: ["Engineer", "Intern"],
    },
  ]);
}

function init() {
  createIE();
}

init();
