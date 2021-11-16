const employee = require("./employee");

class engineer extends employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  returnGithub() {
    return this.github;
  }
}

module.exports = engineer;
