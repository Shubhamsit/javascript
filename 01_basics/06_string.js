// many functions in  strings are abvilable go to mdn references for more



const name="shubham"
const repo=30
//console.log(name+repo+ "value"); ( not a good practice for reading)
console.log(`hello my name is ${name} and my repo count is ${repo}`);  // (good for reading)

// another method for string declaration

const gamename= new String('sachin')
console.log(gamename);
console.log(gamename.charAt(1));
console.log(gamename.indexOf('i'));
console.log(name.toUpperCase());
console.log(name.charAt(1));

const string1=gamename.substring(0,2)// only print upto index 1 , 2 is not included
console.log(string1);
const string2= gamename.slice(-5, 0)
console.log(string2);
const string3= "  shubham  " // trim removes starting and ending spaces of string
console.log(string3);
console.log(string3.trim());

const url="gttps://bampaara.com/my%20account"
console.log(url);
const p= url.replace('%20','-')
console.log(p);
console.log(url.replace('%20','-'));

console.log(url.includes('paara')); // for finding any particular sub string is included or not

console.log(url.split('%20'));
console.log("shubham raj");
