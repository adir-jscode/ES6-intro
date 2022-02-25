const numbers = [11, 12, 13, 14, 15];
console.log(numbers);
console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);

const number2 = [...numbers, 99];
numbers.push(77);
console.log(numbers);
console.log(...number2);