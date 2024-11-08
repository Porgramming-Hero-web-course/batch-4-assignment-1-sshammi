{
    const sumArray=(numbers:number[]):number=>{
        let sum:number=0;
        numbers.map(value=>{
            sum+=value;
        })
        return sum;
    }
    const numbers:number[]=[1,2,3,4,5];
    console.log(sumArray(numbers));
}