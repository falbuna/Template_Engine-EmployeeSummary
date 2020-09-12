const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// The Initial prompt when using the application
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

// The prompts that will be asked for a Manager
const ManagerPrompts = [
    {
        name: 'name',
        message: 'What is the name of the Manager you want to add?'
    },
    {
        name: 'id',
        message: 'Input an ID for the Manager.'
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

// The prompts that will be asked for an Engineer
const EngineerPrompts = [
    {
        name: 'name',
        message: 'What is the name of the Engineer you want to add?'
    },
    {
        name: 'id',
        message: 'Input an ID for the Engineer you want to add.'
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

// The prompts that will be asked for an Intern
    const InternPrompts = [
        {
            name: 'name',
            message: 'What is the name of the Intern you want to add?'
        },
        {
            name: 'id',
            message: 'Input an Id for the Intern you want to add.'
        },
        {
            name: 'email',
            message: 'What is the email of the Intern you want to add?'
        },
        {
            name: 'school',
            message: 'What is the name of the school of the Intern you want add?'
        },
        {
            type: 'confirm',
            name: 'addnewmember',
            message: 'Do you want to add another team member?',
            default: true,
        },
        ];

    function ask(){        
        return inquirer
        .prompt(question).then(response => {
            // If the user answered Manager for the initial prompt
            if (response.role === 'Manager'){
                inquirer.prompt(ManagerPrompts).then(data => {
                    // A new manager will be created from the information from the Manager Prompts
                    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                    // The manager will be pushed into the employees array
                    employees.push(manager);
                    if (data.addnewmember){
                        // If the user wants to add a new user, it will start again
                        ask();
                    }else {
                        // If the user does not want to a new user, it will generate an HTML from the employees array
                        fs.writeFile(outputPath, render(employees), () => {})
                        console.log('Generated HTML complete.')                  
                    }
            })
            }
            if (response.role === 'Engineer'){
                // If the user answered Engineer for the intial prompt
                inquirer.prompt(EngineerPrompts).then(data => {
                    // A new engineer will be created from the information from the Engineer Prompts
                    const engineer = new Engineer(data.name, data.id, data.email, data.github);
                    // The engineer will be pushed into the employees array
                    employees.push(engineer);
                    if (data.addnewmember) {
                        // If the user wants to add a new user, it will start again
                        ask();
                }else {
                    // If the user does not want to a new user, it will generate an HTML from the employees array
                    fs.writeFile(outputPath, render(employees), () => {})
                    console.log('Generated HTML complete.')            
                }
            })
            }
            if (response.role === 'Intern'){
                // If the user answered Intern for the initial prompt
                inquirer.prompt(InternPrompts).then(data => {
                    // A new intern will be created from the information from the Intern Prompts
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    // The intern will be pushed into the employees array
                    employees.push(intern);
                    if (data.addnewmember) {
                        // If the user wants to add a new user, it will start again
                        ask();
                    }else {
                        // If the user does not want to a new user, it will generate an HTML from the employees array
                        fs.writeFile(outputPath, render(employees), () => {})
                        console.log('Generated HTML complete.')
                    }
            })
            }
        })
    }

// This will initialize the application
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
