# Employee Tracker

The purpose of this application is to provide a solution for managing a company's employees using node, inquirer, and MySQL.

## Schema

The database, employeeDB, schema contains three tables:

* **departmentTable**:

  * **id** 
  * **name** 

* **roleTable**:

  * **id** 
  * **title** 
  * **salary** 
  * **departmentId** 

* **employeeTable**:

  * **id** 
  * **firstName** 
  * **lastName** 
  * **roleId** 
  * **managerId** 

## Acceptance Criteria

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

### Deliverables Guidelines

* [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.


## Minimum Requirements/Functionality

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* The command-line application should allow users to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

## Bonus

* The command-line application should allow users to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department


## Project Link

* The URL of the GitHub repo: https://github.com/thompsonel11/employeeTracker

## Usage 

* A video demonstrating the entirety of the app's functionality: 
