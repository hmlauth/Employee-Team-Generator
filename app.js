// Dependencies
const inquirer = require('inquirer');

// HTML
const displayHTML = require('./utils/displayHTML');

// Classes
const Manager = require('./lib/Manager');

// Questions
const {
    managerQuestions,
    employeeTypeQuestions
} = require('./lib/questions');


async function createTeam() {
    return new Promise(async (resolve, reject) => {
        let employees = [];
        let employee = null;

        employees.push(employee = new Manager(await getManager()));

        while (employee) {
            employee = await getEmployee();
            if (employee) {
                employees.push(employee);
            }
        }
        resolve(employees);
    })
}

async function getManager() {
    return await inquirer.prompt(managerQuestions)
};

async function getEmployee() {
    let type = await inquirer.prompt(employeeTypeQuestions);
    // type is 
    if (!type.role) {
        return null;
    }

    let data = await inquirer.prompt(type.role.questions);
    return new type.role.class(data);
}

async function test() {
    let finalTeam = await createTeam();
    console.log(finalTeam);
    displayHTML(finalTeam);
}

test();