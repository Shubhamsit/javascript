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

    