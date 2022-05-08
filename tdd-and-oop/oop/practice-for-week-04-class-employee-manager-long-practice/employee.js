class Employee {
  constructor(name, title, salary, boss = null) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = boss;

    if (this.boss) {
      this.boss.addEmployee(this);
    }
  }

  bonus(multiplier) {
    return this.salary * multiplier;
  }
}

module.exports = Employee;
