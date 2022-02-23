export function greetings() {
    console.log('Hola mundo');
}

export function args(args) {
    return args.slice(2);
}

export function calculator(args) {
    const [a, b] = [...args];
    if (isNaN(+a) || isNaN(-b)) {
        throw new Error('Parámetro no válido');
    }
    const result = `
    ${a} + ${b} = ${+a + +b}
    ${a} - ${b} = ${+a - +b}
    ${a} * ${b} = ${+a * +b}
    ${a} / ${b} = ${+a / +b}
    `;
    return result;
}
