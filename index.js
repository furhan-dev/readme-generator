const inquirer = require('inquirer');
const fs = require('fs');

const licenseMap = {
    'None': 'None',
    'Apache License 2.0': 'Apache-2.0',
    'GNU General Public License v3.0': 'GPL-3.0',
    'MIT License': 'MIT',
    'BSD 2-Clause "Simplified" License': 'BSD-2',
    'BSD 3-Clause "New" or "Revised" License': 'BSD-3',
    'Boost Software License 1.0': 'BSL-1.0',
    'Creative Commons Zero v1.0 Universal': 'CC0-1.0',
    'Eclipse Public License 2.0': 'EPL-2.0',
    'GNU Affero General Public License v3.0': 'AGPL-3.0',
    'GNU General Public License v2.0': 'GPL-2.0',
    'GNU Lesser General Public License v2.1': 'LGPL-2.1',
    'Mozilla Public License 2.0': 'MPL-2.0',
    'The Unlicense': 'Unlicense',
};

const generateReadme = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Welcome to the README Generator!\n'
                    + 'You will be prompted with a series of questions to fill in sections of the README\n'
                    + 'Would you like to continue?',
                name: 'generate',
            }
        ])
        .then((response) => {
            if (response.generate === true) {
                promptForReadmeInput();
            }
        });
};

const promptForReadmeInput = () => {
    inquirer
        .prompt([
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
                type: 'list',
                message: 'Select License:',
                choices: Object.keys(licenseMap),
                name: 'license',
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
            fs.appendFile("test.md", title(response.title), err => {});
            fs.appendFile("test.md", createSection("Description", response.desc), err => {});
            fs.appendFile("test.md", toc(), err => {});
        });
};

const title = t => `# ${t}\n\n`;
const createSection = (section, content) => `## ${section}\n\n${content}\n\n\n`;
const toc = () => {
        return "- [Installation](#installation)\n"
        + "- [Usage](#usage)\n"
        + "- [License](#license)\n"
        + "- [Contributing](#contributing)\n"
        + "- [Tests](#tests)\n"
        + "- [Questions](#questions)\n\n\n";
};

generateReadme();