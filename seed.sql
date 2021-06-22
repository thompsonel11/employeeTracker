USE employeeDB;

INSERT INTO departmentTable (deptName)
VALUES ("Engineering"), 
("Finance"),
("Legal"),
("Sales");


INSERT INTO roleTable (title, salary, departmentId)
VALUES ("Sales Lead", 160000, 4), 
("Salesperson", 120000, 4),
("Lead Engineer", 130000, 1),
("Software Engineer", 90000, 1),
("Accountant", 120000, 2),
("Legal Team Lead", 200000, 3),
("Lawyer", 150000, 3);


INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Alison", "Blodgett", 1, NULL),
("Liz", "Thompson", 2, 1),
("Matt", "Rogers", 3, 2),
("Alex", "Matthews", 4, 3),
("Kat", "Joyner", 5, 4),
("Sarah", "Michaels", 6, NULL),
("Will", "Braddy", 7, 6),
("Zach", "Williams", 8, NULL),
("Beth", "Farley", 2, NULL);

