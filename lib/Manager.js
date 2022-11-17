// Extends Employee
// Needs:
// name
// id
// email
// officeNumber
// getRole() - overridden to return manager
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;