//function

// function greeting(){
//     console.log("hello");
//     return 10;
// }

// greeting();

// function addToNumber(num1,num2,num3=0,num4=0){
//     const sum=num1+num2+num3+num4;
//     console.log(sum);
// }



// console.log(greeting);
// console.log(greeting);
// console.log(greeting());
// function addToNumber(...num){ //rest operator:with these three dots it create an array,catch multiple values
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// addToNumber(2,3);
// addToNumber(6,7);
// addToNumber(6,7,8);
// addToNumber(6,7,8,9);
// addToNumber(6,7,8,9,1);

// spread operator :Expands an array/object into individual items

// const arr=[10,20,30,40,50];
// const arr2=[30,70,90,100];

// const[first,second,...num]=arr;
// console.log(first,second,num);

// const ans=[...arr,...arr2];
// const ans1=[arr,arr2];

// console.log(ans);
// console.log(ans);

//function :expression

// const addNumber=function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));//phle function initialize krna pdega then function calling


// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }

//arrow function


// const addNumber=(num1,num2)=>{
//     console.log(num1+num2);
// }
//addNumber(4,5);

// const returnNumber= (num1,num2)=>num1+num2;
// console.log(returnNumber(8,9));

// let arr=[10,11,19,7,50];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// const squareNumber=(num)=>num*num;

//if we have single parameter no need of {}
// console.log(squareNumber(6));

// const greeting=()=>{
//     let user={
//         name:"Rohit",
//         age:20,
//     }
//     return user;
// }
// console.log(greeting());

// const greeting=()=>({name:"Rohit",age:20})//here we use () so that it become clear that it is object

// console.log(greeting());

//IIFE Immediately invoked function

// (function greeting(){   //here we use (function)(); use to automatic call a function 
//     console.log("Hello");
// })();

// (()=>{
//     console.log("hi")
// })();

//A callback function in javascript is a function passed as argument to another function.

// function greet(){
//     console.log("hello");
// }

// function dance(){
//     console.log("i m dancing");
// }
// function meet(callback){
//     console.log("i m going");
//     callback();
//         //code hota jisko marta
//         console.log("meeting")
// }

// // greet();
// // meet();

// // greet(meet());

// meet(greet);
// meet(dance);

function blinkitOrderPlace(){
    console.log("we have started packing your order");
}

function zomatoOrderPlace(){
    console.log("we have started preparing your food");
}
function payment(amount,callback){
    console.log(`${amount} payment has initialised`);
    console.log("Payment is received");
    callback();
}
//GST:Goverment
//Rider ko kitna payment dena h
//company ko kitna

payment(500,zomatoOrderPlace);
payment(300,blinkitOrderPlace);