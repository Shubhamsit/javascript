function myfunction(){
    console.log("shubhamrajn kashyap");
}
myfunction();


function adding (num1,num2)

{
   let  result =num1+num2
   return result;
}

 result=adding(5,6);
 console.log(result);




 function loginuser(username)
 {
    if(username==undefined)
    {
        console.log("please enter a user name");
        }
    return `${username} justed logged in`
 }
 console.log(loginuser("shubham")); //// if you doesnot pass any value to function then it will give undefined