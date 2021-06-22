const mysql = require("mysql");
const util = require("util");
const inquirer = require("inquirer");
const { restoreDefaultPrompts } = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeDB",
});

(async () => {
  connection.connect(async (err) => {
    if (err) throw err;
    const message = await selectAction();
    console.log(message);
  });
})();

const query = util.promisify(connection.query).bind(connection);

const selectAction = async () => {
  const answer = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Exit",
    ],
  });

  switch (answer.action) {
    case "View All Employees":
      await viewAll();
      break;

    case "Add Employee":
      await addEmployee();
      break;

    case "Update Employee Role":
      await updateRole();
      break;

    case "View All Roles":
      await viewTable("roleTable");
      break;

    case "Add Role":
      await addRole();
      break;

    case "View All Departments":
      await viewTable("departmentTable");
      break;

    case "Add Department":
      await addDept();
      break;

    case "Exit":
      connection.end();
      break;

    default:
      console.log(`Invalid action: ${answer.action}`);
      break;
  }
};

const viewAll = async () => {
  const res = await query(`SELECT e.id,
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
    ORDER BY id;`);

  console.table(res);
  selectAction();
};

const addEmployee = async () => {
  const roles = await query(`SELECT * FROM employeeDB.roleTable`);
  const roleChoice = roles.map((choice) => ({
    name: choice.title,
    value: choice.id,
  }));

  const answer = await inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "What is the employees first name?",
    },
    {
      name: "lastName",
      type: "input",
      message: "What is the employees last name?",
    },
    {
      name: "managerId",
      type: "input",
      message: "What is the employees manager ID?",
    },
    {
      name: "roleId",
      type: "list",
      message: "What is the employees role?",
      choices: roleChoice,
    },
  ]);

  const queryText = `INSERT INTO employeeDB.employeeTable (firstName, lastName, roleId, managerId) VALUES (?,?,?,?)`;
  let answers = [
    answer.firstName,
    answer.lastName,
    answer.managerId,
    answer.roleId,
  ];
  const res = await query(queryText, answers);

  console.table(res);
  selectAction();
};

const updateRole = async () => {
  const roles = await query(`SELECT * FROM employeeDB.roleTable`);
  const roleChoice = roles.map((choice) => ({
    name: choice.title,
    value: choice.id,
  }));

  const answer = await inquirer.prompt([
    {
      name: "roleId",
      type: "list",
      message: "Which role would you like to update?",
      choices: roleChoice,
    },
    {
      name: "title",
      type: "input",
      message: "What do you want the new title to be?",
    },
  ]);

  const queryText = `UPDATE roleTable SET title=? WHERE id=?`;
  const answers = [answer.title, answer.roleId];

  const res = await query(queryText, answers);
  console.table(res);
  selectAction();
};

const viewTable = async (table) => {
  const params = [table];
  const res = await query(`SELECT * FROM ??`, params);
  console.table(res);
  selectAction();
};

const deleteRole = async () => {
  const roles = await query(`SELECT * FROM roleTable`);
  const roleChoice = roles.map((choice) => ({
    name: choice.title,
    value: choice.id,
  }));

  const answer = await inquirer.prompt([
    {
      name: "roleId",
      type: "list",
      message: "Which role would you like to delete?",
      choices: roleChoice,
    },
  ]);

  deleteFromTable("roleTable", "id", answer.roleId);
};

const deleteEmployee = async () => {
  const emps = await query(`SELECT * FROM employeeTable`);
  const empChoice = emps.map((choice) => ({
    name: `${choice.firstName} ${choice.lastName}`,
    value: choice.id,
  }));

  const answer = await inquirer.prompt([
    {
      name: "employeeId",
      type: "list",
      message: "Which employee would you like to delete?",
      choices: empChoice,
    },
  ]);

  deleteFromTable("employeeTable", "id", answer.employeeId);
};

const deleteDepartment = async () => {
  const departments = await query(`SELECT * FROM departmentTable`);
  const departmentChoice = departments.map((choice) => ({
    name: choice.deptName,
    value: choice.id,
  }));

  const answer = await inquirer.prompt([
    {
      name: "departmentId",
      type: "list",
      message: "Which department would you like to delete?",
      choices: departmentChoice,
    },
  ]);

  deleteFromTable("departmentTable", "id", answer.departmentId);
};

const deleteFromTable = async (table, idColumn, idToDelete) => {
  const params = [table, idColumn, idToDelete];
  const res = await query(`DELETE FROM ?? WHERE ?? = ?`, params);
  console.table(res);
  selectAction();
};

const addRole = async () => {
  const departments = await query(`SELECT * FROM departmentTable`);
  const departmentChoice = departments.map((choice) => ({
    name: choice.deptName,
    value: choice.id,
  }));

  const answer = await inquirer.prompt([
    {
      name: "roleName",
      type: "input",
      message: "What is the role you would like to add?",
    },
    {
      name: "roleSalary",
      type: "input",
      message: "What is the salary of this role?",
    },
    {
      name: "departmentId",
      type: "list",
      message: "Which department does this role fall under?",
      choices: departmentChoice,
    },
  ]);

  const queryString = `INSERT INTO roleTable (title, salary, departmentId) VALUES(?,?,?);`;
  const parameters = [answer.roleName, answer.roleSalary, answer.departmentId];
  const res = await query(queryString, parameters);
  console.table(res);
  selectAction();
};

const addDept = async () => {
  
  const answer = await inquirer.prompt([
    {
      name: "deptName",
      type: "input",
      message: "What is the name of the department you would like to add?"
    } 
  ]);

  const queryString = `INSERT INTO departmentTable (deptName) VALUES (?);`;
  const parameters = [answer.deptName];
  const res = await query(queryString, parameters);
  console.table(res);
  selectAction();
}
