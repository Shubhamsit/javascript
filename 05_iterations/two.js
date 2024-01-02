const myobject ={
    js:"javasceipt",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"

}
for (const key in myobject) {
    console.log(key);
}

for (const key in myobject) {
    console.log(myobject[key]);  // gives value of keys
}

    /// for each loop

    console.log("======for each looop=================");

     const coding=["js","html","c++"]
    coding.forEach(function (item){
        console.log(item)
    })

    coding.forEach((item)=>{
        console.log(item);
    })

    function printme(item)
    {
        console.log(item);
    }
    coding.forEach(printme) // only give reference of printme

    coding.forEach((item,index,arrr)=>{
        console.log(item,index,arrr);   // it also contains index and whole array 
    })


    //===================very important ----------------------

    const mycoading=[
        {
            langname:"javascript",
            size:"45"
        },
        {
            langname:"python",
            size:"77"
        },
        {
            langname:"c++",
            size:"776"
        }

    
    ]

    mycoading.forEach((value)=>{
        console.log(value.langname);
        console.log(value.size);
    })
