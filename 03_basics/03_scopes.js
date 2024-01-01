if(true)
{
    let a=10
    const b=20
    var c=30 //// can be accesed outside not preferable

}
//console.log(a);
//console.log(b);
console.log(c);


function one()
{
    const username="shubham"
    function two()
    {
        const website="bampaara"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


//--------------------intreting--------------------------
function addOne(num)
{
    return num+1
}
addOne(5)

//-----------------below code is right----------------
const addTwo= function(num)
{
    return num+2

}
addTwo(5)

//-------------------------below code  will give error----------------
addThree(5)  //// we cant call addThree()  before dedeclaration here as we aer holding function in a variable addThree
const addThree= function(num)
{
    return num+2

}







