const employee = require("./employee");

class intern extends employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }

  returnSchool() {
    return this.school;
  }
}

module.exports = intern;
