"use strict";
{
    const sumArray = (numbers) => {
        let sum = 0;
        numbers.map(value => {
            sum += value;
        });
        return sum;
    };
    const numbers = [1, 2, 3, 4, 5];
    console.log(sumArray(numbers));
}
