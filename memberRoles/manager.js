const employee = require("./employee");

class manager extends employee {
  constructor(id, name, email, officeNum) {
    super(id, name, email);
    this.officeNum = officeNum;
  }

  returnOffice() {
    return this.officeNum;
  }
}

module.exports = manager;
