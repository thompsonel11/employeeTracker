const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '2523435702',
  database: 'employeeDB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
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
          'View All Employees By Department',
          'View All Employees By Manager',
          'Add Employee',
          'Remove Employee',
          'Update Employee Role',
          'Update Employee Manager',
          'Exit'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View All Employees':
            viewAll();
            break;

          case 'View All Employees By Department':
            viewDept();
            break;

          case 'View All Employees By Manager':
            viewManager();
            break;           

          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Remove Employee':
            removeEmployee();
            break;
  
          case 'Update Employee Role':
            updateRole();
            break;
  
          case 'Update Employee Manager':
            updateManager();
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

  // ************* VIEW ALL FUNCTION ****************************
  const viewAll = () => {
    inquirer
      .prompt(

      )
      .then((answer) => {

       
      
      selectAction();
      }
      )
  }

  // ************* VIEW ALL BY DEPT FUNCTION *********************
  const viewDept = () => {
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

  // ************* VIEW ALL BY MANAGER FUNCTION ******************
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

  // *************  ADD EMPLOYEE FUNCTION  ******************

  const addEmployee = () => {
    inquirer
      .prompt(
        {
        name: 'firstName',
        type: 'input',
        message: 'What is the employees first name?',
        }
        {
        name: 'lastName',
        type: 'input',
        message: 'What is the employees last name?',
        }
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
        // FIGURE OUT WHAT GOES HERE 
        selectAction();
        });
      };

// *************  REMOVE EMPLOYEE FUNCTION  **************
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
  

 // ************* UPDATE THE EMPLOYEE ROLE *********************     
  const updateRole = () => {
    inquirer
      .prompt([ 


      ])
      .then((answer) => {

       
      
      selectAction();
      }
      )
    }

 // ************* UPDATE THE EMPLOYEE MANAGER *********************     
 const updateManager = () => {
  inquirer
    .prompt([ 


    ])
    .then((answer) => {

       
      
    selectAction();
    }
    )
  }