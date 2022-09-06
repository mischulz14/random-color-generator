import chalk from 'chalk';
import randomColor from 'randomcolor';

let color = randomColor({
  luminosity: 'random',
  hue: 'random',
});

const chosenColorByUser = process.argv[2];
const chosenLuminosityByUser = process.argv[3];

if (process.argv[2]) {
  color = randomColor({
    luminosity: process.argv[3] ? chosenLuminosityByUser : 'dark',
    hue: chosenColorByUser,
  });
}

if (!chosenColorByUser) {
  for (let i = 1; i < 10; i++) {
    if (i === 4 || i == 6) {
      console.log(chalk.hex(color).bold('#####          ######'));
    } else if (i === 5) {
      console.log(chalk.hex(color).bold(`#####  ${color} ######`));
    } else {
      console.log(chalk.hex(color).bold('#####################'));
    }
  }
}

if (process.argv[2]) {
  for (let i = 1; i < 10; i++) {
    if (i === 4 || i == 6) {
      console.log(chalk.hex(color).bold('#####          ######'));
    } else if (i === 5) {
      console.log(chalk.hex(color).bold(`#####  ${color} ######`));
    } else {
      console.log(chalk.hex(color).bold('#####################'));
    }
  }
}
