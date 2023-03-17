//ther are the two types of datatypes of detatype

//primitive
// 7 type:- string, number, boolearn, null, undifined, symbol, bigint.

const score = 200
const scoreValue =200.3

console.log(typeof score);
console.log(typeof scoreValue);

const isLoggedIn = false

console.log(typeof isLoggedIn);

const outsideTemp = null

console.log(typeof outsideTemp);

let userEmail; // this is undifaind

console.log(typeof userEmail);

const id = Symbol('456')
const unotherId = Symbol('456')

console.log(typeof unotherId)

const bigNumber = 2393945340950993n

console.log(typeof bigNumber)


// Nonprimitive (reference):- Array, objects, function.

const froots = ["apple", "banana", "mango"] // this is an Array.

{
    name: "mantha"
    age: 22,

} 
//this is an object, basicscly if contant inside the corly bracket thet is object.

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// note: every none-primitiv type is alwes (object)

 //https://262.ecma-international.org/5.1/#sec-11.44.3