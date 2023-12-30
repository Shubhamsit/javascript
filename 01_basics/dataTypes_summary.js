//# primitive data type

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id==anotherId);// gives false 
const bigNumber=364735746376869n //(for bigInt)

// # referenc type(non primitive)

// array, objects, functions

const heros=["shubham","sachin", "irshad"];  // array
let myObj= {    // object
     name: "shubham",
     age: 20,
}

 const myfunction= function()
{
    console.log("hello world");

}

myfunction();

