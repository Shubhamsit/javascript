// if

const isuserloggedin=true

if(isuserloggedin)  // ecexute if condition is true
{

}

//   <, > , <= , >=, ==, !=, ===, !==



//falsy values

// false , 0, -0, BigInt, 0n,"", null, undefined,NaN

//truthy values

// "0", "false", " ",[], {},function(){}


// nullish coalescing operator(??): null ,undefined

let val1;
val1=5??10
console.log(val1);
let val2;
val2=null??10
console.log(val2);

// ternary operatror
const price=100
price <=80?console.log("less than 80"): console.log("greater than 80");