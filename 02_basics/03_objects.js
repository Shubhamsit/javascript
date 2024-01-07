// singelton


//object literals

const mysym=Symbol("key1")

const jsuser={
    "fullname": "shubham kumar",
    [mysym]: "mykey",

    name:"shubham",
    age:20,
    location:"hajipur",
    email:"shubham@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]

}
console.log(jsuser.name);
console.log(jsuser["fullname"]);
console.log([mysym]);
console.log(jsuser[mysym]);
console.log(jsuser['age'])

jsuser.email="iamshubham@gmail.com"
//Object.freeze(jsuser)// freeze jsuser you cant now modify in object after this line
jsuser.email="bfdfdfhf@gmail.com"
jsuser.name="scahin"
console.log(jsuser.email);
console.log(jsuser.name);
console.log(jsuser);

console.log("----------functions--------");

jsuser.greeting= function()
{
    console.log("hello js user");
}
console.log(jsuser.greeting);// function reference

jsuser.greeting2=function()
{
    console.log(`hello jsuser,${this.email}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());