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
    return !(isNaN(num) || !isInteger(num) || num <= 1);

};

let prinArr = (arr) => {
    console.log("Simplex numbers in diapason [2, " + to + "]:");
    document.write("Simplex numbers in diapason [2, " + to + "]:" + "<br>");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            console.log(i);
            document.write(i + "<br />");
        }
    }
};

let to = prompt("Enter number TO: ");

while (!checkNumber(to)) {
    to = prompt("Enter correct number TO: ");
}

let getSimpNums = (from, to) => {
    let arr = [];
    for (let i = from; i < to; i++) {
        arr[i] = true
    }
    let p = from;
    do {
        for (i = from * p; i < to; i += p) {
            arr[i] = false;
        }
        for (i = p + 1; i < to; i++) {
            if (arr[i]) {
                break;
            }
        }
        p = i;
    } while (p * p < to);
    return arr;
};

prinArr(getSimpNums(2, to));