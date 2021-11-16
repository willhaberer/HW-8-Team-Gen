const employee = require("./employee");

class manager extends employee {
  constructor(id, name, email, officeNum) {
    this.officeNum = officeNum;
    super(id, name, email);
  }

  returnOffice() {
    return this.officeNum;
  }
}

module.exports = manager;
