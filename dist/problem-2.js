"use strict";
{
    const removeDuplicates = (numbers) => {
        return numbers.filter((value, index) => numbers.indexOf(value) === index);
    };
    const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
    console.log(removeDuplicates(numbers));
}
