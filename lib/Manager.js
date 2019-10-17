'use strict';

const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, id, email, officeNumber}) {
        
        if (name === undefined) {
            name = arguments[0];
            id = arguments[1];
            email = arguments[2];
            officeNumber = arguments[3]
        }

        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }

    getDetail() {
        return this.officeNumber
    }
}

module.exports = Manager;