DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;
USE employeeDB;

CREATE TABLE departmentTable (
  id INT NOT NULL,
  deptName VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roleTable (
  id INT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(6,2) NULL,
  departmentId INT NULL, 
  PRIMARY KEY (id)  
);

CREATE TABLE employeeTable (
  id INT NOT NULL,
  firstName VARCHAR(30) NULL,
  lastName VARCHAR(30) NULL,
  roleId INT NULL, 
  managerId INT NULL,
  PRIMARY KEY (id)  
);


SELECT * FROM departmentTable;
SELECT * FROM roleTable;
SELECT * FROM employeeTable
