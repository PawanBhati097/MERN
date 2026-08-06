//Scope and Closure ,HOF(high order function)
//Global-> Accessible to everyone
//functional-> accessible only to that function
//Block level scope->accessible only to tha Block
// let a=10;
// //let & const follow all upper scopes but var doesnt follow block scope and follow rest two scopes 
// const b=20;

// if(true){
//     console.log(b);
// }

// function greet(){
//     console.log(a);
// }


// let global=30;
// function greet(){ //valid syntax two global named variables as one is local/functional and other is global
//     let global=40;
//     function meet(){
// console.log(global);
// }
// meet();
// }
// greet();

// function createCounter(){
//     let count=0;

//     function increment(){//Closure: A function that remembers variables from its outer scope    even after the outer function has finished executing.
//         count++;
//         return count;
//     }
//     return increment;
// }
// //console.log(count);
// const counter=createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let user={
//     balance: 500,
//     deposit : function(amount){
//         if(typeof amount=="number" && amount>0){
//         this.balance+=amount;
//         return this.balance;
//         }
//     },
//      withdraw: 500,
//     deposit : function(amount){
//         if(typeof amount=="number" && amount>0 && this.balance>=amount){
//         this.balance-=amount;
//         return this.balance;
//         }
//     },
//     getBalance:function(){
//         return this.balance;
//     }
// }

// // user.balance="Rohit"; // wrong inout
// // console.log(user.balance);
// //console.log(user.deposit(200));

// console.log(user.getBalance());


//method ko access kr paye
// direct access na kr paye

//final keyword
// function createBankAccount(){
//     let balance = 500;
    
//     let user = {
//         deposit: function(amount){
//             if(typeof amount == "number" && amount > 0){
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function(amount){
//             if(typeof amount == "number" && amount > 0 && balance >= amount){
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function(){
//             return balance;
//         }
//     }
//     return user;
// }

// const customer = createBankAccount();
// console.log(customer.withdraw(1000)); // undefined (insufficient funds)
// console.log(customer.withdraw(100));  // 400 (successful withdrawal)
// console.log(customer.getBalance());    // 400

//High order function

function double(value){
    return function execute(num){
        return num*value;
    }
    ;
}
// const n=double(20);
const n=double(20)(5);
console.log(n);