function add(num1, num2 = 0) {
    // console.log(num1, num2);
    // OPTION 1
    // if (num2 === undefined) {
    //     num2 = 0;
    // }

    // OPTION 2
    // num2 = num2 || 10;
    const total = num1 + num2;
    return total;
}

const result = add(15,10);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}