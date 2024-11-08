"use strict";
{
    const updateProfile = (obj, updateObj) => {
        return Object.assign(Object.assign({}, obj), updateObj);
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}
