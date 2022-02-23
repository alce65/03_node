import fs from 'fs';

//  const data = fs.readFileSync('saludo.txt', { encoding: 'utf8' });

fs.readFile('saludo.txt', { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log(`Error`, err.message);
    }
    console.log({ data });
});
console.log('Fin');
