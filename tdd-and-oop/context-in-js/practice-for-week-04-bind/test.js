const Employee = require('./employee');

const johnWick = new Employee('John Wick', 'Dog Lover');

setTimeout(johnWick.sayName.bind(johnWick), 2000);

setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);
