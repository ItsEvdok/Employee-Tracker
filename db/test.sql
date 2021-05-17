SELECT employee.id,  employee.first_name, employee.last_name, role.title, role.salary, department.department_name
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id;
