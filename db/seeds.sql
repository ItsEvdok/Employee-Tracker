INSERT INTO department (department_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', '100000', 1),
    ('Salesperson', '80000', 1),
    ('Lead Engineer', '150000', 2),
    ('Software engineer', '120000', 2),
    ('Accountant', '125000', 3),
    ('Legal Team Lead', '250000', 4),
    ('Lawyer', '190000', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ben', 'Askren', 1, 3),
    ('Timmy', 'Benjamin', 2, 1),
    ('Kevin', 'Spacey', 3, NULL),
    ('Benjamin', 'Hoover', 4, 3),
    ('Post', 'Malone', 5, NULL),
    ('Kevin', 'Hart', 6, NULL),
    ('Trisha', 'Doe', 7, 6);