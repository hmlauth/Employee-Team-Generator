'use strict';

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({name, id, email, github}) {

        if (name === undefined) {
            name = arguments[0];
            id = arguments[1];
            email = arguments[2];
            github = arguments[3]
        }

        super(name, id, email)
        this.github = github
    }

    getRole() {
        return 'Engineer'
    }

    getDetail() {
        return this.github
    }
}

module.exports = Engineer