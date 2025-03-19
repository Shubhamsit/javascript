let score =33
console.log(typeof(score));
//-----------------------------------------------------
let age="15"
console.log(typeof age);
let ageInNumber= Number(age);
console.log(ageInNumber);
console.log(typeof ageInNumber);
//----------------------------------------------
let value ="33abc"
let inNumber=Number(value);
console.log(typeof inNumber);
console.log(inNumber);
//--------------------------------------------
let x= 5
let inBoolean=Boolean(x);
console.log(inBoolean);
console.log(typeof inBoolean );

// 1 => true; 0-> false, -1=> true
// "" => false
//"anything unde double qotes" => true
//---------------------------------------
let someNumber=45
let inString=String(someNumber);
console.log(inString);
console.log(typeof inString);


/*****************************operations************************************** */

console.log("--------OPERATIONS------------");
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); 2 raised to power 2
// console.log(2**3); 2 raised to power 3
// console.log(2/2); quotient
// console.log(2%2); remainder

let str1= "shubham"
let str2= " Kumar"
let str3= str1 + str2
console.log(str3);// addition of string
let y=1+"2"
console.log(y);// gives 12
console.log(typeof y);
console.log("1"+2);// gives 12 (IF STRING is in first then it will convert it into string)
console.log("1"+2+2);//gives 122
console.log(1+2+"2");// gives 32 ( if number and some operation in between them then first operation b/w no and then into string)
console.log(true);// gives true
console.log(+true);// gives 1
console.log(+"");// // gives 0

let num1, num2, num3
num1=num2=num3=100

let counter=30
console.log(++counter);
console.log(counter++);
console.log(counter);



