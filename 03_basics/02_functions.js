function calculateCartPrice(...price) /// ...price will take all argument you pass and then return thnm in form of array
{
    return price;

}
console.log(calculateCartPrice(100,4674,7857,57857,76474));

const user={
    username:"sachin",
    price: "100"
}


function handleObject(anyobject){
    console.log(`usrname is ${anyobject.username}and price is${anyobject.price}`);

}

handleObject(user)


const myArray=[200,300,400,500]
function returnSecondValue(getArray)
{
    return getArray[1]

}
console.log(returnSecondValue(myArray));