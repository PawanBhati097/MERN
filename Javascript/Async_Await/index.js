// //async await
// //async function always return promise
// async function greet(){
//     return "rohit";
//   //return new Promise((resolve,reject)=>{
//     //resolve("rohit");
//    // reject("rohit")
//  // })
// }
// const response=greet();
// //console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error :",error);
// })

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));


// const response=await fetch("https://api.github.com/users"); //program freeze
// const data=await response.json();
// console.log(data);

// async function github(){
//     try{
//     const response = await fetch("https://api.github.com/users");
//     if(!response.ok){
//         throw new Error("Data is not present");
//     }
//     const data = await response.json();
//    // console.log(data);

//    const parent=document.getElementById("first");
//    for(let user of data){
//     const element=document.createElement("div");
//     element.classList.add("user");

//     const image=document.createElement("img");
//     image.src=user.avatar_url;

//    const userName= document.createElement("h2");
//     userName.textContent=user.login;

//     const anchor=document.createElement('a');
//     anchor.href=user.html_url;
//     anchor.textContent="Visit Profile";

//     element.append(image,userName,anchor);
//     parent.append(element);
//    }
// }
// catch(error){
//     console.log("error");
// }
// }


// github();
// console.log("Hello good morning");

// const orderDetail = {
//     orderId: 123123,
//     food:["Pizza","biryani","coke"],
//     cost: 620,
//     customer_name: "Rohit",
//     customer_location: "Dwarka",
//     restaurant_location: "Delhi"
// }

// function placedOrder(orderDetail ){
//     console.log(`${orderDetail.cost} Payment is in progress`);

//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//       console.log("Payment is received and order get placed");
//       orderDetail.status = true;
//       resolve(orderDetail);
//     },3000)
//     })
    
// }



// function preparingOrder(orderDetail){
//     console.log(`Your food preparation started of ${orderDetail.food}`);
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Your order is now prepared");
//         orderDetail.token = 123;
//         resolve(orderDetail);
//     },3000);
// })
// }


// function pickupOrder(orderDetail ){
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I have picked up the order");
//         orderDetail.received = true;
//         resolve(orderDetail);
//     },3000);
// })
// }


// function deliverOrder(orderDetail){
//     console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Order delivered succesfully");
//         orderDetail.delivery = true;
//          resolve(orderDetail);
//     },3000)
// })
// }


// async function ordering(){
//     try{
// const response1=await placedOrder(orderDetail);
// const response2=await preparingOrder(response1);
// const response3=await pickupOrder(response2);
// const response4=await deliverOrder(response3);

// console.log(response4);
// }
// catch(error){
//     console.log("Error: ",error);
// }

// }

// ordering();


async function userDetail(params){
    // const comment= await fetch("userComment");
    // const photos= await fetch("userPhotos");
    // const chat= await fetch("chat");
    const[comment,photo,chat]=await Promise.all([fetch("userComment"),fetch("photo"),fetch("chat")]);//parallel fetching
}