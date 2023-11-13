import _ from 'lodash';
import chalk from 'chalk';

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 8, 9]

const diff = _.difference(a, b);
const diff2 = _.difference(b, a) ;

console.log(chalk.red.bold(diff))

console.log(chalk.yellow(diff2))