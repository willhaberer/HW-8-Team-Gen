const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./memberRoles/employee");
const manager = require("./memberRoles/manager");
const engineer = require("./memberRoles/engineer");
const intern = require("./memberRoles/intern");

function createTeamManager() {}

function createEngineer() {}

function createIntern() {}

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
    ])
    .then((response) => {
      console.log(response);
    });
}

function init() {
  createManager();
}

init();
