const employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, officeNum) {
    this.officeNum = officeNum;
    super(id, name, email);
  }

  returnOffice() {
    return this.officeNum;
  }
}

module.exports = Manager;
