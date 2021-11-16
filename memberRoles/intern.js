const employee = require("./employee");

class intern extends employee {
  constructor(id, name, email, school) {
    this.school = school;
    super(id, name, email);
  }

  returnSchool() {
    return this.school;
  }
}

module.exports = intern;
