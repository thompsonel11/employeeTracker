const mysql = require('mysql');
const inquirer = require('inquirer');
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
          // 'View All Employees By Department',
          // 'View All Employees By Manager',
          'Add Employee',
          // 'Remove Employee',
          'Update Employee Role',
          // 'Update Employee Manager',
          'View All Roles',
          'Add Role',
          // 'Remove Role',
          'View All Departments',
          'Add Department',
          // 'Remove Department',
          'Exit'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View All Employees':
            viewAll();
            break;

          // case 'View All Employees By Department':
          //   viewByDept();
          //   break;

          // case 'View All Employees By Manager':
          //   viewByManager();
          //   break;           

          case 'Add Employee':
            addEmployee();
            break;
  
          // case 'Remove Employee':
          //   removeEmployee();
          //   break;
  
          case 'Update Employee Role':
            updateRole();
            break;
  
          // case 'Update Employee Manager':
          //   updateManager();
          //   break;
          
          case 'View All Roles':
            viewAllRoles();
            break;

          case 'Add Role':
            addRole();
            break;

          // case 'Remove Role':
          //   removeRole();
          //   break;

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
    const query = `SELECT * FROM employeeDB.employeeTable`
    connection.query(query,(error,res)=> {
      if (error) throw error;
      console.table(res)
      selectAction();
    })}

  // *************  ADD EMPLOYEE FUNCTION - REQUIRED  ******************
    const addEmployee = () => {
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
        choice: [
          'Sales Lead', 
          'Sales Person',
          'Lead Engineer', 
          'Software Engineer',
          'Accountant',
          'Legal Team Lead'
        ]
        }     
        )
      .then((answer) => {
        const query = `INSERT INTO employeeDB.employeeTable (employeeTable.firstName, employeeTable.lastName, employeeTable.roleId, employeeTable.managerId) VALUES (?,?,?,?)`
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

  }


  // ************* VIEW ALL DEPARTMENTS FUNCTION - REQUIRED *****************
  const viewAllDept = () => {
    const query = `SELECT * FROM employeeDB.departmentTable`
    connection.query(query,(error,res)=> {
      if (error) throw error;
      console.table(res)
      selectAction();
    })}





  // ***************************************************************************  
  // *******************  BEGIN EXTRA CREDIT FUNCTIONS  ************************ 
  // ***************************************************************************  

  // ************* VIEW ALL EMPLOYEES BY DEPT FUNCTION - EXTRA CREDIT **********
  const viewByDept = () => {
    inquirer
      .prompt({
        name: 'viewByDept',
        type: 'list',
        message: 'Which department would you like to view?',
        choices: [

        // HELP - dynamically return list of departments from DB

        ]}
      )
      .then((answer) => {

      selectAction();
      }
      )
  }

  // ************* VIEW ALL BY MANAGER FUNCTION - EXTRA CREDIT  ******************
  const viewManager = () => {
    inquirer
      .prompt({
        name: 'viewByMan',
        type: 'list',
        message: 'Which managers team would you like to view?',
        choices: [

        // HELP

        ]}
      )
      .then((answer) => {

       
      
      selectAction();
      }
      )
  }

  

// *************  REMOVE EMPLOYEE FUNCTION - EXTRA CREDIT  **************
// figure out which type is appropriate and how to dynamically list employees from table 
  const removeEmployee = () => {
    inquirer
      .prompt(
        {
        name: 'removeEmp',
        type: 'list',
        message: 'Which employee would you like to remove?', 
        choice: [

        ]
        }     
        )
      .then((answer) => {
        // FIGURE OUT WHAT GOES HERE TO REMOVE SELECTED EMPLOYEE FROM TABLE 
        selectAction();
        });
      };
  // ************* UPDATE THE EMPLOYEE MANAGER - EXTRA CREDIT *********************     
 const updateManager = () => {
  inquirer
    .prompt([ 


    ])
    .then((answer) => {

       
      
    selectAction();
    }
    )
  } 
    