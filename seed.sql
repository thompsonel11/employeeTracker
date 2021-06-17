USE employeeDB;

INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Alison", "Blodgett", 1, 4),
("Liz", "Thompson", 2, 5),
("Matt", "Rogers", 3, 1),
("Alex", "Matthews", 4, 2),
("Kat", "Joyner", 5, 3),
("Sarah", "Michaels", 6, 6),
("Will", "Braddy", 7, 7),
("Zach", "Williams", 1, 4),
("Beth", "Farley", 2, 5),


INSERT INTO departmentTable (deptName)
VALUES ("Engineering"), 
("Finance"),
("Legal"),
("Sales");


INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 160000, 4), 
("Salesperson", 120000, 4),
("Lead Engineer", 130000, 1),
("Software Engineer", 90000, 1),
("Accountant", 120000, 2),
("Legal Team Lead", 200000, 3),
("Lawyer", 150000, 3);


