{
    const removeDuplicates=(numbers:number[]):number[]=>{
        return numbers.filter((value, index) => numbers.indexOf(value) === index);
    }
    const numbers:number[]=[1, 2, 2, 3, 4, 4, 5,6,6];
    console.log(removeDuplicates(numbers));
}