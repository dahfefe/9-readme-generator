
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// Calling required file system and NPM package (Inquirer)
const inquirer = require('inquirer');
const fs = require('fs');

// function that creates markdown text with literals to input user responses from command-line prompts
const generateReadme = 
({ title, 
  description, 
  motivation, 
  problemSolved, 
  learned, 
  installation, 
  usage, 
  credits1, 
  credits2, 
  credits3, 
  license, 
  features, 
  contributing1, 
  contributing2, 
  tests, 
  username,
  email }) =>
  
`
  # ${title} ${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}

  ## Motivation
  
  ${motivation}

  ## Problem Solved
  
  ${problemSolved}

  ## What I Learned
  
  ${learned}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  - [Any Questions?](#questions)

  ## Installation 
  
  ${installation}

  ## Usage
  
  ${usage}

  ## Credits
  
  Collaborators: 
  ${credits1}

  Third-party Assets: 
  ${credits2}

  Tutorials Used: 
  ${credits3}

  ## License
  
  This project is licensed under the ${license}. You can find the license details in the LICENSE file included in this repository.

  License Link: ${renderLicenseLink(license)}

  ## Badges

  ${renderLicenseBadge(license)}

  ## Features
  
  ${features}

  ## Contributing
  
  There are many ways in which you can participate in this project, for example:

  * [Submit bugs and feature requests]( ${contributing1}), and help us verify as they are checked in
  * Review [source code changes]( ${contributing2})
  * Review the [documentation](https://github.com/microsoft/vscode-docs) and make pull requests for anything from typos to additional and new content

  ## Tests
  
  ${tests}

  ## Questions
  
  Link to My GitHub: https://github.com/${username}

  If you should have any questions, you can contact me at the following email address: ${email}

  `
;

// inquirer prompts needed for obtaining user response per section of README.md file
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your README. What is it and what is the purpose?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for completing/contributing to this task?',
    },
    {
      type: 'input',
      name: 'problemSolved',
      message: 'What problem(s) were solved with this project/task?',
    },
    {
      type: 'input',
      name: 'learned',
      message: 'What did you learn from this project/task?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits1',
      message: 'List your collaborators, if any, with links to their GitHub profiles. (only one comprehensive entry allowed here!)',
    },
    {
      type: 'input',
      name: 'credits2',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence. (only one comprehensive entry allowed here!)',
    },
    {
      type: 'input',
      name: 'credits3',
      message: 'If you followed tutorials, include links to those here as well. (only one comprehensive entry allowed here!)',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is applied to your project/task?',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0'],
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here. (only one comprehensive entry allowed here!)',
    },
    {
      type: 'input',
      name: 'contributing1',
      message: 'To allow users to submit bug and feature requests for contribution, please provide the link to the "Issues" section of your GitHub repository.',
    },
    {
      type: 'input',
      name: 'contributing2',
      message: 'To allow users to review source code changes, please provide the link to the "Pull Request" section of your GitHub repository.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Provide your GitHub username to add a link to your GitHub profile to the README.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'If anyone should have any questions, what is the email address that they may contact you?',
    },

  ])

  // .then function asynchronously collects responses from user input
  .then((responses) => {
    const readMeContent = generateReadme(responses);

    // writeFile function generates README file from user responses and error logging to aid in troubleshooting
    fs.writeFile('README_auto.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

  // function to render correspoding badge to README file based on user selection
  function renderLicenseBadge(license) {
    const licenseBadges = {
      "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    };

    if (licenseBadges[license]) {
      return licenseBadges[license];
    } else {
      return ``;
    }
  }

  // function to render correspoding license link to README file based on user selection
  function renderLicenseLink(license) {
    const licenseLinks = {
      "MIT License": "https://opensource.org/license/mit",
      "Apache License 2.0": "http://www.apache.org/licenses/LICENSE-2.0",
      "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0.en.html",
      "Mozilla Public License 2.0": "https://www.mozilla.org/en-US/MPL/2.0/",
    };

    if (licenseLinks[license]) {
      return licenseLinks[license];
    } else {
      return ``;
    }
  
  }
  