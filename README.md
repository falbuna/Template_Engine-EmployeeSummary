# Template_Engine-EmployeeSummary
Homework for Week 10

## Introduction

This application will use Node CLI to take information and data about employees and generate an HTML webpage that displays summaries for each person.

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Questions](#Questions)

## Description

This application uses Node.js and the Inquirer package to dynamically create Objects and Classes from the user's input to create HTML.

## Installation

In order to use this application, the user will need to have Node.js installed on their computer. The user will also need to have the Inquirer npm package installed in the folder.

## Usage

To start the application, the user will need to input "node app.js" into the console.

![Windows Powershell with node app.js](https://github.com/falbuna/Template_Engine-EmployeeSummary/blob/master/Assets/Initial.png)

The user will then be asked for the job title of the team member they will want to add.

![The initial prompt when using the application](https://github.com/falbuna/Template_Engine-EmployeeSummary/blob/master/Assets/Manager1.png)

The user will then be asked to input the name of the Manager, an ID, the email for the Manager, and the office number for the Manager. The last prompt will ask if the user wants to input another team member. If the user inputs Y (for Yes), they will be given a prompt to enter the job title for the new team member. If the user wants to input an Engineer, they will be asked for their Github account instead of the office number. Likewise, If the user wants to input an Intern, they will be asked for the School the Intern is attending.

![Additional prompts answered using the application](https://github.com/falbuna/Template_Engine-EmployeeSummary/blob/master/Assets/Intern1.png)

When the user is satisfied with the team members, they will need to input N (for No) when asked if they will want to add another team member. They should see "Generated HTML complete" in the console.

![All the answered prompts using the application](https://github.com/falbuna/Template_Engine-EmployeeSummary/blob/master/Assets/Complete.png)

The user should see a generated html file, "team.html" with the information that was asked from the Inquirer prompts. The user can then open the team.html file in their browser.

![Generated HTML using the application](https://github.com/falbuna/Template_Engine-EmployeeSummary/blob/master/Assets/generatedHTML.png)

If you want to watch a short video on how to use the application, it can be found here: [https://drive.google.com/file/d/189DZKT0ENDrx3PKXrZzKKb8XGSLsG2Rm/view](https://drive.google.com/file/d/189DZKT0ENDrx3PKXrZzKKb8XGSLsG2Rm/view)

## Tests

There were tests written to ensure functionality for the application using JEST. They can be run using "npm run test".

## Questions

If you have any questions regarding this application, please reach me at: falbuna1@gmail.com

My Github can be found here: [https://github.com/falbuna/](https://github.com/falbuna/)