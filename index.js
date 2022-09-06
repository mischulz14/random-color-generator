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

const chosenColorByUser = args[0];
const chosenLuminosityByUser = args[1];

if (process.argv[2]) {
  color = randomColor({
    luminosity: process.argv[3] ? chosenLuminosityByUser : 'dark',
    hue: chosenColorByUser,
  });
}

for (let i = 1; i <= height; i++) {
  if (i < Math.ceil(height / 2) - 1 || i > Math.ceil(height / 2) + 1) {
    pattern += '#'.repeat(width) + '\n';
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

console.log(chalk.hex(color).bold(pattern));
