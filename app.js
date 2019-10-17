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


// Asks questions and returns Manager {name, id, email, officeNumber}
async function getManager() {
    try {
        const { name, id, email, officeNumber } = await inquirer.prompt(employeeQuestions.concat(managerQuestions));
        return new Manager(name, id, email, officeNumber)
    } catch (err) {
        throw err
    }
}

// Asks questions and returns Engineer {name, id, email, github}
async function getEngineer() {
    try {
        const { name, id, email, githubUsername } = await inquirer.prompt(employeeQuestions.concat(engineerQuestions));
        return new Engineer(name, id, email, githubUsername)
    } catch (err) {
        throw err
    }
}

// Asks questions and returns Intern {name, id, email, school}
async function getIntern() {
    try {
        const { name, id, email, school } = await inquirer.prompt(employeeQuestions.concat(internQuestions));
        return new Intern(name, id, email, school)
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
            let manager = await getManager();
            team.push(manager);

            // Get next employee
            await getEmployee();

            async function getEmployee() {
                try {
                inquirer
                    .prompt(employeeTypeQuestions)
                    .then(async ({ employeeType }) => {
                        console.log(employeeType);
                        if (employeeType === "Engineer") {
                            return { engineer } = await getEngineer();
                        } else if (employeeType === "Intern") {
                            return { intern } = await getIntern();
                        } else {
                            employee = null
                        }
                        // whatever you "return" from a .then is a resolved promise
                    }).then(employee => {
                        if (employee) {
                            team.push(employee);
                            getEmployee();
                        } else {
                            resolve(team)
                        }
                    }).catch(err => console.log(err))

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