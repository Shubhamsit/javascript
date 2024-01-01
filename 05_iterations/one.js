// for
for(let i=0; i<10;i++)
{
    const element= i;
    console.log(element);
}


//--------------------for of ----------------------------

//[{}, {}, {} ]

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings="shubham kumar"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//---------------maps----------------
console.log("--------------maps---------------");  //// map give unique elemnts if you give same element it will ignore one
// map also give values in order you have entered
const my_map=new Map()
my_map.set('In',"india")
my_map.set('usa',"united state of america")
my_map.set('fr',"france")
my_map.set('In',"india")
console.log(my_map);

for (const [key, value] of my_map) {
    console.log(key,'->',value);
    
}



const myObject={  // objeccts s not iteratable here under for off loop , below code will give error
    'game':'NFS',
    'game2':'spiderman'

}
for (const myob of myObject) {
    console.log(myob);
    
}