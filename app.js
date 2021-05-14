const inquirer = require('inquirer');

const employeeData = () => {
    console.log(" Employee Tracker ");

    return inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What woudl you like to do?",
            choices: [
                "View all Employees",
                "Add Employee",
                "Remove Employee"
            ]
        }
    ])
}