'use strict';

const Employee = require('./Employee');

class Intern extends Employee {
    constructor({name, id, email, school}) {
        
        if (name === undefined) {
            name = arguments[0];
            id = arguments[1];
            email = arguments[2];
            school = arguments[3]
        }

        super(name, id, email)
        this.school = school
    }

    getRole() {
        return "Intern"
    }

    getDetail() {
        return this.school
    }
}

module.exports = Intern