const employee = require("./employee");

class engineer extends employee {
  constructor(id, name, email, github) {
    this.github = github;
    super(id, name, email);
  }

  returnGithub() {
    return this.github;
  }
}

module.exports = engineer;
