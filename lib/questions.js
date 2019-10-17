const Engineer = require('./Engineer');
const Intern = require('./Intern');

const employeeQuestions = [
    {
        type: 'input',
        message: 'Name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'ID Number',
        name: 'id',
        validate: id => {
            let isValid = isNaN(id);
            if (!isValid) {
                return true
            } else {
                return 'Please enter a valid number.'
            }
        }
    },
    {
        type: 'input',
        message: 'Email',
        name: 'email',
        validate: email => {
            let isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (isValid) {
                return true
            } else {
                return 'Please enter a valid email address.'
            }
        }
    }
];

const managerQuestions = employeeQuestions.concat([
    {
        type: 'input',
        message: 'Office Number',
        name: 'officeNumber',
        validate: id => {
            let isValid = isNaN(id);
            if (!isValid) {
                return true
            } else {
                return 'Please enter a valid number.'
            }
        }
    }
]);

const engineerQuestions = employeeQuestions.concat([
    {
        type: 'input',
        message: 'GitHub Username',
        name: 'github'
    }
]);

const internQuestions = employeeQuestions.concat([
    {
        type: 'input',
        message: 'School',
        name: 'school'
    }
]);

const employeeTypeQuestions = [{
    type: "list",
    message: "What role would you like to add in your team?",
    name: "role",
    choices: [{
        value: {
            questions: engineerQuestions,
            class: Engineer
        },
        name: "Engineer"
    },
    {
        value: {
            questions: internQuestions,
            class: Intern
        },
        name: "Intern"
    },
    {
        value: null,
        name: "Done"
    }
    ]
}];

module.exports = {
    managerQuestions,
    employeeTypeQuestions
};