// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function(NewEmployee) {
// User input is used to create and return an array of employee objects.
let Employee = true;
  const NewEmployee = [];
  while(Employee) {
  const NewEmployee = {
      firstName: prompt("Employees First Name?"),
      lastName: prompt("Employees Last Name?"),
      salary: parseInt(prompt('Please Enter their Salary',"0"),10),
};

NewEmployee.push(NewEmployee)
Employee = confirm("Add Another Employee to the list?")
  }
  return NewEmployee
          }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
// Calculates and displays the average salary
  console.log("Finding the Average")
  const sum = employeesArray.reduce((add, curr) => acc + parseInt(curr.salary), 0); 
    const average = sum / employeesArray.length;
    console.log (average);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
// Select and displays a random employee
let rand = employeesArray[ (Math.floor (Math.random() * employeesArray.length))];
rand1 = rand.firstName;
rand2 = rand.lastName;
console.log(rand1,rand2);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
