// // // Prototype and classes

// // const obj = {
// //     name:"Rohit",
// //     age:38,
// //     greet: function(){
// //         console.log("Hello Ji")
// //     }
// // };


// // // console.log(obj.greet());
// // // obj.greet()

// // // console.log(obj.hasOwnProperty("names"));
// // // console.log(obj.toString());

// // // const arr = [10,20,30];

// // // console.log(arr.length)

// // const obj2 = {
// //     account:30
// // }


// // obj2.__proto__ = obj;

// // console.log(obj.hasOwnProperty("name"))


// // const obj1 = {
// //     name:"Rohit",
// //     age:30,
// //     greet:function(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // }

// // const obj2 = {
// //     name:"Mohit",
// //     age:20,
// //     greet:function(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // }


// // const obj3 = {
// //     name:"Mohan",
// //     age:10,
// //     greet:function(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // }


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }


// // const person1 = new Person("Rohit",20);
// // const person2 = new Person("Mohit",10);

// // console.log(person1);

// // const ob1 = {
// //     name:"Mohan",
// //     age:20,
// //     greet: function(){

// //     }
// // };

// // console.log(ob1);


// class Customer extends Person{
//   constructor(name,age,account,balance){
//     super(name,age);
//     this.account = account;
//     this.balance = balance;
//   }

//   checkBalance(){
//     return this.balance;
//   }
// }

// const c1 = new Customer("Mohan",20,12,540);

// console.log(c1.checkBalance());

const obj = {
    name:"Rohit",
    age:20
}


const obj2 = Object.create(obj);
obj2.account = 10;

console.log(obj2.account);

