const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, title, salary, boss) {
    super(name, title, salary, boss);

    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getTotalSalaryOfEmployees(employees = this.employees) {
    if (!employees.length) {
      return 0;
    }

    let totalSalary = 0;

    employees.forEach(employee => {
      if (employee instanceof Manager) {
        totalSalary += employee.getTotalSalaryOfEmployees() + employee.salary;
      } else {
        totalSalary += employee.salary;
      }
    })

    return totalSalary;
  }

  bonus(multiplier) {
    return (this.salary + this.getTotalSalaryOfEmployees()) * multiplier;
  }
}


module.exports = Manager;
