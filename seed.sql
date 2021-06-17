USE employeeDB;

INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Alison", "Blodgett", 1, 8),
("Liz", "Thompson", 2, 7),
("Matt", "Rogers", 3, 1),
("Alex", "Matthews", 4, 1),
("Kat", "Joyner", 5, 6),
("Sarah", "Michaels", 6, 9),
("Will", "Braddy", 7, 5),
("Zach", "Williams", 1, 3),
("Beth", "Farley", 2, 2),
SELECT * FROM employeeTable;

INSERT INTO departmentTable (name)
VALUES ("Engineering"), 
("Finance"),
("Legal"),
("Sales");
SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 160000, 4), 
("Salesperson", 120000, 4),
("Lead Engineer", 130000, 1),
("Software Engineer", 90000, 1),
("Accountant", 120000, 2),
("Legal Team Lead", 200000, 3),
("Lawyer", 150000, 3);
SELECT * FROM roleTable;

