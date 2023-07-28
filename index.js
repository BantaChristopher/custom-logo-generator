const inquirer = require('inquirer');
const fs = require('fs/promises');
const shapes = require('./lib/shapes');



function main() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'letters',
                message: 'What text would you like in your logo? (Up to three letters)'
            },
            {
                type: 'input',
                name: 'text-color',
                message: 'What color would you like the text to be?',
            },
                    {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: "input",
                name: 'shape-color',
                message: 'What color would you like the shape to be?',
            }
        ]).then(data)
            fs.writeFile('logo.svg', data, err =>
            err ? console.log('Uh-oh, something went wrong.. try again') : console.log('Generated logo.svg'))
    }

    main()

    // Gather input from user
    // put answers into different functions which return html?
    // put everything together
    // write file
    