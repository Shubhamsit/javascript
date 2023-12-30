const marvelHeros=["thor"," ironman","spiderman"]
const dcHeros=["superman","flash","batman"]
//  marvelHeros.push(dcHeros); // create arrays of array
//  console.log(marvelHeros);

const allheros=marvelHeros.concat(dcHeros) //  merged both arrays 
console.log(allheros);

const allnewheros=[...marvelHeros,...dcHeros]// another method for merging arrays preffered over concat
console.log(allnewheros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]// arrays under array
const allArray= anotherArray.flat(Infinity)//  merged all and make it one
console.log(allArray);

console.log(Array.isArray("shubham"));// check for array
console.log(Array.from("shubham"));

let score1= 100
let score2= 200
let score3= 300
let score4= 400
console.log(Array.of(score1, score2,score3,score4));// making array from indivisual variables


