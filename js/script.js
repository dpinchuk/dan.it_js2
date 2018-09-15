/*
 Реализовать программу на Javascript, которая будет находить все простые числа в заданном диапазоне.

 Технические требования:
 - Считать с помощью модального окна браузера число, которое введет пользователь.
 - Вывести в консоли все простые числа от 1 до введенного пользователем числа.
 - Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.
*/

let isInteger = (num) => {
    return num - parseInt(num) === 0;
};

let checkNumber = (num) => {
    return !(isNaN(num) || !isInteger(num) || num < 1);

};

let printArr = (arr, from, to) => {
    console.log("Simplex numbers in diapason [" + from + ", " + to + "]:");
    document.write(`Simplex numbers in diapason [${from}, ${to}]:<br />`);
    arr.forEach((item) => {
        if (item >= from) {
            console.log(item);
            document.write(`${item}<br />`);
        }
    });
};

let from = Number(prompt("Enter number FROM: "));
let to = Number(prompt("Enter number TO: "));

while (from > to) {
    from = 0;
    to = 0;
    while (!checkNumber(from)) {
        from = Number(prompt("Enter correct number FROM: "));
    }
    while (!checkNumber(to)) {
        to = Number(prompt("Enter correct number TO: "));
    }
}

let getPrimes = (to) => {
    let a = new Array(parseInt(to = to / 2)),
        t = (Math.sqrt(4 + 8 * to) - 2) / 4,
        u = 0,
        r = [];
    for (let i = 1; i < (to - 1) / 3; i++) a[1 + 3 * i] = true;
    for (let i = 2; i <= t; i++) {
        u = (to - i) / (1 + 2 * i);
        if (i % 3 - 1) for (let j = i; j < u; j++) a[i + j + 2 * i * j] = true;
    }
    for (let i = 0; i < to; i++) !a[i] && r.push(i * 2 + 1);
    return r;
};

printArr(getPrimes(to), from, to);