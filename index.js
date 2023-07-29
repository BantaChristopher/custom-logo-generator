const inquirer = require('inquirer');
const fs = require('fs/promises');
const {Square, Triangle, Circle} = require('./lib/shapes');

// w300 h200
function generateLogo(answers) {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${answers.shape.render(answers.color)}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`
}

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
        ]).then(answers)
            let logo = generateLogo(answers)
            fs.writeFile('logo.svg', logo, err =>
            err ? console.log('Uh-oh, something went wrong.. try again') : console.log('Generated logo.svg'))
    }

    main()

    // Gather input from user
    // put answers into different functions which return html?
    // put everything together
    // write file
