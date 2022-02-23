import fs from 'fs/promises';

fs.readFile('saludo.txt', { encoding: 'utf8' })
    .then((data) => console.log({ data }))
    .catch((err) => console.log('Error', err.message));
console.log('Fin');
