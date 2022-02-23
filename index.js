import { greetings, args, calculator } from './app.js';

greetings();
console.log(process.argv);
console.log(args(process.argv));

try {
    console.log(calculator(args(process.argv)));
} catch (error) {
    console.log(error.message);
}
