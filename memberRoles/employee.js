class employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  returnID() {
    return this.id;
  }

  returnName() {
    return this.name;
  }

  returnEmail() {
    return this.email;
  }
}

module.exports = employee;
