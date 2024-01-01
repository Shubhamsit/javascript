// const tinderUser=new Object() //  singleton object 
const tinderUser={}// non singletion object
tinderUser.id="100"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularuser={
    email:"shubham@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shubham",
            lastname:"kumar"
        }

    }
}
console.log(regularuser);
console.log(regularuser.fullname.userfullname.firstname);

//--------------merging odf objects-----------------------
console.log("--------------merging ofobjects-----------------");

const obj1={1: "a",2:"b",3:"c"}
const obj2={3:"A",4:"B",5:"C"}
//const obj3={obj1, obj2}
const obj3=Object.assign({},obj1, obj2)//{}-> target,   obj1&obj2-> source
const obj4={...obj1,...obj2}// can also be used for merging
console.log(obj3);
console.log(obj4);


///---------------------------------------- array of objects generall used when we deal  with databases
console.log("------------------------------------- array of objects generall used when we deal  with databases");
const user=[
    {
        id:"1",
        email:"shubham@gmail"
    },

    {
        id:"2",
        email:"sachin@gmail"

    }

]
console.log(user[1]);
console.log(user);

console.log("-----------------very impoertant -------------------- finding keys of an object and store thnm in array");
console.log(tinderUser);
console.log(Object.keys(tinderUser));// store keys in  array
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("value"));