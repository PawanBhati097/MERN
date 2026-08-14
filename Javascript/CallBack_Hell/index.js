// zomato application

const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail , Callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(()=>{
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
      Callback(orderDetail);
    },3000)
}



function preparingOrder(orderDetail,Callback){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail)
    },3000);
}


function pickupOrder(orderDetail ,Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        Callback(orderDetail);
    },3000);
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
    },3000)
}






placedOrder(orderDetail, (orderDetail)=>{
    preparingOrder(orderDetail ,(orderDetail)=>{
        pickupOrder(orderDetail, (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});