// create license map object
const licenseMap = {
    None: "None",
    "Apache License 2.0": "Apache-2.0",
    "GNU General Public License v3.0": "GPL-3.0",
    "MIT License": "MIT",
    'BSD 2-Clause "Simplified" License': "BSD-2",
    'BSD 3-Clause "New" or "Revised" License': "BSD-3",
    "Boost Software License 1.0": "BSL-1.0",
    "Creative Commons Zero v1.0 Universal": "CC0-1.0",
    "Eclipse Public License 2.0": "EPL-2.0",
    "GNU Affero General Public License v3.0": "AGPL-3.0",
    "GNU General Public License v2.0": "GPL-2.0",
    "GNU Lesser General Public License v2.1": "LGPL-2.1",
    "Mozilla Public License 2.0": "MPL-2.0",
    "The Unlicense": "Unlicense",
};

// util function to generate readme markdown
const generateMD = answers => {
    return `# ${answers.title}
![License Badge](https://img.shields.io/badge/License-${licenseMap[answers.license]}-green)

## Description
${answers.desc}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Contact](#Contact)

## Installation
${answers.install}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## License
This project is covered under the ${answers.license}

## Contact
Email: ${answers.email}\n
GitHub: ${answers.github}
`;
}

module.exports = {
    licenseMap,
    generateMD,
};