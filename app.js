const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

const employeeData = () => {
    console.log(" Employee Tracker ");

    return inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            choices: [
                "View all Employees",
                "Add Employee",
                "Remove Employee"
            ]
        }
    ])
    .then ((response) => {
        if(response.selection === "Add Employee"){
            return addEmployee();
        } else if (response.selection === "Remove Employee"){
            return removeEmployee();
        } else {
            return showEmployees();
        }
    })
}

const showEmployees = () => {
    const sql = `SELECT employee.id,  employee.first_name, employee.last_name, role.title, role.salary
    FROM employee      
    LEFT JOIN role ON role.id = employee.id     
    ;`;
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "first",
            message: "What is your employees first name?"
        },
        {
            type: "input",
            name: "last",
            message: "What is your employees last name?"
        },
        {
            type: "input",
            name: "role",
            message: "What is your employees role?"
        },
        {
            type: "input",
            name: "department",
            message: "What is your employees department?"
        }
    ])
}

const removeEmployee = () => {

}

employeeData();