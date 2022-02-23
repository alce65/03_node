import { greetings, args, calculator } from './app.js';
import inquirer from 'inquirer';

greetings();
console.log(process.argv);
const calcArgs = args(process.argv);
console.log();

if (calcArgs.length < 2) {
    inquirer
        .prompt([
            { name: 'arg1', message: 'Primer valor?', type: 'number' },
            { name: 'arg2', message: 'Segundo valor?', type: 'number' },
        ])
        .then((resp) => {
            try {
                console.log(calculator([resp.arg1, resp.arg2]));
            } catch (error) {
                console.log(error.message);
            }
        });
} else {
    try {
        console.log(calculator(calcArgs));
    } catch (error) {
        console.log(error.message);
    }
}
