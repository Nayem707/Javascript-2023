const lines = prompt('enter number: ').split(' ');
console.log(lines);

const sum = (A, B) => A * B;

const result = lines.map(Number).reduce(sum);

console.log(`PROD = ${result}`);
