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
VALUES ("Alison", "Blodgett", 1, NULL);
INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Liz", "Thompson", 2, 1);
INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Matt", "Rogers", 2, 1);
INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Alex", "Matthews", 4, 3);
INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Kat", "Joyner", 5, NULL);
INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Sarah", "Michaels", 6, 5);
INSERT INTO employeeTable (firstName, lastName, roleId, managerId)
VALUES ("Will", "Braddy", 7, 4);

