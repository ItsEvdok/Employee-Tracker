-- 1=Sales 2=Engine 3=Finance 4=Legal

INSERT INTO department (department_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
    ('Sales Lead', '100000', 1),
    ('Salesperson', '80000', 1),
    ('Lead Engineer', '150000', 2),
    ('Software engineer', '120000', 2),
    ('Accountant', '125000', 3),
    ('Legal Team Lead', '250000', 4),
    ('Lawyer', '190000', 4);