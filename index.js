import chalk from 'chalk';
import randomColor from 'randomcolor';

let pattern = '';
let height = 9;
let width = 31;
const args = process.argv.slice(2);

let color = randomColor({
  luminosity: 'random',
  hue: 'random',
});

let chosenColorByUser = args[0];
let chosenLuminosityByUser = args[1];

if (args[0]) {
  if (args[0].includes('x')) {
    const splittedString = args[0].split('x');
    width = splittedString[0];
    height = splittedString[1];

    chosenColorByUser = args[1];
    chosenLuminosityByUser = args[2];
  }
  color = randomColor({
    luminosity: chosenLuminosityByUser ? chosenLuminosityByUser : 'random',
    hue: chosenColorByUser,
  });
}

for (let i = 1; i <= height; i++) {
  if (i < Math.ceil(height / 2) - 1 || i > Math.ceil(height / 2) + 1) {
    if (i === height) pattern += '#'.repeat(width);
    else pattern += '#'.repeat(width) + '\n';
  } else {
    if (i === Math.ceil(height / 2) - 1 || i === Math.ceil(height / 2) + 1) {
      pattern += '#'.repeat(5) + ' '.repeat(width - 10) + '#'.repeat(5) + '\n';
    } else {
      pattern +=
        '#'.repeat(5) +
        ' '.repeat((width - 10) / 2 - 3.5) +
        color +
        ' '.repeat((width - 10) / 2 - 3.5) +
        '#'.repeat(5) +
        '\n';
    }
  }
}

console.log(chalk.hex(color).visible(pattern));
