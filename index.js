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
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school",
        when: (input) => input.role === "Intern",
      },
    ])
    .then((response) => {
      const { role, id, name, emailmail, github, school } = response;
      if (role === "Engineer") {
        const employee = new Engineer(id, name, email, github);
      }
      if (role === "Intern") {
        const employee = new Engineer(id, name, email, intern);
      } else {
        let employee;
      }
      console.log(employee);
    });
}

function init() {
  createIE();
}

init();
