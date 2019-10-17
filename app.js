// Dependencies
const inquirer = require('inquirer');

// HTML
const displayHTML = require('./utils/displayHTML');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Questions
const {
    employeeTypeQuestions,
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions
} = require('./lib/questions');


async function getSingleEmployee(employeeType) {

    let Klass;
    let questions;

    switch (employeeType) {
        case 'Engineer':
            Klass = Engineer;
            questions = engineerQuestions
            break;
        case 'Intern':
            Klass = Intern;
            questions = internQuestions
            break;
        case 'Manager':
            Klass = Manager;
            questions = managerQuestions
            break;
    }

    try {

        let data = await inquirer.prompt(employeeQuestions.concat(questions));
        return new Klass(data)

    } catch (err) {
        throw err
    }
}

// Returns an array of all team members
async function createTeam() {

    const team = [];

    return new Promise(async (resolve, reject) => {
        try {

            // Get manager and push to team array
            let manager = await getSingleEmployee("Manager");
            team.push(manager);

            // Get next employee
            await getEmployee();

            async function getEmployee() {
                try {
                    inquirer
                        .prompt(employeeTypeQuestions)
                        .then(async ({ employeeType }) => {
                            if (employeeType === "Engineer") {
                                return { engineer } = await getSingleEmployee(employeeType);
                            } else if (employeeType === "Intern") {
                                return { intern } = await getSingleEmployee(employeeType);
                            } else {
                                employee = null
                            }
                        }).then(employee => {
                            if (employee) {
                                team.push(employee);
                                getEmployee();
                            } else {
                                resolve(team)
                            }
                        })
                } catch (err) {
                    reject(err)
                }
            }


        } catch (err) {
            console.log(err)
        }
    })
}

async function test() {
    let finalTeam = await createTeam();
    console.log(finalTeam);
    displayHTML(finalTeam);
}

test();