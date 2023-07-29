const inquirer = require('inquirer');
const fs = require('fs/promises');
const {Square, Triangle, Circle} = require('./lib/shapes');

function generateLogo(answers) {
    if(answers.shape === 'Square') {
        var shape = new Square(answers.shapeColor).render()
    } else if(answers.shape === 'Triangle') {
        var shape = new Triangle(answers.shapeColor).render()
    } else {
        var shape = new Circle(answers.shapeColor).render()
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shape}
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`
};

async function main() {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like in your logo? (Up to three letters)'
            },
            {
                type: 'input',
                name: 'textColor',
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
                name: 'shapeColor',
                message: 'What color would you like the shape to be?',
            }
        ]).then((answers) => { 
            if(answers.text.length > 3) {
            console.log('Error: Text can not be longer than 3 letters, please try again.');
            main();
            return
            }
            fs.writeFile(`./examples/${answers.text+answers.shapeColor}.svg`, generateLogo(answers), err =>
            err ? console.log('Uh-oh, something went wrong.. try again') : console.log('Generated logo.svg'));
            console.log('Generated logo.svg');
    });            
    }

    main();
