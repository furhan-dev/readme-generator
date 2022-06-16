const inquirer = require("inquirer");
const fs = require("fs");
const { licenseMap, generateMD } = require("./utils/generateMD.js");

// main entry point, prompt user to continue
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "confirm",
                message:
                    "Welcome to the README Generator!\n" +
                    "You will be prompted with a series of questions to fill in sections of the README\n" +
                    "Would you like to continue?",
                name: "generate",
            },
        ]);
};

// ask user for input
const promptForReadmeInput = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Project Name:",
                name: "title",
            },
            {
                type: "input",
                message: "Description:",
                name: "desc",
            },
            {
                type: "input",
                message: "Installation Instructions:",
                name: "install",
            },
            {
                type: "input",
                message: "Usage Information:",
                name: "usage",
            },
            {
                type: "input",
                message: "Contribution Guidelines:",
                name: "contribution",
            },
            {
                type: "input",
                message: "Tests:",
                name: "tests",
            },
            {
                type: "list",
                message: "Select License:",
                choices: Object.keys(licenseMap),
                name: "license",
            },
            {
                type: "input",
                message: "GitHub Username:",
                name: "github",
            },
            {
                type: "input",
                message: "Email Address:",
                name: "email",
            },
        ]);
};

// initiate script
promptUser()
    .then(res => {
        if (res.generate) {
            promptForReadmeInput()
                .then(answers => fs.writeFileSync('./dist/README.md', generateMD(answers)))
                .then(() => console.log(`Succesfully generated ${__dirname}/dist/README.md`))
        }
    })
    .catch((err) => console.error(err));