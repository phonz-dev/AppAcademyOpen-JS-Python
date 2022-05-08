const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager('Hobbes', 'Founder', 1000000);
const calvin = new Manager('Calvin', 'Director', 130000, hobbes);
const susie = new Manager('Susie', 'TA Manager', 100000, calvin);
const lily = new Employee('Lily', 'TA', 90000, susie);
const clifford = new Employee('Clifford', 'TA', 90000, susie);


console.log(hobbes.bonus(0.05));
console.log(calvin.bonus(0.05));
console.log(susie.bonus(0.05));
console.log(lily.bonus(0.05));
console.log(clifford.bonus(0.05));
