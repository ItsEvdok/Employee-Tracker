SELECT role.id, role.title, department.department_name, role.salary
    FROM role
    LEFT JOIN department ON role.department_id = department.id;
