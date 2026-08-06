//Execution Contrxt
//Memory allocation
// a=undefined
//b=undefined
//addNumber=fncode
//sumResult1=undefined
//sumResult2=undefined

//Execution Phase



// console.log(a); //undefined

// var a=10; //a=10;
// var b=20; //b=20;
// function addNumber(num1,num2){
//     var sum=num1+num2;
//     return sum;
// }
// var sumResult1=addNumber(a,b);
// var sumResult2=addNumber(4,5);
// console.log(sumResult1,sumResult2);

//let const
//memory allocation
//a =<uninitialise> (Temporal dead zone)//nonoe can use until i put some in it.
// var → gets undefined during memory creation (no TDZ)

// let & const → enter TDZ during memory creation (no undefined)
//b =<uninitialise> (Temporal dead zone)
//Execution

let a=10;
const b=20;
const addNumber=function(num1,num2){ //uninitialised during memory phase
    const sum=num1+num2;
    return sum;
}
console.log(a,b);
const result=addNumber(a,b);
console.log(result);

//Hoisting: it is javascript's behavior of knowing about a variable or function's existence before executing
// the code