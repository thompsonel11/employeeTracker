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

// ************  PROMPT USER TO SELECTION ACTION ******************

const selectAction = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'Add Employee',
          'Remove Emloyee',
          'Update Employee Role',
          'View All Roles',
          'Add Role',
          'Exit'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Remove Emloyee':
            removeEmployee();
            break;
  
          case 'Update Employee Role':
            updateRole();
            break;
  
          case 'View All Roles':
            viewRoles();
            break;
  
          case 'Add Role':
            addRole();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };

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
// FIGURE OUT WHAT GOES HERE TO REMOVE SELECTED EMPLOYEE FROM TABLE 
        selectAction();
        });
      };
  

 // ************* UPDATE THE ROLE *********************     
  const updateRole = () => {
    inquirer
      .prompt([
        {
          name: 'start',
          type: 'input',
          message: 'Enter starting position: ',
          validate(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          },
        },
        {
          name: 'end',
          type: 'input',
          message: 'Enter ending position: ',
          validate(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          },
        },
      ])
      .then((answer) => {
        const query =
          'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
        connection.query(query, [answer.start, answer.end], (err, res) => {
          if (err) throw err;
          res.forEach(({ position, song, artist, year }) =>
            console.log(
              `Position: ${position} || Song: ${song} || Artist: ${artist} || Year: ${year}`
            )
          );
          runSearch();
        });
      });
  };
  
  const viewRoles = () => {
    inquirer
      .prompt({
        name: 'song',
        type: 'input',
        message: 'What song would you like to look for?',
      })
      .then((answer) => {
        console.log(`You searched for "${answer.song}"`);
        connection.query(
          'SELECT * FROM top5000 WHERE ?',
          { song: answer.song },
          (err, res) => {
            if (err) throw err;
            if (res[0]) {
              console.log(
                `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
              );
              runSearch();
            } else {
              console.error('Song not found :(\n');
              runSearch();
            }
          }
        );
      });
  };
  
  const addRole = () => {
    inquirer
      .prompt({
        name: 'role',
        type: 'input',
        message: 'What song would you like to look for?',
      })
      .then((answer) => {
        console.log(`You searched for "${answer.song}"`);
        connection.query(
          'SELECT * FROM top5000 WHERE ?',
          { song: answer.song },
          (err, res) => {
            if (err) throw err;
            if (res[0]) {
              console.log(
                `Position: ${res[0].position} || Song: ${res[0].song} || Artist: ${res[0].artist} || Year: ${res[0].year}`
              );
              runSearch();
            } else {
              console.error('Song not found :(\n');
              runSearch();
            }
          }
        );
      });
  };