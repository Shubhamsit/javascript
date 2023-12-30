let mydate =new Date()
console.log(mydate);
console.log(mydate.toString());

console.log(mydate.toDateString());
console.log(mydate.toLocalStrin);

let myCreatedDate= new Date(2023,11,30)
console.log(myCreatedDate.toDateString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);// gives value in miliseconds from 1st jan 1970
console.log(myCreatedDate.getTime());

let newDate= new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

let z=newDate.toLocaleString('default',{
    weekday: "long",

}
)
console.log(z);
