const fs = require("fs");
const inquirer = require("inquirer");
var role = "";
function createTeamManager() {}

function createEngineer() {}

function createIntern() {}

function memberRole() {
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
    ])
    .then((response) => {
      console.log(response);
      role = response.memberRole;
    });
}

function init() {
  memberRole();
}

init();
