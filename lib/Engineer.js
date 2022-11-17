// Extends Employee
// Needs:
// name
// id
// email
// github - github username
// getGithub()
// GetRole() - overridden to return 'Engineer'
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;