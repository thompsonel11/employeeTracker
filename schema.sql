DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;
USE employeeDB;

CREATE TABLE departmentTable (
  id INT AUTO_INCREMENT NOT NULL,
  deptName VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roleTable (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL UNSIGNED NULL,
  departmentId INT NULL, 
  CONSTRAINT FK_departmentId_tbl_departmentTable FOREIGN KEY(departmentId)
  REFERENCES departmentTable(id),
  PRIMARY KEY (id)  
);

CREATE TABLE employeeTable (
  id INT AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30) NULL,
  lastName VARCHAR(30) NULL,
  roleId INT NULL, 
  managerId INT NULL,
  CONSTRAINT FK_managerId_tbl_employeeTable FOREIGN KEY(managerId)
  REFERENCES employeeTable(id), 
  PRIMARY KEY (id)
);


SELECT * FROM departmentTable;
SELECT * FROM roleTable;
SELECT * FROM employeeTable;


SELECT employeeTable.id, employeeTable.firstName, employeeTable.lastName, roleTable.title, departmentTable.deptName, roleTable.salary, employeeTable.managerId
FROM employeeTable
JOIN roleTable, departmentTable
WHERE 