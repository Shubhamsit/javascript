// stack(primitive), heap(non-primitive)
//  when stack memory used-> gives copy of value
//  when heap memory used -> gives refrence of orignal value , and when we chang something it will change in orignal value
let mywebsite= " bampaara.com"

let userone ={
    emil: " shubham@gmail.com",
    upi: "user@ybl"

}

let usertwo= userone

   usertwo.email="sachin@gmail"
   usertwo.upi="bhjhf@ybl"



console.log(userone.email);
console.log(usertwo.email);
console.log("shubham");
