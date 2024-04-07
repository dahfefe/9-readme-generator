
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = 
({ title, 
  description, 
  motivation, 
  problemSolved, 
  learned, 
  installation, 
  usage, 
  credits, 
  license,
  badges, 
  features, 
  contributing, 
  tests, 
  username,
  email }) =>
  
`
  # ${title}
  
  ## Description
  
  ${description}

  ## Motivation
  
  ${motivation}

  ## Problem Solved
  
  ${problemSolved}

  ## What I Learned
  
  ${learned}

  ## Table of Contents

  - Installation: #installation
  - Usage: #usage
  - Credits: #credits
  - License: #license

  ## Installation
  
  ${installation}

  ## Usage
  
  ${usage}

  ## Credits
  
  ${credits}

  ## License
  
  ${license}

  ## Badges
  
  ${badges}

  ## Features
  
  ${features}

  ## How to Contribute
  
  ${contributing}

  ## Tests
  
  ${tests}

  ## Any Questions?
  
  Link to My GitHub:  ${username}

  If you should have any questions, you can contact me at the following email address:  ${email}

  `
;

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
      message: 'Please provide a description of your README.',
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
      message: 'Please provide instructions for how to install this utility.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is applied to your project/task?',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 3-Clause "New" or "Revised" License'],
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
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

  .then((responses) => {
    const readMeContent = generateReadme(responses);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
