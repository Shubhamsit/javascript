//arrays
// in javascript you can  store more than one data type in arrays

const myArr=[0,1,2,3,4,5,6]
const myheros = ["sachin","shubham","irshad"," rajbeer"]
console.log(myArr[3]);
console.log(myheros[1]);
const arr2= new Array(7,8,9)
//arr2 =[7,8,9,12,15];
console.log(arr2[2]);
console.log(arr2);

//array methods

console.log("----------------array methods---------------------------")

myArr.push(34);// to push element in array(in last)
myArr.push(67);
myArr.pop();// to pop element in array( from last)
console.log(myArr);

myArr.unshift(89); //// add 89 to start of array 
console.log(myArr);
myArr.shift()// removes element from starting of array
console.log(myArr);

console.log(myArr.includes(34));// if found gives true otherwise false (Boolean)

const Arr2= myArr.join()  // convert whole array into string and stored in Arr2
console.log(myArr);
console.log(Arr2);
console.log(typeof Arr2);

// slice,splice
console.log("----------slice,splice------------------------");
console.log("A",myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);