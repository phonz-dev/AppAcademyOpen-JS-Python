const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);

    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    const highestStudent = student1.GPA > student2.GPA
      ? student1 : student2;

    const { firstName, lastName } = highestStudent;

    return `${firstName} ${lastName} has the higher GPA.`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
