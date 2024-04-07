
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

/* description, toc, installation, usage, license, contributing, tests, questions */

const generateReadme = ({ title, description, motivation, problemSolved, learned, installation }) =>
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

  ])

  .then((responses) => {
    const readMeContent = generateReadme(responses);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
