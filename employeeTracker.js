const mysql = require('mysql');
const inquirer = require('inquirer');
const { restoreDefaultPrompts } = require('inquirer');
require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '2523435702',
  database: 'employeeDB',
});

connection.connect((err) => {
    if (err) throw err;
    selectAction();
  });

// ************  PROMPT USER TO SELECT ACTION ******************

const selectAction = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'View All Roles',
          'Add Role',
          'View All Departments',
          'Add Department',
          'Exit'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View All Employees':
            viewAll();
            break;        

          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Update Employee Role':
            updateRole();
            break;
          
          case 'View All Roles':
            viewAllRoles();
            break;

          case 'Add Role':
            addRole();
            break;

          case 'View All Departments':
            viewAllDept();
            break;
          
          case 'Add Department':
            addDept();
            break;

          case 'Exit':
            connection.end();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };

  // ************************************************************
  // ************  BEGIN FUNCTIONS FOR EACH ACTION **************
  // ************************************************************

  // ************* VIEW ALL FUNCTION - REQUIRED ****************************
  const viewAll = () => {
    connection.query(`SELECT e.id,
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
    ORDER BY id;`,(error, res)=> {
      if (error) throw error;
      console.table(res);
      selectAction();
      })
  }

  // *************  ADD EMPLOYEE FUNCTION - REQUIRED  ******************
    const addEmployee = () => {
    // insert query for all roles to map to the choices
      inquirer
      .prompt(
        {
        name: 'firstName',
        type: 'input',
        message: 'What is the employees first name?',
        },
        {
        name: 'lastName',
        type: 'input',
        message: 'What is the employees last name?',
        },
        {
        name: 'role',
        type: 'list',
        message: 'What is the employees role?', 
        choice () {
          const roleArray = [];
          results.forEach(({id, roleId}) => {
            roleArray.push()
          });
        }  
        // choice: [
        //   'Sales Lead', 
        //   'Sales Person',
        //   'Lead Engineer', 
        //   'Software Engineer',
        //   'Accountant',
        //   'Legal Team Lead'
        // ]
        }     
        )
      .then((answer) => {
        const query = `INSERT INTO employeeDB.employeeTable (e.firstName, e.lastName, e.roleId, e.managerId) VALUES (?,?,?,?)`
        connection.query(query,(error,res)=> {
        if (error) throw error;
        console.table(res)
        selectAction();
        });
      });
    };

   // ************* UPDATE EMPLOYEE ROLE - REQUIRED *********************     
  const updateRole = () => {
    inquirer
      .prompt([ 


      ])
      .then((answer) => {

      
      
      selectAction();
      }
      )
    }

  // ************* VIEW ALL ROLES FUNCTION - REQUIRED *****************
  const viewAllRoles = () => {
    const query = `SELECT * FROM employeeDB.roleTable`
    connection.query(query,(error,res)=> {
      if (error) throw error;
      console.table(res)
      selectAction();
    })}

  // ****************** ADD ROLE FUNCTION - REQUIRED *********************
  const addRole = () => {
    inquirer
      .prompt([
      {
      name: 'roleName',
      type: 'input',
      message: 'What is the role you would like to add?'  
      },
      {
      name: 'roleSalary',
      type: 'input',
      message: 'What is the salary of this role?'  
      }, 
      {
      name: 'roleDepartment',
      type: 'list',
      message: 'Which department does this role fall under?',
      choices: [
        'Sales', 
        'Finance', 
        'Legal', 

      ] 
      }
      ])
      .then (answer => {
        
      })

  }


  // ************* VIEW ALL DEPARTMENTS FUNCTION - REQUIRED *****************
  const viewAllDept = () => {
    const query = `SELECT * FROM employeeDB.departmentTable`
    connection.query(query,(error,res)=> {
      if (error) throw error;
      console.table(res)
      selectAction();
    })}


    
  // GENERATE LISTS 
  
  