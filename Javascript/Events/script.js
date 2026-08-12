// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="BYE GOOD MORNING";
// }

//const element= document.getElementById("first");//overriding problem
// element.onclick=function handleClick(){
//     element.textContent="BYE GOOD MORNING";
//     element.style.backgroundColor="pink";
// }

// element.addEventListener('click',()=>{
//      element.textContent="BYE GOOD MORNING";
// })
// element.addEventListener('dblclick',()=>{//double click
//      element.style.backgroundColor="pink";
// })
// element.addEventListener('mouseenter',()=>{//double click
//      element.style.backgroundColor="brown";
// })
// element.addEventListener('mouseleave',()=>{//double click
//      element.style.backgroundColor="black";
// })

// const child1=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//         child1.textContent="I AM CLICKED";
// })


// const parent=document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     e.target.textContent="I am clicked";
// })

// function handleClick(e){
//     e.target.textContent="I am clicked";
//parent.removeEventListenerEventListener('click',handleClick);
// }
// parent.addEventListener('click',handleClick);



// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent="I AM CLICKED";
//     })
// }

const grandparent=document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log(e.target);//tell where i have clicked
   // console.log("grandparent is clicked")
},true)
const parent=document.getElementById("parent");
  parent.addEventListener('click',(e)=>{
    //console.log("parent is clicked")
    console.log(e);
    //e is here event object
},true)
document.getElementById("child").addEventListener('click', (e) => {
    //console.log("Child clicked");
    e.stopPropagation(); // Stops event from going further
}, true);
//captue phase on hai:top se down aaoge:us time pe event ko triogger kar diya jayega
//capture phase off hai:Event hai usko down to up(Bubbling phase bolte hai,tab trigger kra jayega)

//how to remove enentlistner from parent
