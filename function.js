function mySum(num1,num2){
    result = num1+num2
    return result
}

// console.log(mySum(5,4))

// const myObj = {
//     username : "Avi",
//     age: 32
// }

function objData(anyobject)
{
    return `Hello my name is ${anyobject.username} and I am ${anyobject.age} years old`
}

//console.log(objData(myObj)); Explicitly calling object value by defining object separately

//console.log(objData({username: "Avi", age:32})); Implicitly defining object while calling the function

const arr1 = [200,400,300]

function myArr(arrData){
    return arrData[2]
}

//console.log(myArr(arr1));
//console.log(myArr([1,2,3,4,5]));

function cartPrice(...num6){
     result = num6
     return result
}

// console.log(cartPrice(200,300,400,500,600));

// Rest will save all the values provided and convert it into an array.


function myName(username){ // To pass default value if nothing is passed when calling the function
    //if(!username){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} is logged in`
}

console.log(myName());