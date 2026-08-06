// forEach,filter,reducer,map,set

// const arr=[10,20,30,5,90,87];

//forEach loop
// arr.forEach((number)=>{   
//     console.log(number);
// })

// arr.forEach((number,index,arr)=>{   
//     console.log(number,index,arr);
// })

//filter

// const arr=[10,20,30,5,90,87];

// // const newArr=arr.filter((number)=>number>25); //gives new array
// // console.log(newArr);

// //this=[10,20,30,5,90,87];

// //internal working of compare const compare=(number)=>number>25; somewhat like this.
// //here compare will be passes as a function
// Array.prototype.filtering=function(compare){ //not recomended
//     const ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// const newArr=arr.filtering((num)=>num>25);
// //console.log(newArr);

// const a=[10,20,30,40,1,2];
// const b=a.filtering((num)=>num>20);
// console.log(b);

//map

// const arr=[10,20,30,5,90,87];

// const newArr=arr.map((num)=> num*2);
// console.log(newArr);

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const ide=products.filter((products)=>products.price>100).sort((a,b)=>b.price-a.price).map((products)=>({name:products.name,price:products.price}));
// console.log(ide);

// const ans=products.map((products)=>({name:products.name,price:products.price}));
// console.log(ans);

//map ko function khud bnanan h

//Reducer
//is case m accumulator ko sum smjlo jo intially 0 hai
// const sum=products.reduce((accumulator,currentValue)=>{
//             if(currentValue.inStock){
//             return accumulator+currentValue.price;
//             }else{
//                 return accumulator;
//             }
// },0)

// console.log(sum);

//Data structure: Set // think of a array with unique value(A Set is a list that enforces uniqueness.its a collection of items where duplicate are impossible).

// const arr=[10,20,30,25,25,20];
// const s1=new Set(arr);
// s1.add(11);
// s1.delete(10);
// console.log(s1.size);
// console.log(s1.has(20));

// const email=["ro@gm","ra@gm","mo@gm","ro@gm"]
// // const s1=new Set(email);
// // console.log(s1)
// const uniqueEmail=[...new Set(email)];
// console.log(uniqueEmail);

//Data structure: map

const m1=new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,11],
    [[10,30,11],"Mohit"]
]);

m1.set({name:"Manish",age:20},false)
// console.log(m1);
for(let [keys,vlaue] of m1){
    console.log(keys,vlaue);
}