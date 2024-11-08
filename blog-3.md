## Why are Type Guards Necessary? Exploring Various Types of Type Guards and Their Use Cases

In TypeScript,type guard allow to narrow down the type of a variable or expression to a more specific type. 

### Different types of Type Guards and their Use Cases

1. "typeof" Type Guard

This Type Gaurd is normally used to narrow down the premitive data type.

Example:

    type alphanumeric = string | number;

    function add(value1: alphanumeric, value2: alphanumeric) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1+value2;
    }
    else{
        return value1.toString()+value2.toString();
    }
    }


2. "in" Type Gaurd 

This Type Gaurd checks the Type of an object/interface based on their property.

Example:

    type Student={
        name:string;
        STU_ID:number;
    }
   
    type Teacher={
        name:string;
        Designation:string;
    }
   
    const getUser=(user:Student | Teacher)=>{
       
        if('STU_ID' in user){
            console.log(`Name:${user.name} ID:${user.STU_ID}`)
        }
        else{
            console.log(`Name:${user.name} Designation: ${user.Designation}`)
        }
    }

3. "instanceof" Type Gaurd

This Type Gaurd checks the instance of a particular class or narrow down the object of a class.

Example:

    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        makeSound(){
            console.log('Making Sound!!!')
        }
    }
    
    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }
        makeSound(): void {
            console.log('I am barking');
        }
    }
    
    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
        makeSound(): void {
            console.log('I am mewing')
        }
    }
    
    const defineAnimal=(animal: Dog | Cat)=>{
        if (animal instanceof Dog) {
            animal.makeSound();
        } 
        else{
            animal.makeSound();
        }
    }
    
    const dog = new Dog('Doggi');
    const cat = new Cat('Mini');
    
    defineAnimal(dog);
    defineAnimal(cat);
