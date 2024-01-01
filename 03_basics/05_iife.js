// immmediately invoked function expresssion(iife)
// iife used to counter global pollution 


(function chai()
{
    console.log("db connected");

}) ();  // here ; is neccesary  as it doesnot know where to stop context 

( function aurcode()
{
    console.log(`db2 connected`);
}

)()



( (name)=> {                                      // iffe without name
    console.log(`db2 connected ${name}`);
})("shubham")
  








