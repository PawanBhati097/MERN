//this call apply bind
//this : call object method
// strict mode vs non strict mode
//globalThis points to global object of the environment (universal use)
//norma function:without strict mode,this wiil point to global object
//in strict mode it will point to undefined
//call apply bind, this apply to the invoking object
//arrow function takes this keyword from its lexical environment scope

// 'use strict'
// var a=10;
//  var b=20;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Rohit","Mohit");

//console.log(window);//error//given by browser

//console.log(global);//part of js

//document.getElementById("h1")//document part of browser or dom


//--------------------This keyword------------------------------

//this global in global scope:NodeJS(Empty object),but in browser it will point to global object

//console.log(this);

//function

// function greet(){
//         console.log(`hi ${this.name}`);
//     }

//     function incrementAge(value,name){
//         this.age+=value;
//         this.name=name;
//         console.log(this.age);
//         console.log(this.name);

//     }

// const user={
//     name:"rohit",
//     age:30,
// }
// const user2={
//     name:"mohit"
// }
// // greet.call(user);
// // greet.call(user2);

// //incrementAge.call(user,5,"mohan");
// //------------------------------------------Apply------------------------------------------------

// //incrementAge.apply(user,[5,"mohan"]);

// //-----------------------------------------Bind--------------------------------------------------

// const inr=incrementAge.bind(user,10,"mohan");

// //console.log(inr)

// inr();

// //greet();

// // user2.greet=user.greet;

// // user2.greet();

// // `use strict`

// // function greet(){
// //     console.log(this);
// // }

// // greet();








//class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// //new creates an empty object and this points to that empty object{}
// const p1=new Person("Rohit",20)
// console.log(p1);

//Arrow Function: this doesnt exist for arrow function,lexical environment scope

// const greet=()=>{
//     console.log(this);
// }

// greet();

// const user={
//     name:"rohit",
//     greet:function(){
//         const that=this;
//         function meet(){
//             console.log(that);

//         }
//         meet();
//     }
// }
// console.log(user.greet());

// const stopWatch={
//     second:0,
//     start:function(){
//         const that=this;
//         setInterval(function(){
//             that.second++;
//             console.log(that.second);
//         },1000);
//     }
// }

// const stopWatch={
//     second:0,
//     start:function(){
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000)
//     }
// }

// stopWatch.start();

// const user={
//     name:"rohit",
//     greet:()=>{
//         console.log(this)
//     }
// }
// user.greet();


// const button=document.getElementById("first");

// button.addEventListener('click',function(){
//     console.log(this);
// })

//this keywor:global scope in node js:{}
//windows:window object

//function:this keyword ,if somwone envoke the method or function it will point to that
//Normal function: when noone is invokig it,
//Non strict :global object for node and browser
//strict :undefinded

//arrow function:it takes from its lexical environment scope