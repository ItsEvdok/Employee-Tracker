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
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee"
            ]
        }
    ])
    .then ((response) => {
        if(response.selection === "View all departments"){
            return viewDepartments();
        } else if (response.selection === "View all roles"){
            return viewRoles();
        } else if (response.selection === "View all employees"){
            return viewEmployees();
        } else if (response.selection === "Add a department"){
            return addDepartment();
        } else if (response.selection === "Add a role"){
            return addRole();
        } else if (response.selection === "Add an employee"){
            return addEmployee();
        }
    })
}

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
}

const viewRoles = () => {
    const sql = `SELECT * FROM `
}

const viewEmployees = () => {

}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

employeeData();