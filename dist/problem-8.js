"use strict";
{
    const validateKeys = (obj, Keys) => {
        return Keys.every(key => key in obj);
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "email"]));
}
