import chalk from "chalk";
//Help text
let title = chalk.blue.bold(`Welcome to Sarfaraz's Calculator!\n`);
let mainHead = chalk.yellow.bold(`Here are operators and their usage\n`);
let data = `use: ${chalk.green('+')} for adding values. \n
use: ${chalk.green('-')} for subtracting values.\n
use: ${chalk.green('* or x')} for multiplying values.\n
use: ${chalk.green('/')} for dividing values.\n
use: ${chalk.green('??')} for getting all calculations values.`;
let result = title + mainHead + data;
export default result;
