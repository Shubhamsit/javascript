// //ceating promises
// const promise1=new Promise(function(resolve, reject){
//     //do an async task
//     // db calls, crypto graphy, network call
//     setTimeout(function(){
//         console.log("asynk taskis complete");
//         resolve()
//     },2000)


// })
// promise1.then(function(){
//     console.log("prpmised consmed");
// })

// //--------------------------------------------------------------------//
// new Promise(function(res,rej){  /// you can give any name to res and rej
//     //do an async task
//     // db calls, crypto graphy, network call
//     setTimeout(function(){
//         console.log("asynk task 2is complete");
//         res()
//     },2000)


// }).then(function(){
//     console.log("prpmised  2consmed");
// })


// //---------------------------------------------------------------------------------------------//
// const promise3=new Promise(function(res,rej){
//     setTimeout(function(){
//         res({username:"chai",email:"shubbham@gmail",roll:'11'})

//     },2000)
// }).then(function(user){
//     console.log(user);
// })

// //-----------------------------------------------------------------------------------------------------//

// const promise4=new Promise(function(resolve,reject){

//     let error=false
//     if(!error)
//     {
//         resolve({username:"shubham raj",password:"1234556"})
//     }
//     else{
//         reject("somethig went wrong")
//     }

// })

// promise4.then((user)=>{
//     console.log(user);
//     return user.username

// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);

// }).finally(()=>{
//     console.log("the prmise is either resolved or rejected");
// })

// //------------------------------------------------------------------------------------------------------//


const promise5=new Promise(function(resolve,reject){
    let error=true
    if(!error)
    {
        resolve({username:"javascript",password:"1234556"})
    }
    else{
        reject("js went wrong")
    }

    


})

async function consumepromise(){
try {
    const res= await promise5

     console.log(res);
    
} 
catch (error) {
    console.log(error);
    
}

}
consumepromise()

async function getalluser()
{

    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    console.log(data);
}
        
    catch (error) {
        console.log("e",error);
        
    }
}
    
getalluser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((res)=>{
    console.log(res);
})
.catch((errr)=>console.log(error))
