DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;
USE employeeDB;

CREATE TABLE departmentTable (
  id INT AUTO_INCREMENT NOT NULL,
  deptName VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roleTable (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL UNSIGNED NULL,
  departmentId INT NULL, 
  FOREIGN KEY(departmentId) REFERENCES departmentTable(id),
  PRIMARY KEY (id)  
);

CREATE TABLE employeeTable (
  id INT AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30) NULL,
  lastName VARCHAR(30) NULL,
  roleId INT NULL, 
  managerId INT NULL,
  FOREIGN KEY(managerId) REFERENCES employeeTable(id), 
  FOREIGN KEY(roleId) REFERENCES roleTable(id), 
  PRIMARY KEY (id)
);


SELECT * FROM departmentTable;
SELECT * FROM roleTable;
SELECT * FROM employeeTable;



-- JOIN TABLES 

SELECT e.id,
       e.firstName,
       e.lastName,
       r.title,
       d.deptName,
       r.salary,
       CONCAT (m.firstName, " ", m.lastName) AS managerFullName

FROM employeeTable e
LEFT JOIN roleTable r ON r.id = e.roleId 
LEFT JOIN departmentTable d ON d.id = r.departmentId
LEFT JOIN employeeTable m ON m.id = e.managerId
ORDER BY id;