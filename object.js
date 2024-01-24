// Objects can be created by using literals or constructor

const mySym = Symbol("Hello")
// console.log(typeof mySym);

let myObj = {
    "first name": "Avinash",
    age:32,
    [mySym]: "Keyvalue", // This is how you use a Symbol as a Key in an Object
    isLoggedIn: "True",
    workingDays: ["Monday",  "Tuesday"]
}

//Object.freeze(myObj) // To prevent any change in Object values is done by using Freeze method
myObj.age = 57
// console.log(myObj);

// console.log(myObj.age);
// console.log(myObj["first name"]); 

 console.log(myObj);
const myOb1 = new Object() // By a constructor -- will always create a Singleton

let newObj = new Object()

newObj.fname = "Avi"
newObj.email = "Avi@agies.com"

console.log(newObj);

let thirdObj = {...myObj, ...newObj} // Spread operator to spread the value and assign it to new object.

console.log(thirdObj);

const fourthObj = Object.assign({},myObj, newObj) // Assign will store the data into an empty object when you give the empty {} and than assign it to new object.
console.log(fourthObj);

// Object.assign(target, source1, source2,.....)

// // Access Key and Value from Object

//console.log(Object.keys(newObj)); // This will always return an Array
//console.log(Object.values(newObj)); // This will always return an Array

const bigoBj = { // Nested objects
    fname : "Atul",
    empdata: {
        empid : 15,
        joiningDate: "2024-1-24"
    }
}

console.log(bigoBj.empdata.empid); // Proper way to access nested objects