const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const question = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the job title of the team member you want to add?',
        choices: [
            'Manager',
            'Engineer',
            'Intern']
    },
];

const ManagerPrompts = [
    {
        name: 'name',
        message: 'What is the name of the Manager you want to add?'
    },
    {
        name: 'email',
        message: 'What is the email of the manager you want to add?'
    },
    {
        name: 'officeNumber',
        message: 'What is the office number of the Manager you want add?'
    },
    {
        type: 'confirm',
        name: 'addnewmember',
        message: 'Do you want to add another team member?',
        default: true,
    },
    ];

const EngineerPrompts = [
    {
        name: 'name',
        message: 'What is the name of the Engineer you want to add?'
    },
    {
        name: 'email',
        message: 'What is the email of the Engineer you want to add?'
    },
    {
        name: 'github',
        message: 'What is Github account of the Engineer you want add?'
    },
    {
        type: 'confirm',
        name: 'addnewmember',
        message: 'Do you want to add another team member?',
        default: true,
    },
    ];

    function ask(){

        let lastId = 0;
        lastId++;
        id = lastId;

        inquirer
        .prompt(question).then(response => {
            if (response.role === 'Manager'){
                inquirer.prompt(ManagerPrompts).then(data => {
                    const manager = new Manager(data.name, id, data.email, data.role, data.officeNumber);
                    console.log(manager)
                    if (data.addnewmember){
                        ask();
                    }
            })
            }
            if (response.role === 'Engineer'){
                inquirer.prompt(EngineerPrompts).then(data => {
                    const engineer = new Engineer(data.name, id, data.email, data.role, data.github);
                    console.log(engineer)
                    if (data.addnewmember) {
                        ask();
                }
            })
            }
            if (response.role === 'Intern'){
                internInfo();
            }

        })
    }

ask();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
