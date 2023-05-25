const fs = require('fs');
const inquirer = require('inquirer');
// const { createSVG } = require('./lib');
const { Triangle, Circle, Square } = require('./lib/shapes')
// Prompt for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    // Create SVG file
    let shape;
    // const svgContent = createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    console.log(answers)
    switch (answers.shape) {
      case "circle":
        shape = new Circle()
        break;
      case "triangle":
        shape = new Triangle()
        break;
      case "square":
        shape = new Square()
        break;
      default:
        console.log("Nothing to match")
        break;
    }
    shape.setText(answers.text)
    shape.setTextColor(answers.textColor)
    shape.setShapeColor(answers.shapeColor)
    console.log(shape)
    function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, function (err) {
          if (err) {
              return console.log(err);
          }
      });
  }
  
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function init(){
    inquirer.prompt(questions).then((answers)=> {
        writeToFile('logo.svg', examples(answers))
    })
}
})
.catch((error) => {
  console.error(error);
});
  