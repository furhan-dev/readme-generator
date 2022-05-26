const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Welcome to the README Generator!\n'
                + 'You will be prompted with a series of questions to fill in sections of the README\n'
                + 'Would you like to continue?',
            name: 'generate',
        },
        {
            type: 'input',
            message: 'Project Name:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description:',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installInstructions',
        },
        {
            type: 'input',
            message: 'Usage Information:',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: 'Tests:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'GitHub Username:',
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email',
        },
    ])
    .then((response) => {
        for (property in response) {
            console.log(`${property}: ${response[property]}`);
        }
    });