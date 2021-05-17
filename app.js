const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/connection");

const employeeData = () => {
  console.log(" Employee Tracker ");

  return inquirer
    .prompt([
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
          "Add an employee",
        ],
      },
    ])
    .then((response) => {
      if (response.selection === "View all departments") {
        return viewDepartments();
      } else if (response.selection === "View all roles") {
        return viewRoles();
      } else if (response.selection === "View all employees") {
        return viewEmployees();
      } else if (response.selection === "Add a department") {
        return addDepartment();
      } else if (response.selection === "Add a role") {
        return addRole();
      } else if (response.selection === "Add an employee") {
        return addEmployee();
      }
    });
};

const viewDepartments = () => {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, row) => {
    if (err) {
      console.log("No departments found.");
      return;
    }
    console.table(row);
    employeeData();
  });
};

const viewRoles = () => {
  const sql = `SELECT role.id, role.title, department.department_name, role.salary
                FROM role
                LEFT JOIN department ON role.department_id = department.id;`;

  db.query(sql, (err, row) => {
    if (err) {
      console.log("No departments found.");
      return;
    }
    console.table(row);
    employeeData();
  });
};

const viewEmployees = () => {
  const sql = `SELECT employee.id,  employee.first_name, employee.last_name, role.title, role.salary, department.department_name
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id;`;
  db.query(sql, (err, row) => {
    if (err) {
      console.log("No departments found.");
      return;
    }
    console.table(row);
    employeeData();
  });
};

const addDepartment = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the new departments name?",
    },
  ]);
};

const addRole = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the new roles name?",
    },
    {
      type: "number",
      name: "salary",
      message: "What is the new roles salary?",
    },
    {
      type: "list",
      name: "department",
      message: "What department does the new role belong to?",
      choices: ["Sales", "Engineering", "Finance", "Legal"],
    },
  ]);
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "first",
      message: "What is the new employees first name?",
    },
    {
      type: "input",
      name: "last",
      message: "What is the new employees last name?",
    },
    {
      type: "list",
      name: "role",
      message: "What is the new employees role?",
      choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
  ]);
};

employeeData();
