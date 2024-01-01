const user={
    username:"sachin",
    price:"678",
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

user.welcomemessage()
user.username="shubham"
user.welcomemessage()
console.log(this);



//------------------------------------

function chai()
{
    let username="shubham"
    console.log(this.username); // gives undefined as we cant use this in function
}
chai()


//--------------------------------------Arrow function--------------------------
console.log("-----------------arrow function----------------------");
const chai1= () =>{
    
    let username="shubham"
    console.log(this.username);

}


const addTwo= (num1,num2) =>{
    return num1+num2;
}

console.log(addTwo(3,4));

//-----------------implicit return of arrow function

const add2= (num1,num2) => ( num1+num2);

const obj=() => ({username:"shubham",price:"76756"}) ///  for object return
console.log(obj());
console.log(add2(5,8));


const myarray=[64,36,748,47]


